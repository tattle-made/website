import React from "react"
import { Grommet, Box } from "grommet"
import SimpleHeader from "./SimpleHeader"
import SmallFooter from "./SmallFooter"
import TattleTheme from "./theme"
import SEO from "./seo"
import Footer from "../../pages/v2/footer"
import NarrowSection from "./layout/narrow-section"
import NarrowContentWrapper from "./layout/narrow-content-wrapper"
import { NavThemes } from "./core-style"

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
  navTheme = "light",
  pageTitle,
}) => {
  const navBg = (NavThemes[navTheme] ?? NavThemes.light).background

  return (
    <Grommet theme={TattleTheme} full>
      <Box fill direction={"column"}>
        <SEO title={meta?.name || headerLabel || `Tattle`} heading={headerLabel} meta={meta} />

        <Box
          fill={"horizontal"}
          align="center"
          flex={"grow"}
          style={{ background: navBg }}
        >
          <SimpleHeader
            label={""}
            target={headerTarget}
            primaryNav={primaryNav}
            navTheme={navTheme}
            pageTitle={pageTitle}
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
