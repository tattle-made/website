import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import DefaultLayout from "./default-layout"
import { Box, Text, ResponsiveContext } from "grommet"
import { FeaturedSection, BlogGrid } from "./atomic/layout/all-blogs-index-layout"
import useBlogTags from "../hooks/useBlogTags"
import TagsRenderer from "./TagsRenderer"

export const byline = (name, project) => {
  const projectName = project?.frontmatter?.name

  if (name && projectName) return `${name} - ${projectName}`
  if (name) return `${name}`
}

function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPath = currentPage === 2 ? `/blog/` : `/blog/${currentPage - 1}/`
  const nextPath = `/blog/${currentPage + 1}/`

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      pad={{ vertical: "large" }}
      // border={{ side: "top", color: "visuals-3" }}
      margin={{ top: "large" }}
    >
      <Box>
        {!isFirst && (
          <Link to={prevPath} style={{ textDecoration: "none" }}>
            <Text weight={600}>← Previous</Text>
          </Link>
        )}
      </Box>

      <Text size="small">
        Page {currentPage} of {numPages}
      </Text>

      <Box>
        {!isLast && (
          <Link to={nextPath} style={{ textDecoration: "none" }}>
            <Text weight={600}>Next →</Text>
          </Link>
        )}
      </Box>
    </Box>
  )
}

/**
 * BlogIndex lists all blog posts with tag filters and pagination.
 *
 * @param {Object} props
 * @param {Object} props.data - Blog data from GraphQL.
 * @param {Object} props.pageContext - Page context from Gatsby.
 * @returns {JSX.Element}
 */

const BlogIndex = ({ data, pageContext }) => {
  const blogs = data.allMdx.nodes
  const { currentPage = 1, numPages = 1 } = pageContext
  const size = useContext(ResponsiveContext)

  const { tagCounts, projectTagsCounts, sortedUniqueTags, sortedProjectTags } =
    useBlogTags()

  const featuredBlogs = blogs.filter(b => b.frontmatter.featured).slice(0, 3)
  const restBlogs = blogs.filter(b => !featuredBlogs.includes(b))

  return (
    <DefaultLayout>
      <Box width="100%" pad="medium" direction="column">

        {/* Hero row: featured (3/4) + tags sidebar (1/4) */}
        <Box
          direction={size === "small" ? "column" : "row"}
          gap="xlarge"
          margin={{ bottom: "xlarge" }}
        >
          <Box style={size !== "small" ? { flex: "3 1 0", minWidth: 0 } : undefined}>
            {featuredBlogs.length > 0 && (
              <FeaturedSection featuredBlogs={featuredBlogs} />
            )}
          </Box>

          <Box
            style={size !== "small" ? { flex: "1 1 200px" } : undefined}
            pad={size !== "small" ? { left: "large" } : undefined}
          >
            <TagsRenderer
              tagTypeHeading={"Tags:"}
              sortedUniqueTags={sortedUniqueTags}
              tagCounts={tagCounts}
              tagBaseURL={"/blog/tags/"}
            />
            <Box margin={{ top: "medium" }}>
              <TagsRenderer
                tagTypeHeading={"Projects:"}
                sortedUniqueTags={sortedProjectTags}
                tagCounts={projectTagsCounts}
                tagBaseURL={"/blog/tags/project/"}
              />
            </Box>
          </Box>
        </Box>

        {/* Remaining posts masonry grid */}
        <BlogGrid blogs={restBlogs} />

        {numPages > 1 && (
          <Pagination currentPage={currentPage} numPages={numPages} />
        )}
      </Box>
    </DefaultLayout>
  )
}

export const query = graphql`
  query BlogIndexQuery($skip: Int = 0, $limit: Int = 12) {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/.*/src/blog/" } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          name
          excerpt
          date
          tags
          featured

          author {
            fields {
              slug
            }
            frontmatter {
              name
              role
            }
          }

          project {
            fields {
              slug
            }
            frontmatter {
              name
            }
          }

          cover {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`

export default BlogIndex
