import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
/**
 * @author
 * @function NarrowSection
 * type : 'top'
 **/

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
