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

const AppShell = ({
  children,
  footerItems,
  headerLabel,
  headerTarget,
  primaryNav,
  expandCenter,
}) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grommet theme={TattleTheme} full>
      <SEO title={`Tattle - ${headerLabel}`} />
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
