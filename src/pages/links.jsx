import { Box, Heading, Text, Button, Paragraph, Anchor } from "grommet"
import React from "react"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"

const Links = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading level={2}> Current Initiatives </Heading>
          <Heading level={3}> Participate </Heading>
          <Box
            pad={"medium"}
            round={"small"}
            border={{ color: "visuals-4" }}
            gap={"medium"}
          >
            <Box gap={"small"}>
              <Text size={"small"}>
                We are conducting Livestreamed Playtests for Viral Spiral with the following groups:
              </Text>
              <Text size={"small"}>
                {" "}
                1. Instructors who conduct media literacy workshops in India.{" "}
              </Text>
              <Text size={"small"}>
                {" "}
                2. Gamers of all stripes - board games, mobile games, casual games, RPGs etc
              </Text>
            </Box>

            <Anchor
              size={"small"}
              href={"https://forms.gle/2cxjpyVBi7TuKtaz9"}
            >{`🗓️ Sign up for Playtests`}</Anchor>
          </Box>

          <Heading level={3}> Recent Links </Heading>
          <Box
            pad={"medium"}
            round={"small"}
            border={{ color: "visuals-2" }}
            gap={"medium"}
          >
            <Box gap={"small"}>
              <Text size={"small"}>
                1.
                <Anchor
                  href={
                    "https://tattle.co.in/blog/hot-take-on-open-source-AI/"
                  }
                  target={"_blank"}
                >
                  A hot take on Open Source AI
                </Anchor>{" "}
              </Text>
              <Text size={"small"}>
                2.{" "}
                <Anchor
                  href={"https://tattle.co.in/blog/2025-04-30-community-notes/"}
                  target={"_blank"}
                >
                  Exploratory Analysis of Fact Checks and URLS in Community Notes on X
                </Anchor>{" "}
                
              </Text>
              <Text size={"small"}>
                3. Add Indian slurs to your Instagram 'hidden words' by using
                <Anchor
                  href={"https://uli.tattle.co.in/hidden-words-for-instagram/"}
                  target={"_blank"}
                >
                  
                </Anchor>
              </Text>

             
            </Box>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Links
