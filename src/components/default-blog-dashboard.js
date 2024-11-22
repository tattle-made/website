import { graphql } from "gatsby"
import DefaultLayoutNarrow from "./default-layout-narrow"
import React from "react"
import Calendar from "./Calendar"
export default function BlogDashboard({ data }) {
  let blogCellsData = data.allMdx.nodes.map(blog=>{
    return (
      {
        slug:blog.fields.slug,
        name:blog.frontmatter.name,
        date: blog.frontmatter.date
      }
    )
  })

  console.log(blogCellsData)

  return (
    <DefaultLayoutNarrow>
      <div>Blogs Calendar View</div>
      <Calendar data={blogCellsData}/>
    </DefaultLayoutNarrow>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/.*/src/blog/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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
        }
      }
    }
  }
`
