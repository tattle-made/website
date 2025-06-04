import React, { useState, useEffect } from "react"
import { Box, Text } from "grommet"

const TagBubble = ({ data }) => {
  return (
    <Box>
      {" "}
      <Box
        round={"small"}
        background={"visuals-1"}
        pad={"xsmall"}
        width={"fit-content"}
        margin={{ bottom: "xsmall" }}
      >
        <Text size={"xsmall"}>{data.label}</Text>{" "}
      </Box>
    </Box>
  )
}

export default TagBubble
