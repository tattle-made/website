import React from "react"
import {
  Box,
  Heading,
  Image,
  Layer,
  Button,
} from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

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
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
        }
        stakeholder_map: file(relativePath: { eq: "stakeholder-map.png" }) {
          childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
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
          <GatsbyImage
            alt="img"
            objectFit="contain"
            image={getImage(stakeholder_simple)}
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
            <GatsbyImage
              alt="img"
              objectFit="contain"
              image={getImage(stakeholder_map)}
            />
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default WeBuildFor
