import React from "react"
import { graphql, Link } from "gatsby"
import useBlogTags from "../hooks/useBlogTags"
import TagPage from "./TagPage"

const byline = (author, project) => {
  if (author && project) return `${author} - ${project}`
  if (author) return `${author}`
}

export default function TagTemplate({ data, pageContext }) {
  const { tagCounts } = useBlogTags()
  const { allMdx } = data
  const tag = pageContext.tag

  const filteredNodes = allMdx.nodes.filter(node => {
    const tagsArray = node.frontmatter.tags?.split(",").map(tag => tag.trim())
    return tagsArray?.includes(tag)
  })

  return (
	<TagPage blogs={filteredNodes} pageHeading={"Blogs with Tag:"} tag={tag} tagCounts={tagCounts} />
  )
}

export const pageQuery = graphql`
  query BlogPostsByTag {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
        fileAbsolutePath
        frontmatter {
          name
          excerpt
          author
          project
          date
          tags
		      cover
        }
      }
    }
  }
`
