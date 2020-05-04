import React from "react"
import { Box, Heading, Button } from "grommet"
import AppLogo from "./AppLogo"
import styled from "styled-components"
import {
  PlainLink as Link,
  PlainExternalLink as ExternalLink,
} from "./TattleLinks"

const ThemedLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`

/**
 * @author
 * @function SimpleHeader
 **/

const SimpleHeader = ({ label, target, primaryNav }) => (
  <Box direction={"row"} wrap={true}>
    <AppLogo name={label} target={target} />

    <Box
      margin={{ left: "large" }}
      pad={"small"}
      direction={"row"}
      align={"center"}
      gap={"medium"}
    >
      {primaryNav.options.map(option =>
        option.type == "external" ? (
          <ExternalLink key={option.id} href={option.target} target={"_blank"}>
            <Button plain={true}>
              <Heading margin={"none"} level={3}>
                {" "}
                {option.label}{" "}
              </Heading>
            </Button>
          </ExternalLink>
        ) : (
          <Link key={option.id} to={option.target}>
            <Button plain={true}>
              <Heading margin={"none"} level={3}>
                {" "}
                {option.label}{" "}
              </Heading>
            </Button>
          </Link>
        )
      )}
    </Box>
  </Box>
)

export default SimpleHeader
