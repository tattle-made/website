import React from "react"
import { Box } from "grommet"

/**
 * Wraps content in a responsive, centered container with adjustable width and justification.
 * Designed for consistent layout across blog and other pages.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to render inside the wrapper.
 * @param {string} [props.justify] - Optional justification (e.g., "center", "start").
 * @param {string} [props.width] - Optional custom width override.
 * @returns {JSX.Element} Responsive content wrapper.
 */

const NarrowContentWrapper = ({ children, justify, width }) => (
  <Box
    width={width || "100%"}
    alignSelf={"center"}
    flex={"grow"}
    justify={justify || "start"}
    className={width ? undefined : "w-full md:max-w-[1110px] xl:max-w-[960px]"}
  >
    <Box pad={{ left: "large", right: "large" }}>{children}</Box>
  </Box>
)

export default NarrowContentWrapper
