import React, { useState, useContext } from "react"
import { Box, Heading, Button, ResponsiveContext, Layer, Text } from "grommet"
import AppLogo from "./AppLogo"
import {
  PlainLink as Link,
  PlainExternalLink as ExternalLink,
} from "./TattleLinks"
import DropDownMenu from "../DropDownMenu"
import { Menu, X } from "react-feather"

const dropDownOptions = [
  { id: 1, target: "/products/kosh", label: "Archive" },
  { id: 2, target: "/products/jod-bot", label: "Jod Bot" },
  { id: 3, target: "/products/khoj", label: "Khoj" },
]

const PrimaryNav = ({ primaryNav }) => {
  return (
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
              <Heading margin={"none"} level={4}>
                {" "}
                {option.label}{" "}
              </Heading>
            </Button>
          </ExternalLink>
        ) : (
          <Link key={option.id} to={option.target}>
            <Button plain={true}>
              <Heading margin={"none"} level={4}>
                {" "}
                {option.label}{" "}
              </Heading>
            </Button>
          </Link>
        )
      )}
    </Box>
  )
}

/**
 * @author
 * @function SimpleHeader
 **/

const SimpleHeader = ({ label, target, primaryNav, onHamburgerClicked }) => {
  const size = useContext(ResponsiveContext)
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <Box
      direction={"row"}
      wrap={true}
      pad={size !== "small" ? "small" : "medium"}
    >
      <AppLogo name={label} target={target} />
      <Box flex={"grow"} />
      {size !== "small" ? (
        <PrimaryNav primaryNav={primaryNav} />
      ) : (
        <Button plain focusIndicator={false}>
          <Menu size={28} onClick={onOpen} />
        </Button>
      )}
      {open && (
        <Layer position="right" onClickOutside={onClose} animate={true}>
          <Box fill={true} flex={"grow"} overflow="auto" background={"gray-1"}>
            <Box
              fill={true}
              pad={size !== "small" ? "small" : "medium"}
              direction={"column"}
              background={"gray-2"}
            >
              <Box direction={"row"}>
                <Box flex={"grow"} />
                <Button plain focusIndicator={false}>
                  <X size={28} onClick={onClose} />
                </Button>
              </Box>
              <Box direction={"column"} pad={"small"}>
                <Heading level={2}> Products </Heading>
                <Box direction={"column"} pad={"medium"}>
                  <Text> Kosh </Text>
                  <Text> Khoj </Text>
                  <Text> Archive </Text>
                </Box>
                <Heading level={2}> 2019 Annual Report </Heading>
                <Heading level={2}> Join Us </Heading>
                <Heading level={2}> About Us </Heading>
              </Box>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default SimpleHeader
