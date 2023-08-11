import React from "react";
import { Box, Text } from "grommet";

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
      >
        <span style={{ textDecoration: 'underline' }}>
          <Text size="small">{data.label}</Text>
        </span>
        <Text size="xsmall" margin={{ left: "xsmall" }}>
          {data.count}
        </Text>
      </Box>
    </Box>
  );
};

export default TagBubbleBlog;
