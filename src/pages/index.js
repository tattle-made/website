import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Grid,
  Box,
  Heading,
  Text,
  ResponsiveContext,
  Paragraph,
  Anchor,
  Button,
} from "grommet"
import DefaultLayout from "../components/default-layout"
import { ResponsiveImage } from "../components/atomic/ResponsiveImage"
import {
  PlainLink,
  Link,
  ExternalLink,
  PlainHeavyLink,
  SmartPlainLink,
} from "../components/atomic/TattleLinks"
import MailchimpSubscribeForm from "../components/atomic/MailchimpSubscribeForm"
import CaseStudyPreview from "./v2/case-study-preview"
import Footer from "./v2/footer"
import WeBuildFor from "./v2/we-build-for"

import {
  SectionLabels,
  LandingPageHeading,
  LandingPageSubHeading,
  LandingPageLink,
  LandingPageParagraph,
} from "../components/atomic/core-style"
import NarrowSection from "../components/atomic/layout/narrow-section"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import styled from "styled-components"
import { projects } from "../config/projects"

const { recent } = projects

const ScrollContainer = styled.div`
  overflow: scroll;
  overflow-y: hidden;
  position: relative;
  padding-bottom: 0.8em;
`

/**
 * @author
 * @function Index
 **/

const Index = props => {
  return (
    <DefaultLayout>
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction={"column"} align={"center"} flex={"grow"}>
            <Box background={"brand"} fill={true} height={{ min: "90vh" }}>
              <NarrowContentWrapper justify={"center"}>
                <NarrowSection>
                  <Box direction={"row-responsive"}>
                    <ResponsiveImage />
                    {size !== "small" && <Box width={"8em"} />}
                    {size === "small" && <Box height={"3.2em"} />}
                    <Box flex={true} direction={"column"} overflow={"hidden"}>
                      <LandingPageHeading>
                        We build &nbsp;
                        <PlainHeavyLink to={"/products"}>
                          tools
                        </PlainHeavyLink>{" "}
                        and &nbsp;
                        <PlainHeavyLink to={"/datasets"}>
                          datasets
                        </PlainHeavyLink>{" "}
                        to understand and respond to misinformation in India.
                      </LandingPageHeading>
                      <Box height={"xxsmall"} />
                      <Box direction={"column"} gap={"small"}>
                        <LandingPageSubHeading>
                          We are Tattle - a community of technologists,
                          researchers, journalists and artists working towards a
                          healthier online information ecosystem in India.
                        </LandingPageSubHeading>
                      </Box>
                    </Box>
                  </Box>
                </NarrowSection>
              </NarrowContentWrapper>
            </Box>

            <NarrowContentWrapper>
              <NarrowSection>
                <RecentProjectSection size={size} />
              </NarrowSection>
            </NarrowContentWrapper>

            <Box
              background="#514E80"
              fill={"horizontal"}
              align="center"
              flex={"grow"}
            >
              <NarrowContentWrapper>
                <NarrowSection>
                  <MailchimpSubscribeForm />
                </NarrowSection>
              </NarrowContentWrapper>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </DefaultLayout>
  )
}

const Project = ({ project }) => {
  return (
    <Box
      gap={"xsmall"}
      width={{ min: "medium", max: "medium" }}
      focusIndicator={false}
      onClick={() => {}}
      pad={{ top: "small", bottom: "small" }}
    >
      <SmartPlainLink linktype={project.link.type} target={project.link.url}>
        <Heading level={4} margin={{ bottom: "4.578px", top: "7.324px" }}>
          {project.title}
        </Heading>
      </SmartPlainLink>
      <Paragraph size={"small"} margin={{ top: "none" }}>
        {project.description}
      </Paragraph>
      <Box flex={"grow"} />
      {project.supporter ? (
        <Box gap={"xsmall"} direction={"row"} align={"center"}>
          <Text size="xsmall">supported by</Text>
          <Anchor
            weight={400}
            label={project.supporter.name}
            href={project.supporter.url}
            target={"_blank"}
          />
        </Box>
      ) : null}
    </Box>
  )
}

const RecentProjectSection = ({ size }) => {
  const { cover_ogbv, cover_viral_spiral } = useStaticQuery(graphql`
    query {
      cover_ogbv: file(relativePath: { eq: "cover-project-uli.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      cover_viral_spiral: file(
        relativePath: { eq: "cover-project-viral-spiral.png" }
      ) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  return (
    <Box>
      <Box gap={"small"}>
        <Text
          size={"small"}
          weight={"700"}
          margin={{ bottom: "small", top: "none" }}
        >
          Current Projects
        </Text>
      </Box>
      <Box>
        <ResponsiveLayoutDatasets size={size}>
          <CaseStudyPreview
            previewImage={cover_ogbv.childImageSharp.fluid.src}
            title={"Online Gender Based Violence Mitigation"}
            description={
              "Empowering users to respond to OGBV via localized content moderation"
            }
            url={"/products/ogbv"}
            publicationDate={"13-11-2020"}
          />
          <CaseStudyPreview
            previewImage={cover_viral_spiral.childImageSharp.fluid.src}
            title={"Viral Spiral"}
            description={
              "An adaptive digital card game about identity, biases and affinity aimed to increase media literacy."
            }
            url={"/products/viral-spiral"}
            publicationDate={"13-11-2020"}
          />
        </ResponsiveLayoutDatasets>
      </Box>

      <Box height="1.8em"></Box>

      <Box gap={"large"}>
        <PlainLink to={"/products/github-indices"}>
          <Box>
            <Heading level={3} margin={"none"} fill>
              Developing Standardized Metrics for Github
            </Heading>
            <Paragraph size={"medium"} fill margin={"none"}>
              This project tries to understand how data from GitHub platform
              usage can contribute to research in international development,
              public policy, and economics.
            </Paragraph>
          </Box>
        </PlainLink>

        <PlainLink to={"/products/gftw"}>
          <Box>
            <Heading level={3} margin={"none"} fill>
              Using Web Monetization for Incentivizing Sharing of ‘Good’ Content
            </Heading>
            <Paragraph size={"medium"} fill margin={"none"}>
              This joint project with Monk Prayogshala aims to understand the
              possibility and effectiveness of web based monetization to promote
              better content sharing behavior.
            </Paragraph>
          </Box>
        </PlainLink>

        <PlainLink to={"/products/kosh"}>
          <Box>
            <Heading level={3} margin={"none"}>
              Kosh - Searchable Archive of Social Media posts
            </Heading>
            <Paragraph size={"medium"} fill margin={"none"}>
              Kosh is Tattle's foundational software component that enables
              archiving and searching of multimodal and multilingual content. It
              facilitates analysis and discovery of trends and patterns.
            </Paragraph>
          </Box>
        </PlainLink>
      </Box>
    </Box>
  )
}

const ResponsiveLayoutDatasets = ({ size, children }) => {
  return size !== "small" ? (
    <Grid
      columns={{
        count: 2,
        size: "auto",
      }}
      gap="medium"
    >
      {children}
    </Grid>
  ) : (
    <Grid
      columns={{
        count: 1,
        size: "auto",
      }}
      gap="small"
    >
      {children}
    </Grid>
  )
}

const ResponsiveLayoutTest = ({ size, children }) => {
  return size !== "small" ? (
    <Grid
      columns={{
        count: 3,
        size: "auto",
      }}
      gap="medium"
    >
      {children}
    </Grid>
  ) : (
    <Grid
      columns={{
        count: 1,
        size: "auto",
      }}
      gap="small"
    >
      {children}
    </Grid>
  )
}

export default Index
