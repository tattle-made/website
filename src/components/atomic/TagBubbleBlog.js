import React, { useContext } from "react";
import { Box, Text, ResponsiveContext } from "grommet";

/**
 * Renders a responsive blog tag bubble with an underlined label and count.
 *
 * The component adjusts text size based on screen size
 * and ensures the tag does not wrap internally.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data object containing tag information.
 * @param {string} props.data.label - The text label of the tag.
 * @param {number} props.data.count - The number of posts associated with the tag.
 *
 * @returns {JSX.Element} A styled tag bubble component.
 */

const TagBubbleBlog = ({ data }) => {
  const screenSize = useContext(ResponsiveContext);
  const isPhone = screenSize === "small";

  const textSize = isPhone ? "xsmall" : "small";

  return (
    <Box
      flex={false}
      width="fit-content"
      style={{ minWidth: "max-content" }}
      margin={{
        top: isPhone ? "xsmall" : "none",
      }}
    >
      <Box
        direction="row"
        align="center"
        round="small"
        background="visuals-1"
        pad={{ horizontal: "small", vertical: "xsmall" }}
        gap="xsmall"
      >
        <Text
          size={textSize}
          style={{
            textDecoration: "underline",
            whiteSpace: "nowrap",
          }}
        >
          {data.label}
        </Text>

        <Text size={textSize}>{data.count}</Text>
      </Box>
    </Box>
  );
};

export default TagBubbleBlog;