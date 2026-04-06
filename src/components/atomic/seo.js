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

/**
 * Injects SEO-related metadata into the document head using React Helmet.
 * Uses Gatsby's useStaticQuery to pull site-wide metadata.
 *
 * @param {Object} props
 * @param {string} [props.description] - Page description for meta tag.
 * @param {string} [props.lang="en"] - HTML language attribute.
 * @param {Object[]} [props.meta=[]] - Additional meta tag definitions.
 * @param {string} props.title - Title of the page (required).
 * @param {string} [props.heading] - Optional heading (not used in meta but may be for accessibility or custom logic).
 * @returns {JSX.Element} Head metadata managed by React Helmet.
 */

function SEO({ description = "", lang = `en`, meta = [], title, heading }) {
  const location = useLocation()
  const pathname = location.pathname

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

  title = title || site.siteMetadata.title
  const metaDescription =
    meta.excerpt || description || site.siteMetadata.description
  const baseURL = site.siteMetadata.base_url
  const canonicalURL = `${baseURL}${pathname}`

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

  const socialImageURL = socialImageURLs[pageType] || socialImageURLs["OTHERS"]
  const ogImage = `${baseURL}${meta.cover ? meta.cover : socialImageURL}`

  // Blog posts have date; use this to distinguish post pages from list pages
  const isBlogPost = pageType === "BLOG" && meta.date

  const isSiteTitle = title === site.siteMetadata.title

  const jsonLd = isBlogPost
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: metaDescription,
        image: ogImage,
        datePublished: meta.date,
        url: canonicalURL,
        ...(meta.tags && { keywords: meta.tags.join(", ") }),
        ...(meta.project && {
          about: [{ "@type": "Thing", name: meta.project }],
        }),
        author: meta.author
          ? meta.author.split(", ").map((name) => ({
              "@type": "Person",
              name,
            }))
          : [{ "@type": "Organization", name: "Tattle" }],
        publisher: {
          "@type": "Organization",
          name: "Tattle",
          url: baseURL,
        },
      }
    : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={isSiteTitle ? `%s` : `%s | Tattle`}
    >
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalURL} />

      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
      <meta property="og:locale" content="en_IN" />

      {isBlogPost && meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
      {isBlogPost && meta.author && (
        <meta property="article:author" content={meta.author} />
      )}
      {isBlogPost &&
        meta.tags &&
        meta.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:site" content={"@tattlemade"} />
      <meta name="twitter:creator" content={"@tattlemade"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {meta.tags && (
        <meta
          name="keywords"
          content={meta.tags
            .join(",")
            .concat(meta.project ? `,${meta.project}` : "")}
        />
      )}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
