import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, Text, Image, Paragraph, Anchor } from "grommet"
import DefaultLayout from "../../../components/default-layout"
import NarrowContentWrapper from "../../../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../../../components/atomic/layout/narrow-section"
import { ExternalLink, PlainLink } from "../../../components/atomic/TattleLinks"

const ViralSpiral = () => {
  const { product_cover, workshop_images } = useStaticQuery(graphql`
    query {
      product_cover: file(
        relativePath: { eq: "product-viral-spiral-cover.png" }
      ) {
        childImageSharp {
          original {
            src
          }
          fluid {
            src
          }
        }
      }
      workshop_images: file(
        relativePath: { eq: "product-viral-spiral-workshops.png" }
      ) {
        childImageSharp {
          original {
            src
          }
          fluid {
            src
          }
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
          <Image
            src={product_cover.childImageSharp.original.src}
            fit="contain"
            fill={true}
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
        margin={{ top: "medium" }}
      >
        <Box>
          <Image
            src={workshop_images.childImageSharp.original.src}
            fit="contain"
            fill={true}
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
        <NarrowSection>
          <Heading level={2}>Recent Blogs</Heading>
          <Paragraph fill margin={"none"}>
            <PlainLink to="/blog/the-games-we-play-online">
              <Text weight={800} size={"small"}>
                The Games We Play Online
              </Text>
            </PlainLink>
            <Text size={"small"}>, Adhiraj Singh</Text>
          </Paragraph>
          <Paragraph fill margin={"none"}>
            <PlainLink to="/blog/viral-spiral-reading-list">
              <Text weight={800} size={"small"}>
                Viral Spiral Reading List
              </Text>
            </PlainLink>
            <Text size={"small"}>, Denny George and Tarunima Prabhakar</Text>
          </Paragraph>
          <Paragraph fill margin={"none"}>
            <PlainLink to="/blog/how-to-set-a-playtest">
              <Text weight={800} size={"small"}>
                How to setup a play-test session
              </Text>
            </PlainLink>
            <Text size={"small"}>, Krys Martis</Text>
          </Paragraph>
          <Paragraph fill margin={"none"}>
            <PlainLink to="/blog/understanding-viral-spiral-project-page">
              <Text weight={800} size={"small"}>
                Understanding our Project Tracker
              </Text>
            </PlainLink>
            <Text size={"small"}>, Denny George</Text>
          </Paragraph>
        </NarrowSection>
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
            <ExternalLink href="https://www.youtube.com/watch?v=REopj8A9Y7o">
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
