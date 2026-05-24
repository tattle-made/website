import React from "react"
import { Box, Text, Heading } from "grommet"

/**
 * A clickable card with an image, heading, and description.
 * Pass `image` as an imported asset or URL string.
 * Pass `url` as an external URL (https://...) or an internal path (/foo).
 */
const LinkCard = ({ image, imageAlt = "", heading, description, url }) => {
  const isExternal = url && url.startsWith("http")

  const cardContent = (
    <Box
      round="small"
      overflow="hidden"
      border={{ color: "light-4" }}
      hoverIndicator={{ background: { color: "light-1" } }}
      style={{ cursor: "pointer", height: "100%", transition: "box-shadow 0.2s" }}
      elevation="xsmall"
    >
      {image && (
        <Box height="160px" overflow="hidden" flex={false}>
          <img
            src={image}
            alt={imageAlt || heading}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      )}
      <Box pad="medium" gap="xsmall" flex>
        <Heading level={4} margin="none" style={{ lineHeight: 1.3 }}>
          {heading}
        </Heading>
        {description && (
          <Text size="small" color="dark-4">
            {description}
          </Text>
        )}
      </Box>
    </Box>
  )

  if (!url) return cardContent

  return isExternal ? (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      {cardContent}
    </a>
  ) : (
    <a href={url} style={{ textDecoration: "none" }}>
      {cardContent}
    </a>
  )
}

export default LinkCard
