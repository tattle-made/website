import React from "react"
import { Box, Heading, Text } from "grommet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PlainLink } from "./TattleLinks"

/**
 * Renders the header section of a blog post with title, authors (with avatars), date, and project.
 *
 * @param {Object} props
 * @param {string} props.name - Blog post title.
 * @param {Array} [props.authors=[]] - Array of linked author MDX nodes with frontmatter and fields.
 * @param {string} props.date - Publication date string.
 * @param {string} [props.project] - Optional project name associated with the blog.
 * @param {string} [props.textColor] - Optional text color override.
 * @returns {JSX.Element} Blog header card component.
 */

const AuthorAvatar = ({ author, textColor }) => {
  const img = author?.frontmatter?.img ? getImage(author.frontmatter.img) : null
  const name = author?.frontmatter?.name
  const slug = author?.fields?.slug

  const inner = (
    <Box direction="row" align="center" gap="xsmall">
      <Box
        width="32px"
        height="32px"
        round="full"
        overflow="hidden"
        flex={{ shrink: 0 }}
        background="light-3"
      >
        {img && (
          <GatsbyImage
            alt={`${name}'s photo`}
            image={img}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </Box>
      <Text size="small" color={ textColor || "inherit" || "dark-1"} weight={500}>
        {name}
      </Text>
    </Box>
  )

  return slug ? (
    <PlainLink to={`/people/${slug}`}>{inner}</PlainLink>
  ) : (
    inner
  )
}

const BlogHeaderCard = ({ name, authors = [], date, project, textColor }) => (
  <Box margin={{ bottom: "small" }}>
    <Heading level={2} margin={"none"} weight={500} fill={true} color={textColor}>
      {name}
    </Heading>
    <Text size={"small"} color={textColor}>{`Published on ${new Date(
      date
    ).toDateString()}`}</Text>
    {authors.length > 0 && (
      <Box direction="row" gap="medium" wrap margin={{ top: "xsmall" }}>
        {authors.map((a) => (
          <AuthorAvatar key={a?.fields?.slug || a?.frontmatter?.name} author={a} textColor={textColor} />
        ))}
      </Box>
    )}
  </Box>
)

export default BlogHeaderCard
