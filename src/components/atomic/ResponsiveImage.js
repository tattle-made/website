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
    <>
      {size === "small" ? (
        <Box
          width={"100%"}
          alignSelf={"start"}
          margin={{ top: "large" }}
          height={"small"}
        >
          <Image fit="contain" src={narrow_image.childImageSharp.fluid.src} />
        </Box>
      ) : (
        <Box width={"40%"} style={{ boxShadow: "none" }}>
          <Image
            alignSelf={"start"}
            fit="contain"
            fill={true}
            src={wide_image.childImageSharp.fluid.src}
            margin={{ top: "xlarge" }}
          />
        </Box>
      )}
    </>
  )
}
