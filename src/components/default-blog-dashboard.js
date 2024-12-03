import { graphql } from "gatsby"
import DefaultLayout from "./default-layout"  // Changed to DefaultLayout
import React from "react"
import Calendar from "./Calendar"

export default function BlogDashboard({ data }) {
  let blogCellsData = data.allMdx.nodes.map(blog => {
    return {
      slug: blog.fields.slug,
      name: blog.frontmatter.name,
      date: blog.frontmatter.date
    }
  })

  console.log(blogCellsData)

  return (
    <DefaultLayout>  {/* Replaced DefaultLayoutNarrow with DefaultLayout */}
      <Calendar data={blogCellsData} />
    </DefaultLayout>
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
