import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import { Box, Heading } from "grommet"
import { LatestEntries } from "./LatestEntries"

/**
 * LatestBlogsUpdates component fetches and displays the latest blog posts and updates.
 *
 * - Uses Gatsby's useStaticQuery to retrieve blog and update data.
 * - Renders two sections: Latest Blogs and Latest Updates (if included later).
 *
 * @returns {JSX.Element} The rendered component showing the latest content.
 */


export default function LatestBlogsUpdates() {
  const data = useStaticQuery(graphql`
    {
      latestBlogs: allMdx(
        limit: 5
        sort: { frontmatter: { date: DESC } }
        filter: { internal: { contentFilePath: { regex: "/.*/src/blog/" } } }
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
            cover {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          internal {
            contentFilePath
          }
        }
      }
      latestUpdates: allMdx(
        limit: 5
        sort: { frontmatter: { date: DESC } }
        filter: { internal: { contentFilePath: { regex: "/updates/" } } }
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
  `)

  const latestBlogs = data.latestBlogs.nodes
  const latestUpdates = data.latestUpdates.nodes

  return (
    <>
      <Box margin={{ vertical: "1em" }}>
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
