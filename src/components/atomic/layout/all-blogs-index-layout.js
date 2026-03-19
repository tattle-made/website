import React from "react"
import { Box, Heading, Paragraph, Text } from "grommet"

import MasonryLayoutResponsive from "../MasonryLayoutResponsive"
import { PlainSectionLink } from "../TattleLinks"
import { byline } from "../../default-blog-index-layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/**
 * Renders a masonry layout of all blog entries.
 *
 * @param {Object} props
 * @param {Object[]} props.blogs - Array of blog objects to display.
 * @returns {JSX.Element} Blog index layout component.
 */

export function AllBlogsIndexLayout({ blogs }) {
  return (
    <MasonryLayoutResponsive>
      {blogs.map((blog, key) => {
        // ✅ FIX: extract author names from array
        const authorNames = blog?.frontmatter?.author
          ?.filter(a => a?.frontmatter?.name)
          ?.map(a => a.frontmatter.name)
          ?.join(", ") || ""

        // ✅ FIX: extract project name from object
        const projectName = blog.frontmatter.project?.frontmatter?.name

        return (
          <Box
            key={key}
            border={{ color: "visuals-3" }}
            round="xsmall"
            overflow="hidden"
          >
            <PlainSectionLink to={`/blog/${blog.fields.slug}`}>
              <Box>
                {blog.frontmatter.cover && (
                  <Box width="full" height="small">
                    <GatsbyImage
                      alt="blog cover"
                      objectFit="cover"
                      image={getImage(blog.frontmatter.cover)}
                    />
                  </Box>
                )}

                <Box pad="small">
                  <Text size="xsmall" weight={600}>
                    {new Date(blog.frontmatter.date).toDateString()}
                  </Text>

                  {/* ✅ FIXED byline */}
                  <Text size="small">
                    {byline(authorNames, projectName)}
                  </Text>
                </Box>
              </Box>

              <Box pad={{ left: "small", right: "small", bottom: "medium" }}>
                <Box direction="row" align="center">
                  <Heading
                    margin={{ top: "none" }}
                    level={3}
                    weight={500}
                    color="brand"
                  >
                    {blog.frontmatter.name}
                  </Heading>
                </Box>

                <Paragraph size="large" fill margin="none">
                  {blog.frontmatter.excerpt}
                </Paragraph>
              </Box>
            </PlainSectionLink>
          </Box>
        )
      })}
    </MasonryLayoutResponsive>
  )
}