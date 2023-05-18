import React from "react"
import { Box, Heading, Text } from "grommet"
import { byline } from "../default-blog-index-layout"

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
