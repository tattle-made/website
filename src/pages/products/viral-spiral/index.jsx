import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, Text, Image, Paragraph, Anchor } from "grommet"
import DefaultLayout from "../../../components/default-layout"
import NarrowContentWrapper from "../../../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../../../components/atomic/layout/narrow-section"
import { ExternalLink, PlainLink } from "../../../components/atomic/TattleLinks"
import { LatestProductBlogsUpdates } from "../../../components/LatestProductBlogsUpdates"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const ViralSpiral = () => {
  const { product_cover, workshop_images } = useStaticQuery(graphql`
    query {
      product_cover: file(
        relativePath: { eq: "product-viral-spiral-cover.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
      workshop_images: file(
        relativePath: { eq: "product-viral-spiral-workshops.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  

  return (
    <DefaultLayout>
      <Box
        height={{ max: "80vh", min: "fit-content" }}
        margin={{ top: "medium" }}
      >
        <Box>
          <GatsbyImage
            image={getImage(product_cover)}
            objectFit="contain"
          />
        </Box>
      </Box>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading>Media Literacy through a Game</Heading>
          <Paragraph fill>
            Viral Spiral is an adaptive digital card game about sharing news on
            the Internet. The game reflects the ways and reasons misinformation
            is shared, letting players experience first hand the temptation to
            share fake news for their own gain and face the consequences of the
            harm it causes around them.
          </Paragraph>
          <Paragraph fill>
            The game world adapts to the decisions the players make, showing not
            only the impact misinformation has on the world, but how much of the
            larger conversation average, everyday people like the players
            control with small tangible actions.
          </Paragraph>
          <Paragraph fill>
            The initial funding for this project came through the Pluralism and
            Civic Exchange grant from the Mercatus Center.
          </Paragraph>
        </NarrowSection>
      </NarrowContentWrapper>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading>Play with Us</Heading>
        </NarrowSection>
      </NarrowContentWrapper>
      <Box
        height={{ max: "80vh", min: "fit-content" }}
      >
        <Box>
          <GatsbyImage
            image={getImage(workshop_images)}
            objectFit="contain"
          />
        </Box>
      </Box>
      <NarrowContentWrapper>
        <NarrowSection>
          <Paragraph fill>
            We host playtests session regularly - virtual and IRL. The audiences
            have been{" "}
            <Anchor
              href="https://twitter.com/EngageMedia/status/1660582322876600321"
              target="_blank"
            >
              researchers
            </Anchor>
            ,{" "}
            <Anchor
              href="https://twitter.com/EngageMedia/status/1660582322876600321"
              target="_blank"
            >
              media students
            </Anchor>{" "}
            and gamers.
          </Paragraph>
        </NarrowSection>
      </NarrowContentWrapper>
      <NarrowContentWrapper>
      <LatestProductBlogsUpdates projects={["viral spiral"]} />
      </NarrowContentWrapper>
      <NarrowContentWrapper>
        <NarrowSection>
          <Box gap={"small"}>
            <ExternalLink href="https://viralspiral.net">
              <Box
                background={"visuals-2"}
                pad={"large"}
                round
                alignContent="center"
              >
                <Text alignSelf="center">Visit Game Website</Text>
              </Box>
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/watch?v=hc0tpStpe3o">
              <Box
                background={"visuals-1"}
                pad={"large"}
                round
                alignContent="center"
              >
                <Text alignSelf="center">Watch Playthrough Video</Text>
              </Box>
            </ExternalLink>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default ViralSpiral
