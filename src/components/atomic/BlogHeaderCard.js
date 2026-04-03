import React from "react"
import { Box, Heading, Text } from "grommet"
import { byline } from "../default-blog-index-layout"
import { Link } from "gatsby"

/**
 * Renders the header section of a blog post card with title, author, date, and project info.
 *
 * @param {Object} props
 * @param {string} props.name - Blog post title.
 * @param {string} props.author - Author name.
 * @param {string} props.date - Publication date string.
 * @param {string} [props.project] - Optional project associated with the blog.
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