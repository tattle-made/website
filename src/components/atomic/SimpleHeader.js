import React from "react"
import { Box, Heading, Button } from "grommet"
import AppLogo from "./AppLogo"
import {
  PlainLink as Link,
  PlainExternalLink as ExternalLink,
} from "./TattleLinks"
import DropDownMenu from "../DropDownMenu"

const dropDownOptions = [
  { id: 1, target: "/kosh", label: "Archive" },
  { id: 2, target: "/jod-bot", label: "Jod Bot" },
  { id: 3, target: "/khoj", label: "Khoj" },
]

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
      <DropDownMenu options={dropDownOptions} />
      {primaryNav.options.map(option =>
        option.type === "external" ? (
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
