const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { projectSlugMaker } = require("./src/lib/project-slug-maker")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // create pages for people
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            name
            description
            people
            tags
            project
          }
          fileAbsolutePath
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for Projects')
  }

  const nodes = result.data.allMdx.nodes
  // List of all unique projects tags- ex: all projects will uli and Uli will be represented as uli &  Viral Spiral and viral-spiral with viral-spiral, and so on
  const projects = [
    ...new Set(
      nodes
        .map(node => node.frontmatter.project)
        .filter(project => typeof project === "string" && project.trim() !== "")
        .map(project => projectSlugMaker(project))
    ),
  ]

  // Unique Set of all the Tags
  const tags_set = new Set()
  result.data.allMdx.nodes.forEach(node => {
    const tags_arr = node.frontmatter.tags
      ? node.frontmatter.tags.split(",").map(tag => tag.trim())
      : []
    if (tags_arr) {
      tags_arr.forEach(tag => tags_set.add(tag))
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
    component: path.resolve(`./src/components/default-blog-index-layout.js`),
    context: { projects },
  })
  //siteMapURLs.set("Blogs", "/blog")
    siteMapNodes.push({name:"blog",isDir:false,node:{name:"blog"}})

  // CREATE TAGS PAGE
  tags_set.forEach(tag => {
    createPage({
      path: `/blog/tags/${tag}`,
      component: path.resolve("./src/components/default-tag-page-layout.js"),
      context: { tag },
    })
  })

  // Create Tags Project Page
  projects.forEach(project => {
    createPage({
      path: `/blog/tags/project/${project}`,
      component: path.resolve(
        "./src/components/default-tag-project-page-layout.js"
      ),
      context: { project },
    })
  })

  // Create Tags Project Page for Updates
  projects.forEach(project => {
    createPage({
      path: `/updates/tags/project/${project}`,
      component: path.resolve(
        "./src/components/default-updates-project-tag-page-layout.js"
      ),
      context: { project },
    })
  })

  nodes.forEach(async node => {
    const { fileAbsolutePath, id } = node
    // console.log(`------ : ${id}`)

    if (fileAbsolutePath.indexOf("/src/people/") !== -1) {
      // create QR code avatar

      // await QRCode.toFile(
      //   `./src/people/avatar/${node.slug}.png`,
      //   "/people/${node.slug}"
      // )

      // create Page
      await createPage({
        path: `/people/${node.slug}`,
        component: path.resolve(`./src/components/default-people-layout.js`),
        context: { id },
      })
    }

    // if (fileAbsolutePath.indexOf("/src/project/") !== -1) {
    //   createPage({
    //     path: `/project/${node.slug}`,
    //     component: path.resolve(`./src/components/default-page-layout.js`),
    //     context: { id: node.id },
    //   })
    // }

    // CREATE BLOGS
    if (fileAbsolutePath.indexOf("/src/blog/") !== -1) {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`./src/components/default-blog-layout.js`),
        context: { id: node.id },
      })
    }

    //TODO:Reconsider this 
    // CREATE PROJECTS 
    if (fileAbsolutePath.indexOf("/src/project/") !== -1) {
      createPage({
        path: `/project/${node.slug}`,
        component: path.resolve(`./src/components/default-blog-layout.js`),
        context: { id: node.id },
      })
    }

  })
  // Create the Sitemap Page
  await createPage({
    path: `/sitemap/`,
    component: path.resolve(`./src/components/default-sitemap-layout.js`),
    context: { siteMapNodes:siteMapNodes },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
