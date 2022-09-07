import React from "react"
import { graphql } from "gatsby"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import DefaultLayout from "./default-layout"
import { Box, Heading, Paragraph, Text } from "grommet"
import { PlainLink, PlainSectionLink } from "./atomic/TattleLinks"

const BlogIndex = ({ data }) => {
  const blogs = data.allMdx.nodes
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <h1>Blog</h1>
          <Box direction={"row-responsive"}>
            {blogs.map(blog => {
              return (
                <Box
                  width={"50%"}
                  direction={"column"}
                  onClick={() => {}}
                  hoverIndicator={true}
                  focusIndicator={false}
                >
                  <PlainSectionLink to={`/blog/${blog.slug}`}>
                    <Box direction={"row"} align={"center"}>
                      <Heading
                        level={3}
                        margin={"none"}
                        weight={500}
                        color={"brand"}
                      >
                        {blog.frontmatter.name}
                      </Heading>
                    </Box>
                    <Text
                      size={"small"}
                    >{`${blog.frontmatter.author} (${blog.frontmatter.project})`}</Text>
                    <Paragraph size={"small"}>
                      {blog.frontmatter.excerpt}
                    </Paragraph>
                  </PlainSectionLink>
                </Box>
              )
            })}
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
        }
        fileAbsolutePath
      }
    }
  }
`

export default BlogIndex
