import React from "react"
import NarrowSection from "../../components/atomic/layout/narrow-section"
import DefaultLayout from "../../components/default-layout"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import { Anchor, Box, Heading, Image, List, Paragraph, Text } from "grommet"

const ogbv = () => (
  <DefaultLayout>
    <NarrowContentWrapper>
      <NarrowSection>
        <Box direction={"column"} wrap={true}>
          <Box width={"xsmall"} pad={{ right: "small" }}>
            <Image src={"/products/Uli Logo-Header-03.png"} />
          </Box>
          <Box margin={{ top: "small" }}>
            <Text size="small">
              Uli is a project that aims to reduce the effects of Online
              Gender-Based Violence, and provides tools for collective response.
            </Text>
          </Box>
        </Box>
        <Box direction={"row-responsive"} wrap={true}>
          <Box width={"medium"}>
            <Image src="/products/HeroIllustration.gif"></Image>
          </Box>
          <Box width={"2em"}></Box>
          <Box justify="center">
            <Paragraph>
              To download Uli, see documentation on how to use it, and read
              blogs and research findings, please go to Uli's website:{" "}
              <Anchor href="https://uli.tattle.co.in/">
                https://uli.tattle.co.in/
              </Anchor>
            </Paragraph>
          </Box>
        </Box>
      </NarrowSection>
      <NarrowSection>
        <Heading level={3}>Supported By</Heading>
        <Box>
          <ul>
            <li>
              <Text size="small">
                Mozilla Foundation's 2023{" "}
                <Anchor href="https://foundation.mozilla.org/en/blog/mozilla-welcomes-2023-data-futures-lab-cohort/">
                  Data Futures Lab Cohort
                </Anchor>
                .
              </Text>
            </li>
            <li>
              <Text size="small">
                GitHub's{" "}
                <Anchor href="https://socialimpact.github.com/tech-for-social-good/dpg-open-source-community-manager-program">
                  DPG Open Source Community Manager program
                </Anchor>
                .
              </Text>
            </li>
            <li>
              <Text size="small">
                The pilot stage was supported by the Digital Society Challenge
                grant provided to the Centre for Internet and Society.
              </Text>
            </li>
          </ul>
        </Box>
      </NarrowSection>
      <NarrowSection>
        <Box gap={"small"}>
          <Heading level={3}>Highlights</Heading>
          <Box
            round={"xsmall"}
            pad={"small"}
            background={"visuals-1"}
            direction="row-responsive"
            wrap={true}
          >
            <Box width={"medium"} height={"small"}>
              <iframe
                width="360em"
                height="360em"
                src="https://www.youtube.com/embed/Zt088nILmDM?list=PLE_y90GftjpYtPrh6SoXxNV_wcOnZjNTD"
                title="A New Thing Under the Sun? Alternative Visions for Tech in the Age of AI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box gap={"small"}>
              <Paragraph margin={"none"}>
                We gave a keynote at the 2023 Symposium of the{" "}
                <b>
                  ARC Centre of Excellence for Automated Decision-Making and
                  Society (ADM+S)
                </b>{" "}
                where we spoke about developing Uli as a Feminist AI project.
              </Paragraph>
            </Box>
          </Box>
          <Box
            round={"xsmall"}
            pad={"small"}
            background={"visuals-2"}
            direction="row-responsive"
            wrap={true}
          >
            <Box width={"medium"} height={"small"}>
              <Image src={"/products/speak.png"} fit="contain" />
            </Box>

            <Box gap={"small"}>
              <Paragraph margin={"none"}>
                DW Akademie featured Uli as a case study.
              </Paragraph>
              <Anchor
                href={
                  "https://akademie.dw.com/en/putting-hate-speech-on-mute-an-indian-project-helps-social-media-users-filter-out-abuse-to-feel-safe-online/a-65636500"
                }
              >
                <Text size={"small"}>Read Report</Text>
              </Anchor>
            </Box>
          </Box>
        </Box>
      </NarrowSection>
      <NarrowSection>
        <Heading level={3}>Relevant Repositories</Heading>
        <List
          primaryKey="name"
          secondaryKey="description"
          data={[
            {
              name: "Uli",
              description: "Code for the Browser Plugin and Uli Website",
              url: "https://github.com/tattle-made/Uli",
            },
          ]}
        >
          {datum => (
            <Box>
              <Paragraph fill size={"small"}>
                <Anchor href={datum.url} target={"_blank"}>
                  <Text>{datum.name}</Text>
                </Anchor>
                <Text>{" " + datum.description}</Text>
              </Paragraph>
            </Box>
          )}
        </List>
      </NarrowSection>
      <NarrowSection>
        <Heading level={3}>Current Team</Heading>
        <Text size="small">
          <b>Anju George</b>: Qualitative Researcher
        </Text>
        <Text size="small">
          <b>Denny George</b>: Engineering Lead
        </Text>
        <Text size="small">
          <b>Siddharth Manohar</b>: Data Governance Researcher
        </Text>
        <Text size="small">
          <b>Sudeep Duggal</b>: Fullstack Engineer
        </Text>
        <Text size="small">
          <b>Tarunima Prabhakar</b>: Project Manager
        </Text>
        <Text size="small">
          <b>Yash Budhwar</b>: Operations and Contracts
        </Text>
        <Text size="small">
          <b>Yohan Mathew</b>: ML DevOps
        </Text>
        <Text size="small" margin={{ top: "small" }}>
          You can read more about the pilot team{" "}
          <Anchor href="https://github.com/tattle-made/Uli/blob/main/uli-website/src/pages/team-2021.mdx">
            here
          </Anchor>
        </Text>
      </NarrowSection>
    </NarrowContentWrapper>
  </DefaultLayout>
)

export default ogbv
