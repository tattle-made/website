import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { projectSlugMaker } from "../lib/project-slug-maker"
import { generateDisplayName } from "../lib/generate-display-name"
import { Box, Heading } from "grommet"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import { LatestEntries } from "./LatestEntries"

export function LatestProductBlogsUpdates({ projects }) {
    //projects is an array of string
  const data = useStaticQuery(
    graphql`{
  latestBlogs: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {internal: {contentFilePath: {regex: "/.*/src/blog/"}}}
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
        cover
      }
      internal {
        contentFilePath
      }
    }
  }
  latestUpdates: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {internal: {contentFilePath: {regex: "/updates/"}}}
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
}`
  )

  if (!projects) return null

  projects = projects.map(p=>projectSlugMaker(p));

  let latestProjectBlogs = data.latestBlogs.nodes.filter(
    node =>
      projects.includes(projectSlugMaker(node.frontmatter.project))
  )
  let latestProjectUpdates = data.latestUpdates.nodes.filter(
    node =>
        projects.includes(projectSlugMaker(node.frontmatter.project))
  )

  latestProjectBlogs = latestProjectBlogs.slice(0,10);
  latestProjectUpdates = latestProjectUpdates.slice(0,10);

  return (
    <>
      {latestProjectBlogs && latestProjectBlogs.length !== 0 && (
        <Box>
          <Box>
            <Heading level={3}>
              Latest Blogs
            </Heading>
          </Box>
          <LatestEntries entries={latestProjectBlogs} />
        </Box>
      )}

      {latestProjectUpdates && latestProjectUpdates.length !== 0 && (
        <Box>
          <Box>
            <Heading level={3}>
              Latest Updates
            </Heading>
          </Box>
          <LatestEntries entries={latestProjectUpdates} isUpdate={true} />
        </Box>
      )}
    </>
  )
}
