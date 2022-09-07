import React from "react"
import { graphql } from "gatsby"
import { Box } from "grommet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
import BlogHeaderCard from "./atomic/BlogHeaderCard"

const shortcodes = { Link, BlogHeaderCard }

export default function PageTemplate({ data: { mdx } }) {
  const { name, author, project } = mdx.frontmatter
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
          <BlogHeaderCard name={name} author={author} project={project} />
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
      }
    }
  }
`
