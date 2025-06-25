import React from "react"
import { Box, Heading, Text } from "grommet"
import { byline } from "../default-blog-index-layout"

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

const BlogHeaderCard = ({ name, author, date, project }) => (
  <Box margin={{ bottom: "small" }}>
    <Box direction={"row"} align={"center"}>
      <Heading level={2} margin={"none"} weight={500}>
        {name}
      </Heading>
    </Box>
    <Text size={"small"}>{`Published on ${new Date(
      date
    ).toDateString()}`}</Text>
    <Text size={"small"}>{byline(author, project)}</Text>
  </Box>
)

export default BlogHeaderCard