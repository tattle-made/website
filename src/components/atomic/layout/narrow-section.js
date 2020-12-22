import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
/**
 * @author
 * @function NarrowSection
 **/

const NarrowSection = ({ children, topSpace, bottomSpace }) => {
  const size = useContext(ResponsiveContext)
  const Section = () => (
    <Box width={"960px"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )

  const SmallSection = ({ children }) => (
    <Box width={"100%"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box pad={{ left: "large", right: "large" }}>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )

  const MediumSection = ({ children }) => (
    <Box width={"960px"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box pad={{ left: "small", right: "small" }}>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )
  return size === "small" ? (
    <SmallSection>{children}</SmallSection>
  ) : size === "medium" ? (
    <MediumSection>{children}</MediumSection>
  ) : (
    <Section>{children}</Section>
  )
}

export default NarrowSection
