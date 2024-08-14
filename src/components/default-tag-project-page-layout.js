import { graphql } from "gatsby"
import React from "react"
import { projectSlugMaker } from "../lib/project-slug-maker"
import useBlogTags from "../hooks/useBlogTags"
import TagPage from "./TagPage"

export default function TagProjectPage({ data, pageContext }) {
  const { projectTagsCounts } = useBlogTags()
  const blogNodes = data.allMdx.nodes
  const project = pageContext.project
  const projectBlogs = blogNodes.filter(
    (blog) => projectSlugMaker(blog.frontmatter.project) === project
  )

  return (
    <TagPage
      blogs={projectBlogs}
      pageHeading={"Blogs with Project Tag:"}
      tag={project}
      tagCounts={projectTagsCounts}
    />
  )
}

export const query = graphql`
  query {
    allMdx(filter: { internal: { contentFilePath: { regex: "/src/blog/" } } }) {
      nodes {
        fields {
          slug
        }
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
