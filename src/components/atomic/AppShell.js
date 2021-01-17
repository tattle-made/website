import React from "react"
import { Grommet, ResponsiveContext, Box } from "grommet"
import SimpleHeader from "./SimpleHeader"
import SmallFooter from "./SmallFooter"
import TattleTheme from "./theme"
import SEO from "./seo"
import Footer from "../../pages/v2/footer"
import NarrowSection from "./layout/narrow-section"
import NarrowContentWrapper from "./layout/narrow-content-wrapper"

/**
 * @author
 * @function ContentPageLayout
 **/

const setPageTitle = name => {
  return name === "" ? name : `- ${formatTitle(name)}`
}

const formatTitle = name => {
  return name
    .replace("-", " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const AppShell = ({
  children,
  footerItems,
  headerLabel,
  headerTarget,
  primaryNav,
  expandCenter,
  contentWidth,
  isMDXPage,
}) => {
  const size = React.useContext(ResponsiveContext)

  return (
    <Grommet theme={TattleTheme} full>
      <Box fill direction={"column"}>
        <SEO title={`Tattle - ${headerLabel}`} />

        <Box
          background="brand"
          fill={"horizontal"}
          align="center"
          flex={"grow"}
        >
          <NarrowContentWrapper>
            <SimpleHeader
              label={headerLabel}
              target={headerTarget}
              primaryNav={primaryNav}
            />
          </NarrowContentWrapper>
        </Box>

        <Box height={{ min: "90vh" }} flex={"grow"}>
          {isMDXPage ? (
            <NarrowContentWrapper>
              <NarrowSection>{children}</NarrowSection>
            </NarrowContentWrapper>
          ) : (
            <Box fill={"vertical"}>{children}</Box>
          )}
        </Box>

        <NarrowContentWrapper>
          <NarrowSection>
            <Footer />
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>
    </Grommet>
  )
}

const ContentPageLayout = ({ children, contentWidth }) => {
  const size = React.useContext(ResponsiveContext)
  return size === "medium" || size === "large" ? (
    <Box width={contentWidth ? contentWidth : "100%"} flex={"grow"}>
      {children}
    </Box>
  ) : (
    <Box fill>{children}</Box>
  )
}

export default AppShell
