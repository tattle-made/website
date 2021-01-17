import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
/**
 * @author
 * @function NarrowSection
 **/

const NarrowContentWrapper = ({ children, justify }) => {
  const size = useContext(ResponsiveContext)
  const Section = () => (
    <Box
      width={"960px"}
      alignSelf={"center"}
      flex={"grow"}
      justify={justify ? justify : "start"}
    >
      <Box>{children}</Box>
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
      width={"960px"}
      alignSelf={"center"}
      flex={"grow"}
      justify={justify ? justify : "start"}
    >
      <Box>{children}</Box>
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

export default NarrowContentWrapper
