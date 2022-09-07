import React from "react"
import { graphql } from "gatsby"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import DefaultLayout from "./default-layout"
import { Anchor, Box, Heading, Paragraph, Text } from "grommet"
import { PlainLink, PlainSectionLink } from "./atomic/TattleLinks"

export const byline = (name, project) => {
  if (name && project) return `${name} - ${project}`
  if (name) return `${name}`
}

const BlogIndex = ({ data }) => {
  const blogs = data.allMdx.nodes
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Box>
            <PlainLink to={"/blog"}>
              <Heading level={2}>Blog</Heading>
            </PlainLink>
          </Box>
          <Box direction={"column"} gap={"small"}>
            {blogs.map(blog => {
              return (
                <Box
                  direction={"column"}
                  onClick={() => {}}
                  hoverIndicator={true}
                  focusIndicator={false}
                  pad={"small"}
                >
                  <PlainSectionLink to={`/blog/${blog.slug}`}>
                    <Box>
                      <Box direction={"row"} align={"center"}>
                        <Heading
                          level={3}
                          margin={"none"}
                          weight={500}
                          color={"brand"}
                          fill
                        >
                          {blog.frontmatter.name}
                        </Heading>
                      </Box>
                      <Text size={"small"}>
                        {`Published on ${blog.frontmatter.date}`}
                      </Text>
                      <Text size={"small"}>
                        {byline(
                          blog.frontmatter.author,
                          blog.frontmatter.project
                        )}
                      </Text>

                      <Paragraph size={"large"} fill>
                        {blog.frontmatter.excerpt}
                      </Paragraph>
                    </Box>
                  </PlainSectionLink>
                </Box>
              )
            })}
          </Box>
          <Box margin={{ top: "medium" }}>
            <Text>
              {" "}
              Our older blog can be found{" "}
              <Anchor href={"https://blog.tattle.co.in/"} target={"_blank"}>
                here
              </Anchor>
            </Text>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          name
          excerpt
          author
          project
          date
        }
        fileAbsolutePath
      }
    }
  }
`

export default BlogIndex
