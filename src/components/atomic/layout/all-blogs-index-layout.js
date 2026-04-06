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

function BlogMeta({ blog }) {
  const authorNames = blog?.frontmatter?.author
    ?.filter(a => a?.frontmatter?.name)
    ?.map(a => a.frontmatter.name)
    ?.join(", ") || ""
  const projectName = blog.frontmatter.project?.frontmatter?.name
  return (
    <Text size="xsmall" weight={600}>
      {new Date(blog.frontmatter.date).toDateString()}
      {authorNames && ` · ${byline(authorNames, projectName)}`}
    </Text>
  )
}

function BlogCard({ blog }) {
  return (
    <Box border={{ color: "visuals-3" }} round="xsmall" overflow="hidden">
      <PlainSectionLink to={`/blog/${blog.fields.slug}`}>
        {blog.frontmatter.cover && (
          <Box width="full" height="small">
            <GatsbyImage
              alt="blog cover"
              objectFit="cover"
              image={getImage(blog.frontmatter.cover)}
            />
          </Box>
        )}
        <Box pad={{ horizontal: "medium", top: "medium", bottom: "xsmall" }}>
          <BlogMeta blog={blog} />
        </Box>
        <Box pad={{ horizontal: "medium", bottom: "large" }}>
          <Heading margin={{ top: "small", bottom: "xsmall" }} level={3} weight={500} color="brand">
            {blog.frontmatter.name}
          </Heading>
          <Paragraph size="small" fill margin="none">
            {blog.frontmatter.excerpt}
          </Paragraph>
        </Box>
      </PlainSectionLink>
    </Box>
  )
}

function FeaturedCardLarge({ blog }) {
  return (
    <Box border={{ color: "visuals-3" }} round="xsmall" overflow="hidden">
      <PlainSectionLink to={`/blog/${blog.fields.slug}`}>
        {blog.frontmatter.cover && (
          <Box height="medium">
            <GatsbyImage
              alt="blog cover"
              objectFit="cover"
              image={getImage(blog.frontmatter.cover)}
              style={{ height: "100%" }}
            />
          </Box>
        )}
        <Box pad="large">
          <BlogMeta blog={blog} />
          <Heading margin={{ top: "small", bottom: "small" }} level={2} weight={500} color="brand">
            {blog.frontmatter.name}
          </Heading>
          <Paragraph size="medium" fill margin="none">
            {blog.frontmatter.excerpt}
          </Paragraph>
        </Box>
      </PlainSectionLink>
    </Box>
  )
}

function FeaturedCardSmall({ blog }) {
  return (
    <Box border={{ color: "visuals-3" }} round="xsmall">
      <PlainSectionLink to={`/blog/${blog.fields.slug}`}>
        <Box  direction="column" gap="medium" align="start">
          {blog.frontmatter.cover && (
            <Box width="100%" height="fit" overflow="hidden">
              <GatsbyImage
                alt="blog cover"
                objectFit="contain"
                image={getImage(blog.frontmatter.cover)}
              />
            </Box>
          )}
          <Box pad="medium">
            <BlogMeta blog={blog} />
            <Heading margin={{ top: "xsmall", bottom: "xsmall" }} level={3} weight={500} color="brand">
              {blog.frontmatter.name}
            </Heading>
            <Paragraph
              // size="small"
              // fill
              margin="none"
              // style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
            >
              {blog.frontmatter.excerpt}
            </Paragraph>
          </Box>
        </Box>
      </PlainSectionLink>
    </Box>
  )
}

export function FeaturedSection({ featuredBlogs }) {
  if (!featuredBlogs.length) return null
  const [mainFeatured, ...sideFeatured] = featuredBlogs
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:flex-[2_1_300px]">
        <FeaturedCardLarge blog={mainFeatured} />
      </div>
      {sideFeatured.length > 0 && (
        <div className="flex flex-col gap-6 lg:flex-[1_1_240px]">
          {sideFeatured.map((blog, i) => (
            <FeaturedCardSmall key={i} blog={blog} />
          ))}
        </div>
      )}
    </div>
  )
}

export function BlogGrid({ blogs }) {
  if (!blogs.length) return null
  return (
    <MasonryLayoutResponsive>
      {blogs.map((blog, key) => (
        <BlogCard key={key} blog={blog} />
      ))}
    </MasonryLayoutResponsive>
  )
}