import React, { useState, useEffect, useContext } from "react"
import { ResponsiveContext, Grid, Box, Heading, Text } from "grommet"
import TattleLogo from "../../components/atomic/TattleLogo"
import { Slack, GitHub, Twitter } from "react-feather"
import { Link, PlainExternalLink } from "../../components/atomic/TattleLinks"
import { primaryNav, footerItems } from "../../config/options"
/**
 * @author
 * @function Footer
 **/
import { FooterNavigationLabel } from "../../components/atomic/core-style"

const Footer = () => {
  const [fetching, setFetching] = useState(false)
  const size = useContext(ResponsiveContext)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box>
      <ResponsiveLayoutDatasets>
        <Box gap={"medium"}>
          <TattleLogo data={{ scale: 1.2 }} />
        </Box>
        <Box direction={"column"}>
          {footerItems.primary.map(primaryItem => {
            return primaryItem.type === "internal" ? (
              <Link key={primaryItem.id} to={`/${primaryItem.target}`}>
                <FooterNavigationLabel>
                  {" "}
                  {primaryItem.label}{" "}
                </FooterNavigationLabel>
              </Link>
            ) : (
              <PlainExternalLink
                key={primaryItem.id}
                href={primaryItem.target}
                target="_blank"
              >
                <FooterNavigationLabel size={"small"}>
                  {" "}
                  {primaryItem.label}{" "}
                </FooterNavigationLabel>
              </PlainExternalLink>
            )
          })}
        </Box>
        <Box>
          <Box
            direction={"row"}
            gap={"small"}
            alignSelf={size !== "small" ? "end" : "start"}
          >
            <PlainExternalLink
              href={"https://admin417477.typeform.com/to/nVuNyG"}
              target={"_blank"}
            >
              <Slack size={20} color={"#a0a0a0"} />
            </PlainExternalLink>
            <PlainExternalLink
              href={"https://github.com/tattle-made"}
              target={"_blank"}
            >
              <GitHub size={20} color={"#a0a0a0"} />
            </PlainExternalLink>
            <PlainExternalLink
              href={"https://twitter.com/tattlemade"}
              target={"_blank"}
            >
              <Twitter size={20} color={"#a0a0a0"} />
            </PlainExternalLink>
          </Box>
        </Box>
      </ResponsiveLayoutDatasets>
      <Box margin={{ top: "small" }}>
        <Text weight={"400"} size={"xsmall"}>
          Text and illustrations on the website is licensed under Creative
          Commons 4.0 License. The code is licensed under GPL. For data, please
          look at respective licenses.
        </Text>
      </Box>
    </Box>
  )
}

const ResponsiveLayoutDatasets = ({ children }) => {
  const size = useContext(ResponsiveContext)
  return size !== "small" ? (
    <Grid
      rows={["flex"]}
      columns={["1/4", "1/4", "1/2"]}
      areas={[["tattle", "menu", "license"]]}
    >
      <Box gridArea={"tattle"}>{children[0]}</Box>
      <Box gridArea={"menu"}>{children[1]}</Box>
      <Box gridArea={"license"}>{children[2]}</Box>
    </Grid>
  ) : (
    <Grid
      rows={["flex", "flex"]}
      columns={["2/3", "1/3"]}
      gap="small"
      areas={[
        ["tattle", "menu"],
        ["license", "license"],
      ]}
    >
      <Box gridArea={"tattle"}>{children[0]}</Box>
      <Box gridArea={"menu"}>{children[1]}</Box>
      <Box gridArea={"license"}>{children[2]}</Box>
    </Grid>
  )
}

export default Footer
