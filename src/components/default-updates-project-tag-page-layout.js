import { graphql } from "gatsby"
import React from "react"
import { projectSlugMaker } from "../lib/project-slug-maker"
import useUpdateTags from "../hooks/useUpdateTags"
import UpdatesTagPage from "./UpdatesTagPage"

/**
 * UpdatesTagProjectPage component renders a list of updates filtered by a specific project tag.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.data - GraphQL data (unused).
 * @param {Object} props.pageContext - Gatsby page context containing the project slug.
 * @returns {JSX.Element} Filtered UpdatesTagPage by project tag.
 */

export default function UpdatesTagProjectPage({ data, pageContext }) {
  const { projectTagsCounts } = useUpdateTags()
  const updateNodes = data.allMdx.nodes
  const project = pageContext.project
  const projectupdates = updateNodes.filter(
    (update) => projectSlugMaker(update.frontmatter.project) === project
  )

  return (
    <UpdatesTagPage
      updates={projectupdates}
      pageHeading={"Updates with Project Tag:"}
      tag={project}
      tagCounts={projectTagsCounts}
    />
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/src/updates/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          url
          excerpt
          date
          tags
          title
          project
        }
        id
        fields {
          slug
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`
