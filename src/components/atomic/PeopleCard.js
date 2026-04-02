import React from "react"
import { Box, Heading, Text } from "grommet"
import { ExternalLink } from "react-feather"
import { PlainExternalLink } from "./TattleLinks"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/**
 * Displays a person's name, role, and external link as a profile card.
 *
 * @param {Object} props
 * @param {string} props.name - Person's name.
 * @param {string} props.role - Person's role or title.
 * @param {string} props.url - External URL (e.g., profile link).
 * @param {Object} [props.img] - Gatsby image data for avatar.
 * @returns {JSX.Element} Profile card component.
 */

const PeopleCard = ({ name, role, url, img }) => {
  const image = img ? getImage(img) : null
  return (
    <Box
      round={"small"}
      border={{ color: "light-4", size: "xsmall" }}
      overflow={"hidden"}
    >
      <Box height={"4px"} background={"brand"} />
      <PlainExternalLink href={url} target={"_blank"}>
        <Box
          pad={"medium"}
          direction={"row"}
          gap={"medium"}
          align={"center"}
          hoverIndicator={{ background: { color: "light-1" } }}
          focusIndicator={false}
        >
          {image && (
            <Box
              width={"64px"}
              height={"64px"}
              round={"full"}
              overflow={"hidden"}
              flex={{ shrink: 0 }}
            >
              <GatsbyImage
                alt={`${name}'s photo`}
                image={image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          )}
          <Box direction={"column"} gap={"xsmall"} flex>
            <Box direction={"row"} align={"center"} justify={"between"}>
              <Heading level={4} margin={"none"} weight={600} color={"accent-1"}>
                {name}
              </Heading>
              {url && url.length !== 0 && <ExternalLink size={14} color={"#E76D67"} />}
            </Box>
            <Text size={"small"} color={"dark-4"}>
              {role}
            </Text>
          </Box>
        </Box>
      </PlainExternalLink>
    </Box>
  )
}

export default PeopleCard
