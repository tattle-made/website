import React, { useState, useEffect } from "react"
import { Box, Text } from "grommet"

const TagBubbleBlog = ({ data }) => {
  return (
    <Box>
      {" "}
      <Box
        round={"small"}
        background={"visuals-1"}
        pad={"xsmall"}
        width={"fit-content"}
      >
        <Text size={"small"}>{data.label}</Text>{" "}
      </Box>
    </Box>
  )
}

export default TagBubbleBlog
