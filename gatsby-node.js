const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { projectSlugMaker } = require("./src/lib/project-slug-maker")

exports.createPages = async ({ graphql, actions, reporter, getNodesByType }) => {
  const { createPage } = actions

  // Frontmatter problems that would otherwise be silently ignored. All of them are collected
  // first so the build fails once with the full list.
  const frontmatterProblems = []
  const filePathOf = (node) => path.relative(__dirname, node.internal.contentFilePath)

  // Project values that don't match any project MDX file get silently dropped.
  // getNodesByType returns the raw stored nodes, so frontmatter.project here is still the string
  // written in the file (e.g. "Uli"). In GraphQL queries the same field resolves to the linked
  // project node instead (see createSchemaCustomization below).
  const mdxNodes = getNodesByType("Mdx")
  const projectSlugs = new Set(
    mdxNodes
      .filter((node) => node.frontmatter?.type === "project")
      .map((node) => node.fields.slug)
  )
  mdxNodes.forEach((node) => {
    const project = node.frontmatter?.project
    if (typeof project !== "string" || project.trim() === "") return
    if (!projectSlugs.has(projectSlugMaker(project))) {
      frontmatterProblems.push(
        `Unknown project "${project}" in ${filePathOf(node)}. Add a matching file in src/project/ or fix the value.`
      )
    }
  })

  // Frontmatter keys that differ only in case from a more commonly used key
  // (e.g. "Project" instead of "project") are never read, as the code only uses the usual spelling.
  // A simple "keys must be lowercase" check isn't used because some valid keys are camelCase
  // (e.g. isCurrentContributor in src/community/).
  const keyUsage = {}
  mdxNodes.forEach((node) => {
    Object.keys(node.frontmatter || {}).forEach((key) => {
      keyUsage[key] = (keyUsage[key] || 0) + 1
    })
  })
  mdxNodes.forEach((node) => {
    Object.keys(node.frontmatter || {}).forEach((key) => {
      // Among all spellings of this key (e.g. "project", "Project"), pick the one used in the most files
      const usualKey = Object.keys(keyUsage)
        .filter((k) => k.toLowerCase() === key.toLowerCase())
        .sort((a, b) => keyUsage[b] - keyUsage[a])[0]
      if (usualKey !== key) {
        frontmatterProblems.push(
          `Frontmatter key "${key}" should be "${usualKey}" in ${filePathOf(node)}`
        )
      }
    })
  })

  // Fails `gatsby build`, but only logs the error in `gatsby develop`
  if (frontmatterProblems.length) {
    reporter.panicOnBuild(
      `Found ${frontmatterProblems.length} frontmatter problem(s):\n  - ${frontmatterProblems.join("\n  - ")}`
    )
  }

  // Fetch all MDX nodes to create pages
  const result = await graphql(`
  query {
    allMdx {
      nodes {
        id

        # Slug used for creating URLs
        fields {
          slug
        }

        frontmatter {
          name
          description
          people
          tags
          excerpt
          date

          # Author is now a linked MDX node (Person)
          author {
            # Slug of the author (used for linking to /people page)
            fields {
              slug
            }
            # Author details
            frontmatter {
              name
              role
            }
          }

          # Project is now a linked MDX node
          project {
            # Slug of the project (used for linking to /project page)
            fields {
              slug
            }
            # Project details
            frontmatter {
              name
            }
          }

          # Cover image for the blog post
          cover {
            childImageSharp {
              gatsbyImageData(
                width: 300
                height: 200
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }

        # File path used to determine content type (blog, people, project)
        internal {
          contentFilePath
        }
      }
    }
  }
`)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for Projects')
  }

  const nodes = result.data.allMdx.nodes
  const blogNodes = nodes.filter(node =>
    node.internal.contentFilePath.indexOf("/src/blog/") !== -1
  );

  const newsletterNodes = nodes.filter(node =>
    node.internal.contentFilePath.indexOf("/src/newsletter/") !== -1
  );

  // List of all unique projects tags- ex: all projects will uli and Uli will be represented as uli &  Viral Spiral and viral-spiral with viral-spiral, and so on
  const projects = [
    ...new Set(
      nodes
        .map((node) => node.frontmatter.project?.frontmatter?.name)
        .filter(
          (project) => typeof project === "string" && project.trim() !== ""
        )
        .map((project) => projectSlugMaker(project))
    ),
  ]

  // Unique Set of all the Tags
  const tags_set = new Set()
  result.data.allMdx.nodes.forEach((node) => {
    const tags_arr = node.frontmatter.tags
      ? node.frontmatter.tags.split(",").map((tag) => tag.trim())
      : []
    if (tags_arr) {
      tags_arr.forEach((tag) => tags_set.add(tag))
    }
  })
  // create folder for user avatar
  // try {
  //   await fs.access("./src/people/avatar")
  // } catch {
  //   await fs.mkdir("./src/people/avatar")
  // }

  // The array should be similar to the tree (in default-sitemap-layout). If node exists pass node, else make a node object to pass name in it.
  const siteMapNodes = []

  const POSTS_PER_PAGE = 36
  const numBlogPages = Math.ceil(blogNodes.length / POSTS_PER_PAGE)
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: require.resolve(`./src/components/default-blog-index-layout.js`),
      context: {
        projects,
        skip: i * POSTS_PER_PAGE,
        limit: POSTS_PER_PAGE,
        currentPage: i + 1,
        numPages: numBlogPages,
      },
    })
  })

  // Blog Dashboard
  createPage({
    path: `/blog/dashboard/`,
    component: require.resolve(`./src/components/default-blog-dashboard.js`),
  })
  //siteMapURLs.set("Blogs", "/blog")
  siteMapNodes.push({ name: "blog", isDir: false, node: { name: "blog" } })

  // Newsletter Index Page

  createPage({
    path: `/newsletter/`,
    component: require.resolve(
      "./src/components/atomic/layout/all-newsletters-index-layout.js"
    ),
    context: {
      newsletterNodes,
    },
  })

  // CREATE TAGS PAGE
  tags_set.forEach((tag) => {
    createPage({
      path: `/blog/tags/${tag}`,
      component: require.resolve("./src/components/default-tag-page-layout.js"),
      context: { tag },
    })
  })

  // Create Tags Project Page
  projects.forEach((project) => {
    createPage({
      path: `/blog/tags/project/${project}`,
      component: require.resolve(
        "./src/components/default-tag-project-page-layout.js"
      ),
      context: { project },
    })
  })

  // Create Tags Project Page for Updates
  projects.forEach((project) => {
    createPage({
      path: `/updates/tags/project/${project}`,
      component: require.resolve(
        "./src/components/default-updates-project-tag-page-layout.js"
      ),
      context: { project },
    })
  })

  nodes.forEach(async (node) => {
    const { internal, id } = node
    // console.log(`------ : ${id}`)

    let fileAbsolutePath = internal.contentFilePath

    if (fileAbsolutePath.indexOf("/src/people/") !== -1) {
      // create QR code avatar

      // await QRCode.toFile(
      //   `./src/people/avatar/${ node.fields.slug}.png`,
      //   "/people/${ node.fields.slug}"
      // )

      // create Page
      await createPage({
        path: `/people/${node.fields.slug}`,
        component: require.resolve(`./src/components/default-people-layout.js`),
        context: { id },
      })
    }

    // if (fileAbsolutePath.indexOf("/src/project/") !== -1) {
    //   createPage({
    //     path: `/project/${ node.fields.slug}`,
    //     component: require.resolve(`./src/components/default-page-layout.js`),
    //     context: { id: node.id },
    //   })
    // }

    // CREATE BLOGS
    if (fileAbsolutePath.indexOf("/src/blog/") !== -1) {
      const blogTemplate = path.resolve(
        `./src/components/default-blog-layout.js`
      )
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
          blogNodes: blogNodes
        },
      })
    }

    // CREATE NEWSLETTERS

    if (fileAbsolutePath.indexOf("/src/newsletter/") !== -1) {

      const newsletterTemplate = path.resolve(
        "./src/components/default-blog-layout.js"
      )

      createPage({

        path: `/newsletter/${node.fields.slug}`,

        component: `${newsletterTemplate}?__contentFilePath=${node.internal.contentFilePath}`,

        context: {
          id: node.id,
          newsletterNodes: newsletterNodes
        },

      })

    }

    //TODO:Reconsider this
    // CREATE PROJECTS
    if (fileAbsolutePath.indexOf("/src/project/") !== -1) {
      createPage({
        path: `/project/${node.fields.slug}`,
        component: require.resolve(`./src/components/default-blog-layout.js`),
        context: {
          id: node.id,
          blogNodes: blogNodes
        },
      })
    }
  })
  // Create the Sitemap Page
  await createPage({
    path: `/sitemap/`,
    component: require.resolve(`./src/components/default-sitemap-layout.js`),
    context: { siteMapNodes: siteMapNodes },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    let slug;

    // Use slug from frontmatter for people and project nodes
    if (node.frontmatter?.slug) {
      slug = node.frontmatter.slug
    } else {
      // Generate slug from file path for blog posts
      const { createFilePath } = require(`gatsby-source-filesystem`)
      const value = createFilePath({ node, getNode })

      // Remove leading and trailing slashes to keep slug clean
      slug = value.replace(/^\/|\/$/g, '')
    }

    // Attach slug as a field to the node
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes([
    `
    type MdxFrontmatter {
      author: [Mdx] @link(by: "fields.slug")
    }
  `,
    // Project is linked to a project MDX node by slug. The frontmatter value is
    // normalised first, so "Uli", "uli" and "Viral Spiral" all resolve correctly.
    schema.buildObjectType({
      name: "MdxFrontmatter",
      fields: {
        project: {
          type: "Mdx",
          resolve: (source, args, context) => {
            const slug = projectSlugMaker(source.project)
            if (!slug) return null

            return context.nodeModel.findOne({
              type: "Mdx",
              query: {
                filter: {
                  fields: { slug: { eq: slug } },
                  frontmatter: { type: { eq: "project" } },
                },
              },
            })
          },
        },
      },
    }),
  ])
}
