import React from "react"
import { graphql } from "gatsby"
import DefaultLayout from "./default-layout"
import { Box } from "grommet"
import { AllBlogsIndexLayout } from "./atomic/layout/all-blogs-index-layout"
import useBlogTags from "../hooks/useBlogTags"
import TagsRenderer from "./TagsRenderer"

export const byline = (name, project) => {
  if (name && project) return `${name} - ${project}`
  if (name) return `${name}`
}

/**
 * BlogIndex lists all blog posts with tag filters.
 *
 * Renders normal and project tags using `TagsRenderer`,
 * and displays posts via `AllBlogsIndexLayout`.
 *
 * @param {Object} props
 * @param {Object} props.data - Blog data from GraphQL.
 * @param {Object} props.pageContext - Page context from Gatsby.
 *
 * @returns {JSX.Element}
 */

const BlogIndex = ({ data, pageContext }) => {
  const blogs = data.allMdx.nodes
  const cover_blog_index = data.cover_blog_index

  const { tagCounts, projectTagsCounts, sortedUniqueTags, sortedProjectTags } =
    useBlogTags()

  return (
    <DefaultLayout>
      <Box width="100%" pad="medium" direction="column">
        <Box pad="small">
          <Box>
            <TagsRenderer
              tagTypeHeading={"Tags:"}
              sortedUniqueTags={sortedUniqueTags}
              tagCounts={tagCounts}
              tagBaseURL={"/blog/tags/"}
            />
          </Box>
          <Box>
            <TagsRenderer
              tagTypeHeading={"Projects:"}
              sortedUniqueTags={sortedProjectTags}
              tagCounts={projectTagsCounts}
              tagBaseURL={"/blog/tags/project/"}
            />
          </Box>
        </Box>
        <AllBlogsIndexLayout blogs={blogs} />
      </Box>
    </DefaultLayout>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/.*/src/blog/" } } }
      sort: { frontmatter: { date: DESC } }
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
    cover_blog_index: file(relativePath: { eq: "cover-index-blog.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

export default BlogIndex
