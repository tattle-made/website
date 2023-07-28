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
            <Box background={"brand"} fill={true} height={{ min: "45vh" }}>
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
                        to understand and respond to inaccurate and harmful
                        content.
                      </LandingPageHeading>
                      <Box height={"xxsmall"} />
                      <Box direction={"column"} gap={"small"}>
                        <LandingPageSubHeading>
                          We are Tattle - a community of technologists,
                          researchers and artists working towards a healthier
                          online information ecosystem in India.
                        </LandingPageSubHeading>
                      </Box>
                    </Box>
                  </Box>
                </NarrowSection>
              </NarrowContentWrapper>
            </Box>

            <Box flex={"grow"}>
              <RecentProjectSection size={size} />
            </Box>

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
  const { cover_ogbv, cover_viral_spiral, cover_kosh } = useStaticQuery(graphql`
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
      cover_kosh: file(relativePath: { eq: "cover-project-kosh.png" }) {
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
      <NarrowContentWrapper>
        <Box width={"100%"} alignSelf={"center"} margin={{ top: "medium" }}>
          <Box gap={"small"} width={"100%"} align={"center"}>
            <Text
              size={"small"}
              weight={"700"}
              margin={{ bottom: "small", top: "none" }}
            >
              Current Projects
            </Text>
          </Box>
        </Box>
      </NarrowContentWrapper>
      <NarrowContentWrapper width={"1280px"}>
        <Box width={"100%"} alignSelf={"center"}>
          <Box>
            <ResponsiveLayoutDatasets size={size}>
              <CaseStudyPreview
                previewImage={cover_ogbv.childImageSharp.fluid.src}
                title={"Uli"}
                description={
                  "Empowering users to respond to Online Gender Based Violence via localized content moderation"
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
              <CaseStudyPreview
                previewImage={cover_kosh.childImageSharp.fluid.src}
                title={"Kosh"}
                description={
                  "Scrape multimodal and multilingual data from social media. Store and Analyze using our tools Kosh and Feluda"
                }
                url={"/products/kosh"}
                publicationDate={"13-11-2020"}
              />
            </ResponsiveLayoutDatasets>
          </Box>
        </Box>
      </NarrowContentWrapper>
      <NarrowContentWrapper>
        <Box width={"100%"} alignSelf={"center"} margin={{ top: "medium" }}>
          <Box gap={"small"} width={"100%"} align={"center"}>
            <Anchor href={"/products"}>
              <Text
                size={"small"}
                weight={"400"}
                margin={{ bottom: "small", top: "none" }}
              >
                See All Projects
              </Text>
            </Anchor>
          </Box>
        </Box>
      </NarrowContentWrapper>

      <Box height="1.8em"></Box>

      <Box height="1.8em"></Box>
    </Box>
  )
}

const ResponsiveLayoutDatasets = ({ size, children }) => {
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
