import React from "react"
import { ResponsiveContext, Box, Text } from "grommet"
import { Link, PlainLink } from "./TattleLinks"

const Logo = () => (
  <Box
    height="32px"
    width="32px"
    round="full"
    background="url(//tattle-media.s3.amazonaws.com/monogram-light.svg)"
  />
)

/**
 * @author denny
 * @function Logo
 **/

const AppLogo = ({ name, target }) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box pad={"small"} direction={"row"} align={"center"} gap={"small"}>
          {size !== "small" && (
            <Link to={"/"}>
              <Logo />
            </Link>
          )}
          <PlainLink to={target}>
            {
              <Text size={"large"} color={"brand"} margin={"none"}>
                {" "}
                {name}{" "}
              </Text>
            }
          </PlainLink>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default AppLogo
