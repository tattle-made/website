import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import DefaultLayout from "./default-layout"
import {
  ResponsiveContext,
  Anchor,
  Box,
  Heading,
  Paragraph,
  Text,
  Image,
} from "grommet"
import { PlainLink, PlainSectionLink } from "./atomic/TattleLinks"

export const byline = (name, project) => {
  if (name && project) return `${name} - ${project}`
  if (name) return `${name}`
}

const ResponsiveBlogContainer = ({ children }) => {
  const size = useContext(ResponsiveContext)
  const width = {
    small: "100%",
    medium: "33%",
    large: "25%",
  }
  return (
    <Box
      direction={"column"}
      onClick={() => {}}
      hoverIndicator={true}
      focusIndicator={false}
      pad={"medium"}
      width={width[size] ? width[size] : "medium"}
      height="fit-content"
      round
      border={{ color: "visuals-3" }}
      margin={{ bottom: "medium", left: "small" }}
    >
      {children}
    </Box>
  )
}

const BlogIndex = ({ data }) => {
  const blogs = data.allMdx.nodes
  const cover_blog_index = data.cover_blog_index

  return (
    <DefaultLayout>
      <Box width="100%" alignSelf="center" justify={"between"} pad="medium">
        <Box direction={"row-responsive"} wrap={true}>
          <Box
            width={"medium"}
            height="medium"
            margin={{ bottom: "medium" }}
            alignSelf={"center"}
          >
            <Image
              src={cover_blog_index.childImageSharp.fluid.src}
              fit="contain"
              fill={true}
            />
          </Box>
          {blogs.map(blog => {
            return (
              <ResponsiveBlogContainer>
                <PlainSectionLink to={`/blog/${blog.slug}`}>
                  {blog.frontmatter.cover ? (
                    <Box>
                      <Image
                        fit={"cover"}
                        src={`/${blog.frontmatter.cover}`}
                      ></Image>
                    </Box>
                  ) : null}
                  <Box>
                    <Box direction={"row"} align={"center"}>
                      <Heading level={3} weight={500} color={"brand"} fill>
                        {blog.frontmatter.name}
                      </Heading>
                    </Box>
                    <Text size={"small"}>
                      {`Published on ${new Date(
                        blog.frontmatter.date
                      ).toDateString()}`}
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
              </ResponsiveBlogContainer>
            )
          })}
        </Box>
      </Box>
      <NarrowContentWrapper>
        <NarrowSection>
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
