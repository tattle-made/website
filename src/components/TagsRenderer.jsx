import React, { useState } from "react"
import { Link } from "gatsby"

import { Box, Heading, Button } from "grommet"

import TagBubbleBlog from "./atomic/TagBubbleBlog"
// import './styles/global.css';

/**
 * Renders a list of tags with an option to toggle between showing all tags or a limited number.
 *
 * @component
 * @param {Object} props
 * @param {string} props.tagTypeHeading - The heading text for the type of tags being displayed.
 * @param {string[]} props.sortedUniqueTags - An array of unique tags, sorted in a specific order.
 * @param {Object} props.tagCounts - An object mapping each tag to its count.
 * @param {string} props.tagBaseURL - The base URL to which each tag will be appended.
 * @returns {JSX.Element}
 */
export default function TagsRenderer({
  tagTypeHeading,
  sortedUniqueTags,
  tagCounts,
  tagBaseURL,
}) {
  const [showAllTags, setShowAllTags] = useState(false)
  const toggleTagsDisplay = () => {
    setShowAllTags(!showAllTags)
  }

  return (
    <Box margin={{ bottom: "small" }}>
      <Box flex direction="row" align="baseline" gap="xsmall">
        <Box>
          <Heading level={4} margin={{ bottom: "small" }}>
            {tagTypeHeading}
          </Heading>
        </Box>

        <Box flex direction="row" gap="small" align="center" wrap={true}>
          {showAllTags
            ? sortedUniqueTags.map((tag) => (
              <Box key={tag} margin={{ bottom: "small" }}>
                <Link
                  to={tagBaseURL.concat(tag)}
                  style={{ textDecoration: "none" }}
                >
                  <TagBubbleBlog data={{ label: tag, count: tagCounts[tag] }} />
                </Link>
              </Box>
            ))
            : sortedUniqueTags.slice(0, 10).map((tag) => (
              <Box key={tag}
                pad={{ vertical: "xsmall" }}
                round="xsmall"
                margin={{ bottom: "xxsmall" }}>
                <Link
                  to={tagBaseURL.concat(tag)}
                  style={{ textDecoration: "none" }}
                >
                  <TagBubbleBlog data={{ label: tag, count: tagCounts[tag] }} />
                </Link>
              </Box>
            ))}
          {sortedUniqueTags.length > 10 && (
            <Button onClick={toggleTagsDisplay}>
              <Box
                pad={{ horizontal: "small", vertical: "xsmall" }}
                align="center"
                border={{ color: "#E76D67", size: "1px" }}
                round="small"
                className="hover:ring-2 hover:ring-E76D67"
              >
                {showAllTags ? "Show Less Tags" : "Show All Tags"}
              </Box>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}

