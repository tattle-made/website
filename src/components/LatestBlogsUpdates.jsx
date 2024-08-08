import { graphql, useStaticQuery } from "gatsby"
import React, { useContext} from "react"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import { Anchor, Box, Heading, ResponsiveContext, Text } from "grommet"
import {
  ExternalLink,
  PlainExternalLink,
  PlainLink,
} from "./atomic/TattleLinks"

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
          <LatestBlogs blogs={latestBlogs} />

          {/* <Box margin={{ horizontal: "auto",vertical:"1em" }}>
            <Anchor href={"/blog"}>
              <Text size={"small"} weight={400}>View All Blogs</Text>
            </Anchor>
          </Box> */}
        </NarrowContentWrapper>
      </Box>
      <Box>
        <NarrowContentWrapper width={"full"}>
          <Box>
            <Heading level={3}>Latest Updates</Heading>
          </Box>
          <LatestUpdates updates={latestUpdates} />

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

function LatestBlogs({ blogs }) {
  const size = useContext(ResponsiveContext)

  return blogs.map(blog => {
    return (
      <Box
        width={"full"}
        flex
        direction="row-responsive"
        justify="between"
        pad={"3px"}
        margin={{ bottom: "1em" }}
      >
        <Box width={"15%"}>
          <Text size={size === "small" ? "xsmall" : "small"}>
            {formatDateLatestEntries(blog.frontmatter.date)}
          </Text>
        </Box>
        <Box
          flex={"grow"}
          margin={{ horizontal: size !== "small" ? "5em" : 0 }}
        >
          <PlainLink to={`/blog/${blog.slug}`}>
            <Text size="small" weight={600}>
              {blog.frontmatter.name}
            </Text>
          </PlainLink>
        </Box>

        <Box>
          <Text size="small">{blog.frontmatter.author}</Text>
        </Box>
      </Box>
    )
  })
}
function LatestUpdates({ updates }) {
  const size = useContext(ResponsiveContext)

  return updates.map(update => {
    return (
      <Box
        width={"full"}
        flex
        direction="row-responsive"
        justify="between"
        pad={"3px"}
        margin={{ bottom: "1em" }}
      >
        <Box width={"15%"}>
          <Text size={size === "small" ? "xsmall" : "small"}>
            {formatDateLatestEntries(update.frontmatter.date)}
          </Text>
        </Box>
        <Box
          flex={"grow"}
          margin={{ horizontal: size !== "small" ? "5em" : 0 }}
        >
          {update.frontmatter.url && update.frontmatter.url.length !== 0 ? (
            <PlainLink to={update.frontmatter.url}>
              <Text size="small" weight={600}>
                {update.frontmatter.title}
              </Text>
            </PlainLink>
          ) : (
            <Text size="small" weight={600}>
              {update.frontmatter.title}
            </Text>
          )}
        </Box>

        <Box>
          {update.frontmatter.url && update.frontmatter.url.length !== 0 ? (
            <PlainExternalLink href={update.frontmatter.url} target={"_blank"}>
              <Box
                gap={"small"}
                direction={"row"}
                align={"center"}
                margin={{ top: "xsmall" }}
              >
                <Text size={"small"}> Read More</Text>
                <ExternalLink size={16} />
              </Box>
            </PlainExternalLink>
          ) : null}
        </Box>
      </Box>
    )
  })
}
