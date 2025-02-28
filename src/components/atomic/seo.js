/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description = "", lang = `en`, meta = [], title, heading }) {
  const location = useLocation()
  const pathname = location.pathname
  // debugger
  let pageType = "OTHERS"
  if (pathname.indexOf("/blog/") !== -1) {
    pageType = "BLOG"
  }

  const { site, allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/social-card/" } }) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          base_url
        }
      }
    }
  `)

  title = title || site.metadata.title
  const metaDescription =
    meta.excerpt || description || site.siteMetadata.description
  const author = meta.author || site.siteMetadata.author
  const baseURL = site.siteMetadata.base_url

  let socialImageURLs = {}

  allFile.edges.forEach((edge) => {
    if (edge.node.name === "social-card-blog") {
      socialImageURLs["BLOG"] = edge.node.publicURL
    } else if (edge.node.name === "social-card") {
      socialImageURLs["OTHERS"] = edge.node.publicURL
    } else {
      socialImageURLs["OTHERS"] = edge.node.publicURL
    }
  })

  const socialImageURL = socialImageURLs[pageType]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
    >
      <meta property="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content={`${baseURL}${meta.cover ? `${meta.cover}` : socialImageURL}`}
      />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:site" content={"@tattlemade"} />
      <meta name="twitter:creator" content={"@tattlemade"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content={`${baseURL}${meta.cover ? `${meta.cover}` : socialImageURL}`}
      />
      {meta.tags && (
        <meta
          name="keywords"
          content={meta.tags
            .join(",")
            .concat(meta.project ? `,${meta.project}` : "")}
        />
      )}
      <script
        async
        defer
        data-domain="tattle.co.in"
        src="https://plausible.io/js/plausible.js"
      />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
