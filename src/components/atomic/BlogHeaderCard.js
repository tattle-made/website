import React from "react"
import { Box, Heading, Text } from "grommet"
import { byline } from "../default-blog-index-layout"
import { Link } from "gatsby"

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

const BlogHeaderCard = ({ name, author, date, project, textColor, authorSlug }) => {

  return (
    <Box margin={{ bottom: "small" }}>
      <Box direction={"row"} align={"center"}>
        <Heading level={2} margin={"none"} weight={500} fill={true} color={textColor}>
          {name}
        </Heading>
      </Box>

      <Text size={"small"} color={textColor}>
        {`Published on ${new Date(date).toDateString()}`}
      </Text>

      <Text size={"small"} color={textColor}>
        {author?.map((a, index) => (
          <span key={a.fields.slug}>
            <Link
              to={`/people/${a.fields.slug}`}
              style={{ textDecoration: "none", color: textColor }}
            >
              {a.frontmatter.name}
            </Link>
            {index < author.length - 1 ? ", " : ""}
          </span>
        ))}
      </Text>
    </Box>
  )
}

export default BlogHeaderCard
