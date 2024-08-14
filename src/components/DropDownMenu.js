import React, { useState, useEffect, useRef } from "react"
import { Box, Drop, Button, Heading, Text } from "grommet"
import { ChevronDown, ExternalLink as ExternalLinkIcon } from "react-feather"
import {
  PlainLink as Link,
  PlainExternalLink as ExternalLink,
} from "../components/atomic/TattleLinks"
/**
 * @author
 * @function MoleculeViewMetadataFromOriginalService
 **/
import { NavigationLabel, Theme } from "./atomic/core-style"

const DropDownMenu = ({ options, title }) => {
  const [fetching, setFetching] = useState(false)
  const [showToolTip, setShowToolTip] = useState(false)

  const iconRef = useRef()

  useEffect(() => {
    setFetching(true)
  },[])

  const onShowToolTip = () => {
    setShowToolTip(true)
  }

  const onHideToolTip = () => {
    setShowToolTip(false)
  }

  return (
    <Box>
      <Button
        ref={iconRef}
        focusIndicator={false}
        onClick={() => onShowToolTip()}
      >
        <Box direction={"row"} gap={"xxsmall"} align={"center"}>
          <NavigationLabel>{title}</NavigationLabel>
          <ChevronDown size={16} color={Theme.text_color_light} />
        </Box>
      </Button>
      {showToolTip && (
        <Drop
          target={iconRef.current}
          align={{ top: "bottom", right: "right" }}
          onClickOutside={onHideToolTip}
          onEsc={onHideToolTip}
          margin={{ top: "small", right: "small" }}
        >
          <Box pad={"small"} direction={"column"} background={"light-3"}>
            {options.map(option =>
              option.type === "external" ? (
                <Box>
                  <ExternalLink
                    key={option.id}
                    href={option.target}
                    target={"_blank"}
                  >
                    <Button plain={true} margin={"xsmall"}>
                      <Box direction={"row"} gap={"small"} align={"center"}>
                        <Text margin={"none"} size={"small"}>
                          {option.label}
                        </Text>
                        <ExternalLinkIcon size={16} />
                      </Box>
                    </Button>
                  </ExternalLink>
                </Box>
              ) : (
                <Link key={option.id} to={option.target}>
                  <Button plain={true} margin={"xsmall"}>
                    <Box>
                      <Text margin={"none"} size={"small"}>
                        {" "}
                        {option.label}{" "}
                      </Text>
                      <Text size={"xsmall"}>{option.description}</Text>
                    </Box>
                  </Button>
                </Link>
              )
            )}
          </Box>
        </Drop>
      )}
    </Box>
  )
}

export default DropDownMenu
