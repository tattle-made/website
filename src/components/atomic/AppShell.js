import React, { useState } from "react"
import { Grommet, ResponsiveContext, Box, Text } from "grommet"
import SimpleHeader from "./SimpleHeader"
import SmallFooter from "./SmallFooter"
import TattleTheme from "./theme"
import SEO from "./seo"
import Footer from "../../pages/v2/footer"
import NarrowSection from "./layout/narrow-section"
import NarrowContentWrapper from "./layout/narrow-content-wrapper"
import { X } from "react-feather"
import { PlainLink } from "./TattleLinks"

/**
 * @author
 * @function ContentPageLayout
 **/

const MODAL_TEXT =
  "Read our New Case Study of the Information Chaos During India's Second Covid-19 Wave"
const MODAL_PATH = "/articles/covid-whatsapp-public-groups/"

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
  const [modal, setModal] = useState({ visibility: false, text: "" })

  return (
    <Grommet theme={TattleTheme} full>
      <Box fill direction={"column"}>
        <SEO title={`Tattle - ${headerLabel}`} />
        {/* {location.pathname !== MODAL_PATH && (
          <Box
            background={"accent-1"}
            flex={"grow"}
            pad={{ top: "xsmall", bottom: "xsmall" }}
          >
            <NarrowContentWrapper>
              <Box direction={"row"}>
                <Box>
                  <PlainLink to={"/articles/covid-whatsapp-public-groups/"}>
                    <Text size={"small"} margin={{ bottom: "none" }}>
                      {MODAL_TEXT}
                    </Text>
                  </PlainLink>
                </Box>
                <Box flex={"grow"}></Box>
              </Box>
            </NarrowContentWrapper>
          </Box>
        )} */}

        <Box
          background="brand"
          fill={"horizontal"}
          align="center"
          flex={"grow"}
        >
          <SimpleHeader
            label={headerLabel}
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
