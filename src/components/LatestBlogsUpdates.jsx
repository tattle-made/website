import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import {Box, Heading} from "grommet"
import { LatestEntries } from "./LatestEntries"

export default function LatestBlogsUpdates() {
  const data = useStaticQuery(
    graphql`
      query {
        latestBlogs: allMdx(
          limit: 5
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "/.*/src/blog/" } }
        ) {
          nodes {
            slug
            frontmatter {
              name
              excerpt
              author
              project
              date
              tags
              cover
            }
            fileAbsolutePath
          }
        }

        latestUpdates: allMdx(
          limit: 5
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "/updates/" } }
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
  )

  const latestBlogs = data.latestBlogs.nodes
  const latestUpdates = data.latestUpdates.nodes

  return (
    <>
      <Box margin={{ top: "1em" }}>
        <NarrowContentWrapper width={"full"}>
          <Box>
            <Heading level={3}>Latest Blogs</Heading>
          </Box>
          <LatestEntries entries={latestBlogs} />

          {/* <Box margin={{ horizontal: "auto",vertical:"1em" }}>
            <Anchor href={"/updates"}>
              <Text size={"small"} weight={400}>View All Updates</Text>
            </Anchor>
          </Box> */}
        </NarrowContentWrapper>
      </Box>
      <Box>
        <NarrowContentWrapper width={"full"}>
          <Box>
            <Heading level={3}>Latest Updates</Heading>
          </Box>
          <LatestEntries entries={latestUpdates} isUpdate={true} />

          {/* <Box margin={{ horizontal: "auto",vertical:"1em" }}>
            <Anchor href={"/updates"}>
              <Text size={"small"} weight={400}>View All Updates</Text>
            </Anchor>
          </Box> */}
        </NarrowContentWrapper>
      </Box>
    </>
  )
}
