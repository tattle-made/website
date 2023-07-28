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
                We are conducting User Research with the following groups:
              </Text>
              <Text size={"small"}>
                {" "}
                1. Instructors who conduct media literacy workshops in India.{" "}
              </Text>
              <Text size={"small"}>
                {" "}
                2. Indian content creators who face online abuse.
              </Text>
            </Box>

            <Anchor
              size={"small"}
              href={"mailto:admin@tattle.co.in"}
            >{`✉️ Email us at admin@tattle.co.in`}</Anchor>
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
                    "https://tattle.co.in/blog/media-literacy-in-classrooms-insights-from-instructors"
                  }
                  target={"_blank"}
                >
                  Media Literacy in Classrooms - Insights from Instructors
                </Anchor>{" "}
              </Text>
              <Text size={"small"}>
                2.{" "}
                <Anchor
                  href={"https://www.youtube.com/watch?v=hc0tpStpe3o&t=3s"}
                  target={"_blank"}
                >
                  a 40 minute Playthrough Video
                </Anchor>{" "}
                of Viral Spiral
              </Text>
              <Text size={"small"}>
                3. Add Indian slurs to your Instagram 'hidden words' by using
                <Anchor
                  href={"https://uli.tattle.co.in/hidden-words-for-instagram/"}
                  target={"_blank"}
                >
                  {" "}
                  this web app
                </Anchor>
              </Text>

              <Text size={"small"}>
                4. Our in-progress
                <Anchor
                  href={
                    "https://tattle.co.in/blog/factshala-project-reading-list"
                  }
                  target={"_blank"}
                >
                  {" "}
                  media literacy reading list{" "}
                </Anchor>
                for a forthcoming in-classroom game
              </Text>

              <Text size={"small"}>
                5. Track what we are working on
                <Anchor
                  href={
                    "https://github.com/orgs/tattle-made/projects/37/views/2"
                  }
                  target={"_blank"}
                >
                  {" "}
                  and find ways to contribute
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
