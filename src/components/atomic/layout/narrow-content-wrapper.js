import React, { useContext, useEffect, useState } from "react"
import { Box, ResponsiveContext } from "grommet"
import { useLocation } from "@reach/router"
/**
 * @author
 * @function NarrowSection
 **/

/**
 * Wraps content in a responsive, centered container with adjustable width and justification.
 * Designed for consistent layout across blog and other pages.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to render inside the wrapper.
 * @param {string} [props.justify] - Optional justification (e.g., "center", "start").
 * @param {string} [props.width] - Optional custom width for the container.
 * @returns {JSX.Element} Responsive content wrapper.
 */

const NarrowContentWrapper = ({ children, justify, width, ...props }) => {
  const size = useContext(ResponsiveContext)
  const location = useLocation()
  const [defaultLargeWidth, setDefaultLargeWidth] = useState("960px")

  useEffect(() => {
    // Set default width for large screen size to 65% only for the blog pages
    if (location.pathname.includes("/blog/")) {
      setDefaultLargeWidth("65%")
    }
  }, [location])

  const Section = () => (
    <Box
      width={width ? width : defaultLargeWidth}
      alignSelf={"center"}
      flex={"grow"}
      justify={justify ? justify : "start"}
    >
      <Box pad={{ left: "large", right: "large" }}>{children}</Box>
    </Box>
  )

  const SmallSection = ({ children }) => (
    <Box
      width={"100%"}
      alignSelf={"center"}
      flex={"grow"}
      justify={justify ? justify : "start"}
    >
      <Box pad={{ left: "large", right: "large" }}>{children}</Box>
    </Box>
  )

  const MediumSection = ({ children }) => (
    <Box
      width={width ? width : "1110px"}
      alignSelf={"center"}
      flex={"grow"}
      justify={justify ? justify : "start"}
    >
      <Box pad={{ left: "large", right: "large" }}>{children}</Box>
    </Box>
  )
  return size === "small" ? (
    <SmallSection props={props}>{children}</SmallSection>
  ) : size === "medium" ? (
    <MediumSection props={props}>{children}</MediumSection>
  ) : (
    <Section props={props}>{children}</Section>
  )
}

export default NarrowContentWrapper
