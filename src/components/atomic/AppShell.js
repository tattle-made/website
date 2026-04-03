import React from "react"
import { Grommet, Box } from "grommet"
import SimpleHeader from "./SimpleHeader"
import SmallFooter from "./SmallFooter"
import TattleTheme from "./theme"
import SEO from "./seo"
import Footer from "../../pages/v2/footer"
import NarrowSection from "./layout/narrow-section"
import NarrowContentWrapper from "./layout/narrow-content-wrapper"

const AppShell = ({
  children,
  footerItems,
  headerLabel,
  headerTarget,
  primaryNav,
  expandCenter,
  contentWidth,
  isMDXPage,
  meta,
}) => {
  return (
    <Grommet theme={TattleTheme} full>
      <Box fill direction={"column"}>
        <SEO title={meta?.name || headerLabel || `Tattle`} heading={headerLabel} meta={meta} />

        <Box
          background="brand"
          fill={"horizontal"}
          align="center"
          flex={"grow"}
        >
          <SimpleHeader
            label={""}
            target={headerTarget}
            primaryNav={primaryNav}
          />
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


export default AppShell
