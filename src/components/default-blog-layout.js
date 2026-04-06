import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Box, Paragraph } from "grommet"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
import BlogHeaderCard from "./atomic/BlogHeaderCard"
import { PlainLink } from "./atomic/TattleLinks"
import { Heading } from "grommet"
import { useLocation } from "@reach/router"
import CustomCodeBlock from "./atomic/customCodeBlock"
import InlineCodeBlock from "./atomic/inlineCodeBlock"
import useBlogTags from "../hooks/useBlogTags"
import BlogSidebar from "./BlogSidebar"
import { projectSlugMaker } from "../lib/project-slug-maker"
import TagsRenderer from "./TagsRenderer"
import { getSrc, getImage, GatsbyImage } from "gatsby-plugin-image"
import BlogTable from "./atomic/BlogTable"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"

/**
 * Blog post layout component.
 * It renders the post content using MDXProvider and AppShell,
 * and displays post metadata, project tags, and a related posts section.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.data - GraphQL data passed by Gatsby.
 * @param {Object} props.data.mdx - MDX node containing post content and frontmatter metadata.
 * @param {Object} props.pageContext - Context from Gatsby's createPage API.
 * @param {Array<Object>} props.pageContext.blogNodes - List of all blog post nodes for related posts.
 * @param {React.ReactNode} props.children - Rendered MDX content of the blog post.
 * @returns {JSX.Element} Rendered blog post layout
 */

const shortcodes = {
  Link,
  BlogHeaderCard,
  code: (props) => <CustomCodeBlock {...props} />,
  inlineCode: (props) => <InlineCodeBlock {...props} />,
  table: (props) => <BlogTable {...props} />
}

export default function PageTemplate({
  data: { mdx },
  pageContext: { blogNodes = [] },
  children,
}) {
  const { tagCounts, projectTagsCounts } = useBlogTags()
  const { name, author, project, date, excerpt, cover } = mdx.frontmatter
  const tags = mdx.frontmatter.tags
    ? mdx.frontmatter.tags.split(",").map((tag) => tag.trim())
    : []

  const location = useLocation()
  const [label, setLabel] = useState("")

  useEffect(() => {
    setLabel(location.pathname.split("/")[1])
  }, [location])

  const findRelatedPosts = () => {
    // If no tags, return 5 most recent posts
    if (!blogNodes.length) {
      return []
    }
    if (!tags.length) {
      return blogNodes
        .filter((node) => node.id !== mdx.id)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
        .slice(0, 5)
        .map((post) => ({
          id: post.id,
          title: post.frontmatter.name,
          slug: post.fields.slug,
          coverImage: post.frontmatter.cover
            ? getImage(post.frontmatter.cover)
            : null,
          excerpt: post.frontmatter.excerpt,
          matchingTags: [],
          relevanceScore: 0,
        }))
    }

    const postsWithRelevance = blogNodes
      .filter((node) => node.id !== mdx.id)
      .map((post) => {
        const postTags = post.frontmatter.tags
          ? post.frontmatter.tags.split(",").map((tag) => tag.trim())
          : []

        const matchingTags = tags.filter((tag) => postTags.includes(tag))

        const coverImage = post.frontmatter.cover
          ? getImage(post.frontmatter.cover)
          : null

        return {
          id: post.id,
          title: post.frontmatter.name,
          slug: post.fields.slug,
          coverImage: coverImage,
          excerpt: post.frontmatter.excerpt,
          matchingTags: matchingTags,
          relevanceScore: matchingTags.length,
        }
      })
      .filter((post) => post.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)

    return postsWithRelevance.slice(0, 5)
  }
  const authorNames = author
    ?.map(a => a?.frontmatter?.name)
    .filter(Boolean)
    .join(", ")
  const relatedPosts = findRelatedPosts()

  return (
    <AppShell
      headerLabel={name}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
      isMDXPage={true}
      meta={{
        name: name,
        excerpt: excerpt,
        project: project?.frontmatter?.name,
        tags: tags,
        cover: cover ? getSrc(cover) : null,
        date: date,
        author: authorNames,
      }}
    >
      <MDXProvider components={shortcodes}>
        {/* <Box>
          <PlainLink to={"/blog"}>
            <Heading level={4}>back to all blogs</Heading>
          </PlainLink>
        </Box> */}

        {/* Hero: full-width image with metadata overlaid at bottom-left */}
        <Box style={{ position: "relative" }}>
          {cover ? (
            <>
              <GatsbyImage
                image={getImage(cover)}
                alt={name}
                objectFit="cover"
                className="h-[50vh] sm:h-[520px] w-full block"
              />
              <Box
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)",
                  padding: "2rem",
                }}
              >
                <BlogHeaderCard
                  name={name}
                  authors={author}
                  project={project?.frontmatter?.name}
                  date={date}
                  textColor="white"
                />
                <Box direction="column" flex="grow" pad={0}>
                  <Box>
                    <TagsRenderer
                      sortedUniqueTags={tags}
                      tagCounts={tagCounts}
                      tagTypeHeading={"Tags: "}
                      tagBaseURL={"/blog/tags/"}
                    />
                  </Box>
                  {project && (
                    <Box>
                      <TagsRenderer
                        sortedUniqueTags={[project?.fields?.slug]}
                        tagCounts={projectTagsCounts}
                        tagTypeHeading={"Project: "}
                        tagBaseURL={"/blog/tags/project/"}
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            </>
          ) : (
            <NarrowContentWrapper width="large">
              <BlogHeaderCard
                name={name}
                authors={author}
                project={project?.frontmatter?.name}
                date={date}
                
              />
              <Box direction="column" flex="grow" pad={0}>
                <Box>
                  <TagsRenderer
                    sortedUniqueTags={tags}
                    tagCounts={tagCounts}
                    tagTypeHeading={"Tags: "}
                    tagBaseURL={"/blog/tags/"}
                  />
                </Box>
                {project && (
                  <Box>
                    <TagsRenderer
                      sortedUniqueTags={[project?.fields?.slug]}
                      tagCounts={projectTagsCounts}
                      tagTypeHeading={"Project: "}
                      tagBaseURL={"/blog/tags/project/"}
                    />
                  </Box>
                )}
              </Box>
            </NarrowContentWrapper>
          )}
        </Box>

        <NarrowContentWrapper width="large" >
          <Box align="start" className="flex flex-col lg:flex-row gap-2">
            <Box className="fit blog-prose" margin={{top:"medium"}}>
              {children}
            </Box>
          </Box>
        </NarrowContentWrapper>
      </MDXProvider>
    </AppShell>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        name
        excerpt
        date
        tags

        # Author is now a linked list of Mdx nodes
        author {
          fields {
            slug
          }
          frontmatter {
            name
            role
            url
            img {
              childImageSharp {
                gatsbyImageData(
                  width: 40
                  height: 40
                  layout: FIXED
                  placeholder: BLURRED
                )
              }
            }
          }
        }

        # Project is now a linked Mdx node
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
    }
  }
`