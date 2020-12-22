import React, { useState, useEffect } from "react"
import {
  Grid,
  Box,
  Heading,
  Text,
  Paragraph,
  ResponsiveContext,
  Image,
  Layer,
  Button,
} from "grommet"
import { graphql, useStaticQuery } from "gatsby"

/**
 * @author
 * @function WeBuildFor
 **/

const WeBuildFor = () => {
  const [show, setShow] = React.useState()
  const { stakeholder_simple, stakeholder_map } = useStaticQuery(
    graphql`
      query {
        stakeholder_simple: file(
          relativePath: { eq: "stakeholder-simple.png" }
        ) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        stakeholder_map: file(relativePath: { eq: "stakeholder-map.png" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `
  )

  return (
    <Box>
      <Box direction={"row"} wrap={true}>
        <Box gridArea={"text"}>
          <Heading level={2} margin={{ top: "none" }}>
            We Build For
          </Heading>
        </Box>
        <Box
          gridArea={"image"}
          onClick={() => setShow(true)}
          flex={"grow"}
          focusIndicator={"none"}
          style={{ cursor: "zoom-in" }}
        >
          <Image
            fit="contain"
            src={stakeholder_simple.childImageSharp.fluid.src}
          />
        </Box>
      </Box>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Box fill background={"brand"}>
            <Button label="close" onClick={() => setShow(false)} />
            <Image
              fit="contain"
              src={stakeholder_map.childImageSharp.fluid.src}
            />
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default WeBuildFor
