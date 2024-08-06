import { graphql } from "gatsby"
import React from "react"
import { projectSlugMaker } from "../lib/project-slug-maker"
import useUpdateTags from "../hooks/useUpdateTags"
import UpdatesTagPage from "./UpdatesTagPage"

export default function UpdatesTagProjectPage({ data,pageContext }) {
  const {projectTagsCounts} = useUpdateTags();
  const updateNodes = data.allMdx.nodes;
  const project = pageContext.project;
  const projectupdates =  updateNodes.filter(update=>projectSlugMaker(update.frontmatter.project)===project);

  return (
    <UpdatesTagPage updates={projectupdates} pageHeading={"Updates with Project Tag:"} tag={project} tagCounts={projectTagsCounts} />
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/src/updates/" }
      }
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
        slug
        fileAbsolutePath
      }
    }
  }
`
