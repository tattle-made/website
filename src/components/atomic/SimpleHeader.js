import React, { useState, useContext } from "react"
import { Box, Heading, Button, ResponsiveContext, Layer, Text } from "grommet"
import TattleLogo from "./TattleLogo"
import {
  PlainLink as Link,
  PlainExternalLink as ExternalLink,
} from "./TattleLinks"
import DropDownMenu from "../DropDownMenu"
import { Menu, X } from "react-feather"
import { NavigationLabel, Theme } from "./core-style"
import NarrowSection from "./layout/narrow-section"

const dropDownOptions = [
  { id: 1, target: "/products/kosh", label: "Archive" },
  { id: 2, target: "/products/jod-bot", label: "Jod Bot" },
  { id: 3, target: "/products/khoj", label: "Khoj" },
]

const dropDownOptionsTools = [
  {
    id: 0,
    target: "/products/ogbv",
    label: "Uli",
    description: "Online Gender Based Violence Mitigation",
  },
  {
    id: 1,
    target: "/products/dau",
    label: "Deepfake Analysis Unit",
    description: "Collaborative Platform for Deepfake Assessment",
  },
  {
    id: 2,
    target: "/products/viral-spiral",
    label: "Viral Spiral",
    description: "Digital Card Game for Media Literacy",
  },
  {
    id: 3,
    target: "/products/kosh",
    label: "Kosh",
    description: "Archive multimedia data",
  },
  {
    id: 4,
    target: "/products/",
    label: "Other Projects",
    description: "",
  },
]

const dropDownOptionsAbout = []

const dropDownOptionsLearnMore = [
  {
    id: 0,
    target: "/blog",
    label: "Blog",
    type: "internal",
  },
  {
    id: 1,
    target:
      "https://us19.campaign-archive.com/home/?u=a9af83af1f247ecc04f50ad46&id=4afc4a2c79",
    label: "Newsletter",
    type: "external",
  },
  { id: 2, target: "/join-us", label: "Work With Us" },
  { id: 3, target: "/report/", label: "Annual Reports" },
  { id: 4, target: "/faq", label: "FAQ" },
  { id: 5, target: "/community", label: "Community" },
  { id: 6, target: "/updates", label: "Updates" },
]

const MobileNavItemInternalLink = ({ target, label, description }) => (
  <Link to={target}>
    <Button plain={true} margin={"xsmall"}>
      <Box>
        <Text margin={"none"} size={"small"}>
          {" "}
          {label}{" "}
        </Text>
        <Text size={"xsmall"}>{description}</Text>
      </Box>
    </Button>
  </Link>
)

const MobileNavItemExternalLink = ({ target, label }) => (
  <ExternalLink href={target} target={"_blank"}>
    <Button plain={true} margin={"xsmall"}>
      <Text margin={"none"} size={"small"}>
        {label}
      </Text>
    </Button>
  </ExternalLink>
)

const PrimaryNav = ({ primaryNav }) => {
  return (
    <Box direction={"row"} align={"center"} gap={"large"}>
      <DropDownMenu title={"Tools"} options={dropDownOptionsTools} />
      <Link to={"/blog"}>
        <Button plain={true}>
          <NavigationLabel>Blog</NavigationLabel>
        </Button>
      </Link>
      <Link to={"/research"}>
        <Button plain={true}>
          <NavigationLabel>Research</NavigationLabel>
        </Button>
      </Link>

      <DropDownMenu title={"Learn More"} options={dropDownOptionsLearnMore} />
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
    <Box direction={"row"} wrap={true} height={"76.8px"} width={"960px"} pad={{ horizontal: "medium" }}>
      {size !== "small" ? (
        <Box direction={"row"} align={"center"} width={"960px"} gap={"xsmall"}>
          <TattleLogo data={{ fill: Theme.text_color_light }} />
          {label.length !== 0 ? (
            <Text weight={900} level={3} margin="none">
              {" " + [label[0].toUpperCase(), label.slice(1)].join("")}
            </Text>
          ) : null}
          <Box flex={"grow"}></Box>
          <PrimaryNav primaryNav={primaryNav} />
        </Box>
      ) : (
        <Box
          width={"100%"}
          direction={"row"}
          align={"center"}
          fill={true}
          gap={"xsmall"}
        >
          <TattleLogo data={{ fill: Theme.text_color_light }} />
          {label.length !== 0 ? (
            <Text weight={900} level={3} margin="none">
              {" " + [label[0].toUpperCase(), label.slice(1)].join("")}
            </Text>
          ) : null}
          <Box flex={"grow"}></Box>
          <Box>
            <Button plain focusIndicator={false}>
              <Menu size={28} onClick={onOpen} />
            </Button>
          </Box>
        </Box>
      )}
      {open && (
        <Layer position="right" onClickOutside={onClose} animation={"slide"}>
          <Box fill={true} flex={"grow"} overflow="auto" background={"brand"}>
            <Box
              fill={true}
              pad={size !== "small" ? "small" : "medium"}
              direction={"column"}
              background={"brand"}
            >
              <Box direction={"row"} pad={"small"}>
                <Box flex={"grow"} />
                <Button plain focusIndicator={false}>
                  <X size={28} onClick={onClose} />
                </Button>
              </Box>
              <Box direction={"column"} pad={"small"}>
                <Heading level={3} margin={"small"}>
                  {" "}
                  Products{" "}
                </Heading>
                <Box flex={"grow"} margin={{ left: "medium" }}>
                  {[0, 1, 2, 3].map(i => (
                    <MobileNavItemInternalLink
                      label={dropDownOptionsTools[i].label}
                      description={dropDownOptionsTools[i].description}
                      target={dropDownOptionsTools[i].target}
                    />
                  ))}
                </Box>
                <Link to={"/datasets"}>
                  <Box>
                    <Heading level={3} margin={"small"}>
                      Datasets
                    </Heading>
                  </Box>
                </Link>
                <Link to={"/research"}>
                  <Box>
                    <Heading level={3} margin={"small"}>
                      Research
                    </Heading>
                  </Box>
                </Link>

                <Heading level={3} margin={"small"}>
                  Learn More
                </Heading>

                <Box flex={"grow"} margin={{ left: "medium" }}>
                  {dropDownOptionsLearnMore.map(item => (
                    <MobileNavItemExternalLink
                      label={item.label}
                      target={item.target}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default SimpleHeader
