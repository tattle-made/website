module.exports = {
  siteMetadata: {
    title: `Tattle`,
    siteUrl: "https://tattle.co.in/", // looks like gatsby-plugin-feed requires this to be the field name
    description: `We build tools and datasets to understand and respond to misinformation in India.`,
    author: `@tattlemade`,
    base_url: "https://tattle.co.in",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `people`,
        path: `${__dirname}/src/people`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `update`,
        path: `${__dirname}/src/updates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `community`,
        path: `${__dirname}/src/community`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E56D67`,
        theme_color: `#E56D67`,
        display: `minimal-ui`,
        icon: `src/images/tattle_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve(`./src/components/default-layout-narrow.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "tattle.co.in",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.name,
                  description: node.frontmatter.excerpt,
                  url: site.siteMetadata.siteUrl + "/blog/" + node.slug,
                  guid: site.siteMetadata.siteUrl + "/blog/" + node.slug,
                  date: node.frontmatter.date,
                  author: node.frontmatter.author,
                })
              })
            },
            query: `
            {
              allMdx(
                filter: {fileAbsolutePath: {regex: "/.*/src/blog/"}}
                sort: {fields: frontmatter___date, order: DESC}
              ) {
                nodes {
                  slug
                  frontmatter {
                    name
                    excerpt
                    author
                    project
                    date
                    tags
                    cover
                  }
                  fileAbsolutePath
                }
              }
            }
            
            `,
            output: "/rss.xml",
            title:
              "Tattle - Civic Tech intervention for Misinformation, Content Moderation and Media Literacy",
          },
        ],
      },
    },
  ],
}
