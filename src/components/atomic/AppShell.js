import React from "react"
import { Grommet, ResponsiveContext, Box } from "grommet"
import SimpleHeader from "./SimpleHeader"
import SmallFooter from "./SmallFooter"
import TattleTheme from "./theme"
import SEO from "./seo"

/**
 * @author
 * @function ContentPageLayout
 **/


const pages = {
  "faq" : "FAQ",
  "jod-bot": "Jod Bot",
  "khoj": "Khoj",
  "kosh": "Kosh",
  "join-us": "Join Us!",
  "2019-report": "2019 Report",
  "contributors": "Contributors",
  "privacy-policy": "Privacy Policy",
  "contact": "Contact"
}

const setPageTitle = (name) => {
  return name === "" ? name : `- ${formatTitle(name)}`
}

const formatTitle = (name) => {
  return name.replace("-", " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

const AppShell = ({
  children,
  footerItems,
  headerLabel,
  headerTarget,
  primaryNav,
  expandCenter,
}) => {
  const size = React.useContext(ResponsiveContext)
  const [pageName] = window.location.href.split("/").slice(-1) 

  return (
    <Grommet theme={TattleTheme} full>
      <SEO title={`${headerLabel} ${setPageTitle(pageName, pages)}`} />
      <Box fill>
        <Box
          flex={false}
          as={"header"}
          width={size !== "small" ? "960px" : null}
          alignSelf={"center"}
          pad={size !== "small" ? "small" : "medium"}
        >
          <SimpleHeader
            label={headerLabel}
            target={headerTarget}
            primaryNav={primaryNav}
          />
        </Box>

        <Box flex overflow={"auto"}>
          <ContentPageLayout>{children}</ContentPageLayout>
        </Box>

        <Box
          flex={false}
          as={"footer"}
          width={size !== "small" ? "960px" : null}
          alignSelf={"center"}
        >
          <SmallFooter items={footerItems} />
        </Box>
      </Box>
    </Grommet>
  )
}

const ContentPageLayout = ({ children }) => {
  const size = React.useContext(ResponsiveContext)
  return size === "medium" || size === "large" ? (
    <Box
      width={"960px"}
      pad={"small"}
      margin={{ top: "large", bottom: "large" }}
      alignSelf={"center"}
      flex
    >
      {children}
    </Box>
  ) : (
    <Box fill pad={"small"} margin={{ top: "large", bottom: "large" }}>
      {children}
    </Box>
  )
}

export default AppShell
