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
    target: "/products/kosh",
    label: "Kosh",
    description: "Archive multimedia data",
  },
  {
    id: 1,
    target: "/products/jod-bot",
    label: "Jod Bot",
    description: "Telegram bot for data archivists",
  },
  { id: 2, target: "/products/whatsapp-archiver", label: "Whatsapp Scraper" },
  {
    id: 3,
    target: "https://github.com/tattle-made/factchecking-sites-scraper",
    label: "FactCheck Article Scraper",
    type: "external",
  },
  {
    id: 4,
    target: "https://services.tattle.co.in/khoj/dashboard",
    label: "FactCheck Article Dashboard",
    type: "external",
  },
  {
    id: 5,
    target: "/products/khoj",
    label: "Khoj",
    description: "Find accurate information",
  },
]

const dropDownOptionsAbout = []

const dropDownOptionsLearnMore = [
  {
    id: 1,
    target: "https://blog.tattle.co.in",
    label: "Blog",
    type: "external",
  },
  {
    id: 1,
    target:
      "https://us19.campaign-archive.com/home/?u=a9af83af1f247ecc04f50ad46&id=4afc4a2c79",
    label: "Newsletter",
    type: "external",
  },
  { id: 1, target: "/join-us", label: "Work With Us" },
  { id: 1, target: "/report/", label: "Annual Reports" },
  { id: 0, target: "/faq", label: "FAQ" },
  { id: 1, target: "/community", label: "Community" },
  { id: 2, target: "/updates", label: "Updates" },
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
      <Link to={"/datasets"}>
        <Button plain={true}>
          <NavigationLabel>Datasets</NavigationLabel>
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
    <Box direction={"row"} wrap={true} height={"76.8px"} width={"960px"}>
      {size !== "small" ? (
        <Box direction={"row"} align={"center"} width={"960px"}>
          <TattleLogo data={{ fill: Theme.text_color_light }} />
          <Box flex={"grow"}></Box>
          <PrimaryNav primaryNav={primaryNav} />
        </Box>
      ) : (
        <Box width={"100%"} direction={"row"} align={"center"} fill={true}>
          <TattleLogo data={{ fill: Theme.text_color_light }} />
          <Box width={"100%"} />
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
                <Heading level={3}> Tools </Heading>
                <Box>
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <MobileNavItemInternalLink
                      label={dropDownOptionsTools[i].label}
                      description={dropDownOptionsTools[i].description}
                      target={dropDownOptionsTools[i].target}
                    />
                  ))}
                </Box>
                <Link to={"/datasets"}>
                  <Box>
                    <Heading level={3}>Datasets</Heading>
                  </Box>
                </Link>
                <Link to={"/research"}>
                  <Box>
                    <Heading level={3}>Research</Heading>
                  </Box>
                </Link>

                <Heading level={3}>Learn More</Heading>

                <Box>
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
