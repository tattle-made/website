import React from "react"
import { graphql } from "gatsby"
import { Box } from "grommet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
import BlogHeaderCard from "./atomic/BlogHeaderCard"
import { PlainLink } from "./atomic/TattleLinks"
import { Heading } from "grommet"
import TagBubble from "./atomic/TagBubble"

const shortcodes = { Link, BlogHeaderCard }

export default function PageTemplate({ data: { mdx } }) {
  const { name, author, project, date } = mdx.frontmatter
  const tags = mdx.frontmatter.tags ? mdx.frontmatter.tags.split(',').map(tag => tag.trim()) : [];
  return (
    <AppShell
      headerLabel={mdx.frontmatter.name}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
      isMDXPage={true}
    >
      <MDXProvider components={shortcodes}>
        <Box>
          <PlainLink to={"/blog"}>
            <Heading level={4}>back to all blogs</Heading>
          </PlainLink>
        </Box>
        <Box>
          <BlogHeaderCard
            name={name}
            author={author}
            project={project}
            date={date}
          />
          <Box direction={"row-responsive"} gap={"xsmall"}>
            {tags.map(tag => (
              <Link to={`/blog/tags/${tag}`} key={tag}>
                <TagBubble data={{ label: tag }} />
              </Link>
            ))}
          </Box>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </Box>
      </MDXProvider>
    </AppShell>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name  
        excerpt
        author
        project
        date
        tags
      }
    }
  }
`
