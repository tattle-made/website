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
}) => (
  <Grommet theme={TattleTheme} full>
    <SEO title={`Tattle - ${headerLabel}`} />
    <Box fill>
      <Box flex={false} as={"header"}>
        <SimpleHeader
          label={headerLabel}
          target={headerTarget}
          primaryNav={primaryNav}
        />
      </Box>

      <Box flex overflow={"auto"}>
        <ContentPageLayout>{children}</ContentPageLayout>
      </Box>

      <Box flex={false}>
        <SmallFooter items={footerItems} />
      </Box>
    </Box>
  </Grommet>
)

const ContentPageLayout = ({ children }) => {
  const size = React.useContext(ResponsiveContext)
  console.log(size)
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
