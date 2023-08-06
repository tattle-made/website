import React, { useContext } from "react"
import { ResponsiveContext, Box, Heading, Text } from "grommet"
import { PlainSectionLink } from "./atomic/TattleLinks"
import DefaultLayout from "./default-layout"
import { graphql, Link } from "gatsby"

const byline = (author, project) => {
	if (author && project) return `${author} - ${project}`
	if (author) return `${author}`
}

export default function TagTemplate({ data, pageContext }) {
	const { allMdx } = data
	const tag = pageContext.tag
	console.log(tag)
	// const tagsArray = allMdx.nodes.flatMap(node => node.frontmatter.tags ? node.frontmatter.tags.split(',').map(tag => tag.trim()) : [])
	// console.log(tagsArray)
	const filteredNodes = allMdx.nodes.filter(node => {
		const tagsArray = node.frontmatter.tags?.split(',').map(tag => tag.trim());
		return tagsArray?.includes(tag);
	})
	console.log(filteredNodes)

	return (
		<div> <h2>Start editing to see some magic happen!</h2> </div>
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
        }
      }
    }
  }
`