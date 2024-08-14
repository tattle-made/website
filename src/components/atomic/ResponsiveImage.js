import React from "react"
import { Box, Text, ResponsiveContext, Image } from "grommet"
// import Img from "gatsby-image"
import { GatsbyImage,getImage, getSrc, StaticImage } from "gatsby-plugin-image"
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
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
        narrow_image: file(relativePath: { eq: "landing-page-narrow.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    `
  );

  return (
    <>
      {size === "small" ? (
        <Box width={"100%"} alignSelf={"start"} height={"small"}>
          <Image fit="contain" src={getSrc(narrow_image)} />
          {/* <GatsbyImage objectFit="contain" image={getImage(narrow_image)}/> */}
          {/* <StaticImage objectFit="contain" src={getSrc(narrow_image)}/> */}
        </Box>
      ) : (
        <Box width={"40%"} style={{ boxShadow: "none" }}>
          <Image
            alignSelf={"start"}
            fit="contain"
            fill={true}
            src={getSrc(wide_image)}
          />
          {/* <GatsbyImage objectFit="contain" imgStyle={{fill:true,alignSelf:"start"}} image={getImage(wide_image)} /> */}
          {/* <StaticImage objectFit="contain" imgStyle={{fill:true,alignSelf:"start"}} alt="uo"  src={"./testImg.jpg"} /> */}
          {/* getImage(wide_image) is same as  wide_image.childImageSharp.gatsbyImageData*/}
        </Box>
      )}
    </>
  )
}
