import React from "react"
import { graphql } from "gatsby"
import DefaultLayout from "./default-layout"
import { Box, Heading, Paragraph, Text, Image } from "grommet"
import { PlainSectionLink } from "./atomic/TattleLinks"
import MasonryLayoutResponsive from "./atomic/MasonryLayoutResponsive"

export const byline = (name, project) => {
  if (name && project) return `${name} - ${project}`
  if (name) return `${name}`
}

const BlogIndex = ({ data }) => {
  const blogs = data.allMdx.nodes
  const cover_blog_index = data.cover_blog_index
  return (
    <DefaultLayout>
      <Box width="100%" pad="medium">
        <MasonryLayoutResponsive>
          {blogs.map(blog => {
            return (
              <Box
                border={{ color: "visuals-3" }}
                round={"xsmall"}
                overflow={"hidden"}
                pad={"small"}
              >
                <PlainSectionLink to={`/blog/${blog.slug}`}>
                  <Box>
                    {blog.frontmatter.cover ? (
                      <Box width={"small"}>
                        <Image
                          fit={"cover"}
                          src={`/${blog.frontmatter.cover}`}
                        ></Image>
                      </Box>
                    ) : null}
                    <Text size={"xsmall"} weight={600}>
                      {`${new Date(blog.frontmatter.date).toDateString()}`}
                    </Text>
                    <Text size={"small"}>
                      {byline(blog.frontmatter.author)}
                    </Text>
                  </Box>
                  <Box>
                    <Box direction={"row"} align={"center"}>
                      <Heading
                        margin={{ top: "xsmall" }}
                        level={3}
                        weight={500}
                        color={"brand"}
                        fill
                      >
                        {blog.frontmatter.name}
                      </Heading>
                    </Box>

                    <Paragraph size={"large"} fill margin={"none"}>
                      {blog.frontmatter.excerpt}
                    </Paragraph>
                  </Box>
                </PlainSectionLink>
              </Box>
            )
          })}
        </MasonryLayoutResponsive>
      </Box>
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
          tags
          cover
        }
        fileAbsolutePath
      }
    }
    cover_blog_index: file(relativePath: { eq: "cover-index-blog.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default BlogIndex
