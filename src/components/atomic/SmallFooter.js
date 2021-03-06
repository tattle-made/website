import React, { useContext } from "react"
import { Box, Text, ResponsiveContext } from "grommet"
import { Slack, GitHub, Twitter } from "react-feather"
import { Link, PlainExternalLink } from "./TattleLinks"

/**
 * @author
 * @function SmallFooter widget
 **/

const SmallFooter = ({ items }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box
      direction={"row"}
      wrap={true}
      margin={{ right: "large" }}
      width={size !== "small" ? "960px" : null}
    >
      <Box direction={"row"} pad={"small"} gap={"medium"} wrap={true}>
        {items.primary.map(primaryItem => {
          return primaryItem.type === "internal" ? (
            <Link key={primaryItem.id} to={`/${primaryItem.target}`}>
              <Text size={"small"}> {primaryItem.label} </Text>
            </Link>
          ) : (
            <PlainExternalLink
              key={primaryItem.id}
              href={primaryItem.target}
              target="_blank"
            >
              <Text size={"small"}> {primaryItem.label} </Text>
            </PlainExternalLink>
          )
        })}
        <PlainExternalLink
          href={"https://admin417477.typeform.com/to/nVuNyG"}
          target={"_blank"}
        >
          <Slack size={12} />
        </PlainExternalLink>
        <PlainExternalLink
          href={"https://github.com/tattle-made"}
          target={"_blank"}
        >
          <GitHub size={12} />
        </PlainExternalLink>
        <PlainExternalLink
          href={"https://twitter.com/tattlemade"}
          target={"_blank"}
        >
          <Twitter size={12} />
        </PlainExternalLink>
      </Box>
    </Box>
  )
}
export default SmallFooter
