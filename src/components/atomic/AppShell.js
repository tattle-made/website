import React from "react"
import { Grommet, ResponsiveContext, Box } from "grommet"
import SimpleHeader from "./SimpleHeader"
import SmallFooter from "./SmallFooter"
import TattleTheme from "./theme"
import SEO from "./seo"
import Footer from "../../pages/v2/footer"
import NarrowSection from "./layout/narrow-section"

/**
 * @author
 * @function ContentPageLayout
 **/

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
      <SEO title={`Tattle - ${headerLabel}`} />
      <Box>
        <Box flex={true} as={"header"} background={"brand"}>
          <Box width={size !== "small" ? "960px" : null} alignSelf={"center"}>
            <SimpleHeader
              label={headerLabel}
              target={headerTarget}
              primaryNav={primaryNav}
            />
          </Box>
        </Box>

        <Box height={{ min: "90vh" }}>
          {isMDXPage ? (
            <NarrowSection>{children}</NarrowSection>
          ) : (
            <ContentPageLayout contentWidth={contentWidth}>
              {children}
            </ContentPageLayout>
          )}
        </Box>

        <NarrowSection>
          <Footer />
        </NarrowSection>
      </Box>
    </Grommet>
  )
}

const ContentPageLayout = ({ children, contentWidth }) => {
  const size = React.useContext(ResponsiveContext)
  return size === "medium" || size === "large" ? (
    <Box width={contentWidth ? contentWidth : "100%"} alignSelf={"center"} flex>
      {children}
    </Box>
  ) : (
    <Box fill>{children}</Box>
  )
}

export default AppShell
