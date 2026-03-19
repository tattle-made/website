const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { projectSlugMaker } = require("./src/lib/project-slug-maker")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

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

  // List of all unique projects tags- ex: all projects will uli and Uli will be represented as uli &  Viral Spiral and viral-spiral with viral-spiral, and so on
  const projects = [
    ...new Set(
      nodes
        .map((node) => node.frontmatter.project)
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

  createPage({
    path: `/blog/`,
    component: require.resolve(`./src/components/default-blog-index-layout.js`),
    context: { projects },
  })
  // Blog Dashboard
  createPage({
    path: `/blog/dashboard/`,
    component: require.resolve(`./src/components/default-blog-dashboard.js`),
  })
  //siteMapURLs.set("Blogs", "/blog")
  siteMapNodes.push({ name: "blog", isDir: false, node: { name: "blog" } })

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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MdxFrontmatter {
      author: [Mdx] @link(by: "fields.slug")
      project: Mdx @link(by: "fields.slug")
    }
  `)
}
