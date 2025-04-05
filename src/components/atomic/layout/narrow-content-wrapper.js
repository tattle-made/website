import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
/**
 * @author
 * @function NarrowSection
 **/

const NarrowContentWrapper = ({ children, justify, width, ...props }) => {
  const size = useContext(ResponsiveContext)
  const Section = () => (
    <Box
      width={width ? width : "960px"}
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
