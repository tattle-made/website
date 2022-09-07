import React from "react"
import { Box, Heading, Text } from "grommet"

const BlogHeaderCard = ({ name, author, project }) => (
  <Box margin={{ bottom: "small" }}>
    <Box direction={"row"} align={"center"}>
      <Heading level={2} margin={"none"} weight={500}>
        {name}
      </Heading>
    </Box>

    <Text size={"small"}>{`${author} (${project})`}</Text>
  </Box>
)

export default BlogHeaderCard
