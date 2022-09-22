const path = require("path")
const QRCode = require("qrcode")
const fs = require("fs/promises")

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
