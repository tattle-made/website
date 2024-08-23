import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Box } from "grommet"
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

import { projectSlugMaker } from "../lib/project-slug-maker"
import TagsRenderer from "./TagsRenderer"
import { getSrc } from "gatsby-plugin-image"

const shortcodes = {
  Link,
  BlogHeaderCard,
  code: (props) => <CustomCodeBlock {...props} />,
  inlineCode: (props) => <InlineCodeBlock {...props} />,
}

export default function PageTemplate({ data: { mdx, allMdx }, children }) {
  const { tagCounts, projectTagsCounts } = useBlogTags()
  const { name, author, project, date, excerpt, cover } = mdx.frontmatter
  const tags = mdx.frontmatter.tags
    ? mdx.frontmatter.tags.split(",").map((tag) => tag.trim())
    : []

  const location = useLocation()
  const [label, setLabel] = useState("")

  useEffect(() => {
    setLabel(location.pathname.split("/")[1])
    console.log({ l2: location.pathname })
  }, [location])

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
        project: project,
        tags: tags,
        cover: getSrc(cover),
      }}
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
          <Box direction="column" flex pad={0} basis="xsmall">
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
                  sortedUniqueTags={[projectSlugMaker(project)]}
                  tagCounts={projectTagsCounts}
                  tagTypeHeading={"Project: "}
                  tagBaseURL={"/blog/tags/project/"}
                />
              </Box>
            )}
          </Box>

          {children}
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
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
    allMdx {
      nodes {
        frontmatter {
          name
          author
          date
          tags
        }
      }
    }
  }
`
