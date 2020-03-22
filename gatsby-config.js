module.exports = {
  siteMetadata: {
    title: `Tattle Website`,
    description: `Web Home of Tattle`,
    author: `@tattlemade`,
    base_url: 'https://tattle.co.in/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve(`./src/components/default-layout.js`)
        }
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'site.tattle.co.in'
      },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
