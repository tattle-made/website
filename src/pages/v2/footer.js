import React, { useContext } from "react"
import { ResponsiveContext, Grid, Box, Text } from "grommet"
import TattleLogo from "../../components/atomic/TattleLogo"
import { Slack, GitHub, Twitter } from "react-feather"
import {
  PlainLink as Link,
  PlainExternalLink,
} from "../../components/atomic/TattleLinks"
import { footerItems } from "../../config/options"
import { FooterNavigationLabel } from "../../components/atomic/core-style"

const FooterLinkColumn = ({ heading, links }) => (
  <Box direction="column" gap="xsmall">
    <Text
      size="xsmall"
      weight={700}
      style={{ letterSpacing: "0.12em", textTransform: "uppercase", color: "#252653", marginBottom: "4px" }}
    >
      {heading}
    </Text>
    {links.map(item =>
      item.type === "internal" ? (
        <Link key={item.id} to={item.target}>
          <FooterNavigationLabel>{item.label}</FooterNavigationLabel>
        </Link>
      ) : (
        <PlainExternalLink key={item.id} href={item.target} target="_blank">
          <FooterNavigationLabel>{item.label}</FooterNavigationLabel>
        </PlainExternalLink>
      )
    )}
  </Box>
)

const Footer = () => {
  const size = useContext(ResponsiveContext)

  return (
    <Box>
      <FooterGrid size={size}>
        {/* Logo */}
        <Box gap="medium">
          <TattleLogo data={{ scale: 1.2 }} />
        </Box>

        {/* Primary links */}
        <FooterLinkColumn heading={footerItems.primary.heading} links={footerItems.primary.links} />

        {/* Secondary links */}
        <FooterLinkColumn heading={footerItems.secondary.heading} links={footerItems.secondary.links} />

        {/* Social icons */}
        <Box>
          <Box
            direction="row"
            gap="small"
            alignSelf={size !== "small" ? "end" : "start"}
          >
            <PlainExternalLink href="https://admin417477.typeform.com/to/nVuNyG" target="_blank">
              <Slack size={20} color="#a0a0a0" />
            </PlainExternalLink>
            <PlainExternalLink href="https://github.com/tattle-made" target="_blank">
              <GitHub size={20} color="#a0a0a0" />
            </PlainExternalLink>
            <PlainExternalLink href="https://twitter.com/tattlemade" target="_blank">
              <Twitter size={20} color="#a0a0a0" />
            </PlainExternalLink>
          </Box>
        </Box>
      </FooterGrid>

      <Box margin={{ top: "small" }}>
        <Text weight={400} size="xsmall">
          Text and illustrations on the website is licensed under Creative
          Commons 4.0 License. The code is licensed under GPL. For data, please
          look at respective licenses.
        </Text>
      </Box>
    </Box>
  )
}

const FooterGrid = ({ children, size }) =>
  size !== "small" ? (
    <Grid
      rows={["flex"]}
      columns={["1/4", "1/4", "1/4", "1/4"]}
      areas={[["logo", "col1", "col2", "social"]]}
      fill
    >
      <Box gridArea="logo">{children[0]}</Box>
      <Box gridArea="col1">{children[1]}</Box>
      <Box gridArea="col2">{children[2]}</Box>
      <Box gridArea="social">{children[3]}</Box>
    </Grid>
  ) : (
    <Grid
      rows={["flex", "flex"]}
      columns={["1/2", "1/2"]}
      gap="medium"
      areas={[
        ["logo", "social"],
        ["col1", "col2"],
      ]}
      fill
    >
      <Box gridArea="logo">{children[0]}</Box>
      <Box gridArea="col1">{children[1]}</Box>
      <Box gridArea="col2">{children[2]}</Box>
      <Box gridArea="social">{children[3]}</Box>
    </Grid>
  )

export default Footer
