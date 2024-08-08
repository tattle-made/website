import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import { Anchor, Box, Heading, ResponsiveContext, Text } from "grommet"
import { PlainLink } from "./atomic/TattleLinks"
import { ExternalLink } from "react-feather"

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

function formatDateLatestEntries(date) {
  let dateString = new Date(date).toDateString("ind")
  return dateString
    .split(" ")
    .slice(1)
    .join(" ")
}

function LatestEntries({ entries, isUpdate }) {
  const size = useContext(ResponsiveContext)

  return entries.map(entry => {
    return (
      <Box
        width={"full"}
        flex
        direction="row-responsive"
        justify="between"
        margin={{ bottom: "1em" }}
      >
        <Box width={size === "small" ? "" : size === "medium" ? "30%" : "15%"}>
          <Text size={size === "small" ? "xsmall" : "small"}>
            {formatDateLatestEntries(entry.frontmatter.date)}
          </Text>
        </Box>

        <Box
          width={"full"}
          alignContent="start"
          justify="start"
          pad={{ horizontal: size !== "small" ? "1em" : 0 }}
        >
          {isUpdate ? (
            <Text size="small" weight={600} truncate>
              {entry.frontmatter.title}
            </Text>
          ) : (
            <Text size="small" weight={600} truncate>
              <PlainLink to={`/blog/${entry.slug}`}>
                {entry.frontmatter.name}
              </PlainLink>
            </Text>
          )}
        </Box>

        {isUpdate ? (
          <Box
            width={size === "small" ? "" : size === "medium" ? "25%" : "15%"}
            align={size === "small" ? "start" : "end"}
          >
            {entry.frontmatter.url && entry.frontmatter.url.length !== 0 ? (
              <PlainLink href={entry.frontmatter.url} target={"_blank"}>
                <Box
                  style={{ position: "relative" }}
                  gap={"xsmall"}
                  direction={"row"}
                  align={"center"}
                  flex
                >
                  <Text size={"small"}> Read More</Text>
                  <ExternalLink
                    size={10}
                    style={{ position: "absolute", top: 0, right: -5 }}
                  />
                </Box>
              </PlainLink>
            ) : null}
          </Box>
        ) : (
          <Box
            style={{
              minWidth:
                size === "small" ? "" : size === "medium" ? "20%" : "15%",
            }}
            align={size === "small" ? "start" : "end"}
          >
            <Text size="small">{entry.frontmatter?.author}</Text>
          </Box>
        )}
      </Box>
    )
  })
}
