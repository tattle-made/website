import React from "react"
import { Box, Text, ResponsiveContext, Image } from "grommet"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const WeirdBox = styled(Box)`
  display: inline-table;
  align-self: center;
  height: 10em;
`

/**
 * @author
 * @function ResponsiveImage
 **/

export const ResponsiveImage = ({ data, imageName }) => {
  const size = React.useContext(ResponsiveContext)
  const { wide_image, narrow_image } = useStaticQuery(
    graphql`
      query {
        wide_image: file(relativePath: { eq: "landing-page-wide.png" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        narrow_image: file(relativePath: { eq: "landing-page-narrow.png" }) {
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
    <WeirdBox overflow={"auto"} align={"center"}>
      {size === "small" ? (
        <Image src={narrow_image.childImageSharp.fluid.src} />
      ) : (
        <Image src={wide_image.childImageSharp.fluid.src} />
      )}
    </WeirdBox>
  )
}
