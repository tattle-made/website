const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

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

  // create folder for user avatar
  // try {
  //   await fs.access("./src/people/avatar")
  // } catch {
  //   await fs.mkdir("./src/people/avatar")
  // }

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

    createPage({
      path: `/blog/`,
      component: path.resolve(`./src/components/default-blog-index-layout.js`),
    })

    // CREATE TAGS PAGE
    const tags_set = new Set()
    const tags_arr = node.frontmatter.tags
      ? node.frontmatter.tags.split(",").map(tag => tag.trim())
      : []
    result.data.allMdx.nodes.forEach(node => {
      if (tags_arr) {
        tags_arr.forEach(tag => tags_set.add(tag))
      }
    })

    tags_set.forEach(tag => {
      createPage({
        path: `/blog/tags/${tag}`,
        component: path.resolve("./src/components/default-tag-page-layout.js"),
        context: { tag },
      })
    })

    // CREATE PROJECTS
    if (fileAbsolutePath.indexOf("/src/project/") !== -1) {
      createPage({
        path: `/project/${node.slug}`,
        component: path.resolve(`./src/components/default-blog-layout.js`),
        context: { id: node.id },
      })
    }
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
