import React from "react"
import { graphql, Link } from "gatsby"
import useBlogTags from "../hooks/useBlogTags"
import TagPage from "./TagPage"

/**
 * Returns a formatted byline string based on the presence of author and project.
 *
 * @param {string} author - The name of the author.
 * @param {string} project - The associated project name.
 * @returns {string | undefined} A formatted byline (e.g., "Author - Project"), or just "Author" if project is not provided.
 */

const byline = (author, project) => {
  if (author && project) return `${author} - ${project}`
  if (author) return `${author}`
}

/**
 * TagTemplate component renders a tag-specific page that lists all blog posts
 * associated with a particular tag.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.data - GraphQL data object, expected to contain allMdx nodes.
 * @param {Object} props.pageContext - Context passed by Gatsby, including the tag name.
 * @returns {JSX.Element} A TagPage component displaying filtered posts.
 */

export default function TagTemplate({ data, pageContext }) {
  const { tagCounts } = useBlogTags()
  const { allMdx } = data
  const tag = pageContext.tag

  const filteredNodes = allMdx.nodes.filter((node) => {
    const tagsArray = node.frontmatter.tags?.split(",").map((tag) => tag.trim())
    return tagsArray?.includes(tag)
  })

  return (
    <TagPage
      blogs={filteredNodes}
      pageHeading={"Blogs with Tag:"}
      tag={tag}
      tagCounts={tagCounts}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostsByTag {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/.*/src/blog/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        internal {
          contentFilePath
        }
        frontmatter {
          name
          excerpt
          author
          project
          date
          tags
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
