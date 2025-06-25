import React from "react";
import { Box, Text } from "grommet";

/**
 * Renders an underlined tag label for blog posts.
 *
 * @param {Object} props
 * @param {Object} props.data - Data object containing tag info.
 * @param {string} props.data.label - The text label of the tag.
 * @returns {JSX.Element} Blog tag bubble component.
 */

const TagBubbleBlog = ({ data }) => {
  return (
    <Box direction="row" align="center" gap="xsmall">
      <Box
        round="small"
        background="visuals-1"
        pad={{ horizontal: "small", vertical: "xsmall" }}
        width="fit-content"
        direction="row"
        align="center"
        style={{
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }}
      >
        <span style={{ textDecoration: 'underline' }}>
          <Text size="xsmall">{data.label}</Text>
        </span>
        <Text size="xsmall" margin={{ left: "xsmall" }}>
          {data.count}
        </Text>
      </Box>
    </Box>
  );
};

export default TagBubbleBlog;
