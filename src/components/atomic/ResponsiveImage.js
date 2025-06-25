import React from "react"
import { Box, ResponsiveContext } from "grommet"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const WeirdBox = styled(Box)`
  display: inline-table;
  align-self: center;
  height: 10em;
`

/**
 * @author
 * @function ResponsiveImage
 **/

/**
 * Renders an image with layout adjusted for screen size.
 * Uses Grommet's ResponsiveContext to switch layout for small screens.
 *
 * @returns {JSX.Element} Responsive image component.
 */

export const ResponsiveImage = () => {
  const size = React.useContext(ResponsiveContext)

  return (
    <>
      {size === "small" ? (
        <Box width={"100%"} alignSelf={"start"} height={"small"}>
          <StaticImage
            alt="landing page image"
            objectFit="contain"
            src="../../images/landing-page-narrow.png"
          />
        </Box>
      ) : (
        <Box width={"40%"} style={{ boxShadow: "none" }}>
          <StaticImage
            alt="landing page image"
            objectFit="contain"
            imgStyle={{ fill: true, alignSelf: "start" }}
            src="../../images/landing-page-wide.png"
          />
        </Box>
      )}
    </>
  )
}
