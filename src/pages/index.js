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

            {/*<NarrowSection>
                <WeBuildFor />
              </NarrowSection>*/}

            <NarrowContentWrapper>
              <NarrowSection>
                <CaseStudySection size={size} />
              </NarrowSection>
            </NarrowContentWrapper>

            <NarrowContentWrapper>
              <NarrowSection>
                <RecentProjectSection />
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
      <Heading level={4} margin={{ bottom: "4.578px", top: "7.324px" }}>
        {project.title}
      </Heading>
      <Paragraph size={"small"} margin={{ top: "none" }}>
        {project.description}
      </Paragraph>
      <Box flex={"grow"} />
      {project.supporter ? (
        <Box gap={"xsmall"} direction={"row"} align={"center"}>
          <Text size="xsmall">supported by</Text>
          <Anchor weight={400} label={project.supporter.name} />
        </Box>
      ) : null}
    </Box>
  )
}

const RecentProjectSection = () => {
  return (
    <Box>
      <Box direction={"row"} align={"center"} gap={"small"}>
        <Heading level={3} margin={{ bottom: "small", top: "none" }}>
          Recent Projects
        </Heading>
      </Box>
      <ScrollContainer>
        <Box direction={"row"} gap={"xsmall"} height={"fit-content"}>
          {recent.map((project, ix) => (
            <Project key={ix} project={project} />
          ))}
        </Box>
      </ScrollContainer>
    </Box>
  )
}

const CaseStudySection = ({ size, bgColor, contentWidth }) => {
  const { cover_paper, cover_article, cover_chart } = useStaticQuery(graphql`
    query {
      cover_paper: file(relativePath: { eq: "case-study-paper-cover.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      cover_article: file(
        relativePath: { eq: "case-study-article-cover.png" }
      ) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      cover_chart: file(relativePath: { eq: "case-study-chart-cover.png" }) {
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
      <LandingPageParagraph>
        Tattle's core infrastructure consists of :
      </LandingPageParagraph>
      <Box height={"0.391em"}></Box>

      <ResponsiveLayoutTest size={size}>
        <Box>
          <Text size={"large"} color={"brand"}>
            1.
          </Text>
          <Paragraph size={"medium"}>
            {" "}
            Scrapers for Indian social media
          </Paragraph>
        </Box>
        <Box>
          <Text size={"large"} color={"brand"}>
            2.
          </Text>
          <Paragraph size={"medium"}>
            {" "}
            Archive of fact-checks and content circulating on Indian social
            media.
          </Paragraph>
        </Box>
        <Box>
          <Text size={"large"} color={"brand"}>
            3.
          </Text>
          <Paragraph size={"medium"}>
            {" "}
            Flexible and scalable APIs for multi-lingual and multi-modal search
          </Paragraph>
        </Box>
      </ResponsiveLayoutTest>
      <LandingPageParagraph></LandingPageParagraph>
      <Box height={"xxsmall"}></Box>
      <Box>
        <SectionLabels>
          This infrastructure enables a variety of research, tools and solutions
          to be developed based on it.
        </SectionLabels>
      </Box>
      <Text></Text>
      <ResponsiveLayoutDatasets size={size}>
        <CaseStudyPreview
          previewImage={cover_article.childImageSharp.fluid.src}
          title={"CSCW Paper by Microsoft Research"}
          description={
            "A mixed-methods study that highlights affective aspects of Covid-19 misinformation "
          }
          url={"https://programs.sigchi.org/cscw/2020/program/content/41594"}
          publicationDate={"13-11-2020"}
        />
        <CaseStudyPreview
          previewImage={cover_paper.childImageSharp.fluid.src}
          title={"BBC Story"}
          description={
            "A data story on evolving themes in fact-checks between January-June 2020"
          }
          url={"https://www.bbc.com/news/world-asia-india-53165436"}
          publicationDate={"13-11-2020"}
        />

        <CaseStudyPreview
          previewImage={cover_chart.childImageSharp.fluid.src}
          title={"Dashboards"}
          description={
            "Explore weekly trends in misinformation through an interactive visualisation"
          }
          url={"https://services.tattle.co.in/khoj/dashboard"}
          publicationDate={"13-11-2020"}
        />
      </ResponsiveLayoutDatasets>
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
        count: 2,
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
