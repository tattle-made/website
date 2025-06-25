import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
/**
 * @author
 * @function NarrowSection
 * type : 'top'
 **/

/**
 * Renders a narrow-width section wrapper for page content.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to display inside the section.
 * @returns {JSX.Element} Narrow section component.
 */

const NarrowSection = ({ children }) => {
  return (
    <Box width={"100%"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )
}

export default NarrowSection
