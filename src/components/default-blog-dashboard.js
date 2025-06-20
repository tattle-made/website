import { graphql } from "gatsby"
import DefaultLayout from "./default-layout"  // Changed to DefaultLayout
import React from "react"
import Calendar from "./Calendar"


/**
 * BlogDashboard component renders the main blog dashboard layout.
 * It maps blog data (slug, name, date) into a heatmap-style calendar UI.
 *
 * @component
 * @param {Object} props - React props
 * @param {Object} props.data - GraphQL data containing all blog MDX nodes
 * @returns {JSX.Element} Blog dashboard with a calendar view inside a DefaultLayout
 */

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
