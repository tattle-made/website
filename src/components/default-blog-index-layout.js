import React from "react"
import { graphql, Link } from "gatsby"
import DefaultLayout from "./default-layout"
import { Box, Heading, Paragraph, Text, Image } from "grommet"
import { PlainSectionLink } from "./atomic/TattleLinks"
import MasonryLayoutResponsive from "./atomic/MasonryLayoutResponsive"
import TagBubbleBlog from "./atomic/TagBubbleBlog"

export const byline = (name, project) => {
  if (name && project) return `${name} - ${project}`
  if (name) return `${name}`
}

const BlogIndex = ({ data }) => {
  const blogs = data.allMdx.nodes
  const cover_blog_index = data.cover_blog_index
  const tags = []
  const uniqueTagsSet = new Set();

  blogs.forEach(blog => {
    if (blog.frontmatter.tags) {
      const blogTags = blog.frontmatter.tags.split(',').map(tag => tag.trim());
      tags.push(...blogTags);
    }
  })
  console.log(tags)

  blogs.forEach(blog => {
    if (blog.frontmatter.tags) {
      const blogTags = blog.frontmatter.tags.split(',').map(tag => tag.trim());
      blogTags.forEach(tag => uniqueTagsSet.add(tag)); // Add tags to the Set
    }
  });
  const uniqueTags = Array.from(uniqueTagsSet);

  const tagCounts = {};
  blogs.forEach(post => {
    if (post.frontmatter.tags) {
      const postTags = post.frontmatter.tags.split(',').map(tag => tag.trim());
      postTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  return (
    <DefaultLayout>
      <Box width="100%" pad="medium">
        <Box width="20%" pad="small" border={{ color: "visuals-3" }}>
          <Heading level={3}>Tags</Heading>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {uniqueTags.map(tag => (
              <li key={tag}>
                <Link to={`/blog/tags/${tag}`} key={tag} style={{ textDecoration: 'none' }}>
                  <TagBubbleBlog data={{ label: tag, count: tagCounts[tag] }} />
                </Link>
              </li>
            ))}
          </ul>
        </Box>
        <MasonryLayoutResponsive>
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
                      <Box width={"small"} style={{ minWidth: "100%" }}>
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
