import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import DefaultLayout from "./default-layout"
import { Box, Heading, Paragraph, Text, Image, Button } from "grommet"
import { PlainSectionLink } from "./atomic/TattleLinks"
import MasonryLayoutResponsive from "./atomic/MasonryLayoutResponsive"
import TagBubbleBlog from "./atomic/TagBubbleBlog"
import { AllBlogsIndexLayout } from "./atomic/layout/all-blogs-index-layout"
import { projectSlugMaker } from "../lib/project-slug-maker"

export const byline = (name, project) => {
  if (name && project) return `${name} - ${project}`
  if (name) return `${name}`
}

const BlogIndex = ({ data, pageContext }) => {
  const blogs = data.allMdx.nodes
  const cover_blog_index = data.cover_blog_index
  const tagCounts = {}
  const uniqueTagsSet = new Set()

  const [showAllTags, setShowAllTags] = useState(false)
  const toggleTagsDisplay = () => {
    setShowAllTags(!showAllTags)
  }

  blogs.forEach(blog => {
    if (blog.frontmatter.tags) {
      const blogTags = blog.frontmatter.tags.split(",").map(tag => tag.trim())
      // tags.push(...blogTags);
      blogTags.forEach(tag => uniqueTagsSet.add(tag))
      blogTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
    //For Project Tags
    if (
      blog.frontmatter.project &&
      typeof blog.frontmatter.project === "string"
    ) {
      let project = projectSlugMaker(blog.frontmatter.project)
      tagCounts[project] = (tagCounts[project] || 0) + 1
    }
  })
  const uniqueTags = Array.from(uniqueTagsSet).concat(pageContext.projects)
  const sortedUniqueTags = uniqueTags.sort(
    (a, b) => tagCounts[b] - tagCounts[a]
  )

  return (
    <DefaultLayout>
      <Box width="100%" pad="medium" direction="column">
        <Box pad="small">
          <Box direction="row" gap="small" wrap={true}>
            {showAllTags
              ? sortedUniqueTags.map(tag => (
                  <Box key={tag} margin={{ bottom: "small" }}>
                    <Link
                      to={
                        pageContext.projects.includes(tag)
                          ? `/blog/tags/project/${tag}`
                          : `/blog/tags/${tag}`
                      }
                      style={{ textDecoration: "none" }}
                    >
                      <TagBubbleBlog
                        data={{ label: tag, count: tagCounts[tag] }}
                      />
                    </Link>
                  </Box>
                ))
              : sortedUniqueTags.slice(0, 10).map(tag => (
                  <Box key={tag} margin={{ bottom: "small" }}>
                    <Link
                      to={
                        pageContext.projects.includes(tag)
                          ? `/blog/tags/project/${tag}`
                          : `/blog/tags/${tag}`
                      }
                      style={{ textDecoration: "none" }}
                    >
                      <TagBubbleBlog
                        data={{ label: tag, count: tagCounts[tag] }}
                      />
                    </Link>
                  </Box>
                ))}
            <Button onClick={toggleTagsDisplay}>
              <Box
                pad="small"
                align="center"
                border={{ color: "#E76D67", size: "1px" }}
                round="small"
              >
                {showAllTags ? "Show Less Tags" : "Show All Tags"}
              </Box>
            </Button>
          </Box>
        </Box>
        <AllBlogsIndexLayout blogs={blogs} />
        {/* <MasonryLayoutResponsive flex={3}>
          {blogs.map(blog => {
            return (
              <Box
                border={{ color: "visuals-3" }}
                round={"xsmall"}
                overflow={"hidden"}
              >
                <PlainSectionLink to={`/blog/${blog.slug}`}>
                  <Box>
                    {blog.frontmatter.cover ? (
                      <Box
                        width={"small"}
                        style={{ minWidth: "100%" }}
                        height={"small"}
                      >
                        <Image
                          fit={"cover"}
                          src={`/${blog.frontmatter.cover}`}
                        ></Image>
                      </Box>
                    ) : null}
                    <Box pad="small">
                      <Text size={"xsmall"} weight={600}>
                        {`${new Date(blog.frontmatter.date).toDateString()}`}
                      </Text>
                      <Text size={"small"}>
                        {byline(blog.frontmatter.author)}
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    pad={{ left: "small", right: "small", bottom: "medium" }}
                  >
                    <Box direction={"row"} align={"center"}>
                      <Heading
                        margin={{ top: "none" }}
                        level={3}
                        weight={500}
                        color={"brand"}
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
        </MasonryLayoutResponsive> */}
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
