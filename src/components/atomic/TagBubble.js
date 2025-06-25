import React, { useState, useEffect } from "react"
import { Box, Text } from "grommet"

/**
 * Renders a small text bubble for a given tag or category.
 *
 * @param {Object} props
 * @param {Object} props.data - Data object containing tag information.
 * @param {string} props.data.label - The label to display inside the bubble.
 * @returns {JSX.Element} Tag bubble component.
 */

const TagBubble = ({ data }) => {
  return (
    <Box>
      {" "}
      <Box
        round={"small"}
        background={"visuals-1"}
        pad={"xsmall"}
        width={"fit-content"}
      >
        <Text size={"xsmall"}>{data.label}</Text>{" "}
      </Box>
    </Box>
  )
}

export default TagBubble
