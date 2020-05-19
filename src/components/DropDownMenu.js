import React, { useState, useEffect, useRef } from "react"
import { Box, Drop, Button, Heading } from "grommet"
import { ChevronDown } from "react-feather"
import { PlainLink as Link } from "../components/atomic/TattleLinks"
/**
 * @author
 * @function MoleculeViewMetadataFromOriginalService
 **/

const DropDownMenu = ({ options }) => {
  const [fetching, setFetching] = useState(false)
  const [showToolTip, setShowToolTip] = useState(false)

  const iconRef = useRef()

  useEffect(() => {
    setFetching(true)
  })

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
        <Box direction={"row"} gap={"small"} align={"center"}>
          <Heading margin={"none"} level={4}>
            Products
          </Heading>
          <ChevronDown size={24} />
        </Box>
      </Button>
      {showToolTip && (
        <Drop
          target={iconRef.current}
          align={{ top: "bottom" }}
          onClickOutside={onHideToolTip}
          onEsc={onHideToolTip}
          margin={{ top: "small", right: "small" }}
        >
          <Box pad={"small"} direction={"column"}>
            {options.map(option => (
              <Link key={option.id} to={option.target}>
                <Button plain={true}>
                  <Heading margin={"none"} level={3} pad={"large"}>
                    {" "}
                    {option.label}{" "}
                  </Heading>
                </Button>
              </Link>
            ))}
          </Box>
        </Drop>
      )}
    </Box>
  )
}

export default DropDownMenu
