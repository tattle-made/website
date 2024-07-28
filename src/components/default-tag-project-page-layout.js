import { graphql } from "gatsby"
import DefaultLayout from "./default-layout"
import { Box, Heading } from "grommet"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import { AllBlogsIndexLayout } from "./atomic/layout/all-blogs-index-layout"
import React from "react"
import TagBubbleBlog from "./atomic/TagBubbleBlog"
import { projectSlugMaker } from "../lib/project-slug-maker"

export default function TagProjectPage({ data,pageContext }) {
  const blogNodes = data.allMdx.nodes
  const projectBlogs =  blogNodes.filter(blog=>projectSlugMaker(blog.frontmatter.project)===pageContext.project)

  return (
    <DefaultLayout>
      <Box width="100%" pad="medium" direction="column">
        <NarrowContentWrapper>
          <NarrowSection>
            <Box direction="row-responsive" gap="small" align="center">
              <Heading level={3}>Blogs with Project Tag:</Heading>
              <TagBubbleBlog
                data={{ label: pageContext.project }}
              />
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>

        <AllBlogsIndexLayout blogs={projectBlogs} />
      </Box>
    </DefaultLayout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/src/blog/" }
      }
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
      }
    }
  }
`
