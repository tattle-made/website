import React, { Fragment, useContext } from "react"
import { Grid, Box, Heading, Text, Paragraph, ResponsiveContext } from "grommet"
import DefaultLayout from "../../components/default-layout"
import { ResponsiveImage } from "../../components/atomic/ResponsiveImage"
import {
  PlainLink,
  Link,
  ExternalLink,
  PlainHeavyLink,
} from "../../components/atomic/TattleLinks"
import MailchimpSubscribeForm from "../../components/atomic/MailchimpSubscribeForm"
import CaseStudyPreview from "./case-study-preview"
import Footer from "./footer"
import WeBuildFor from "./we-build-for"

import {
  SectionLabels,
  LandingPageHeading,
  LandingPageSubHeading,
  LandingPageLink,
  LandingPageParagraph,
} from "../../components/atomic/core-style"
import NarrowSection from "../../components/atomic/layout/narrow-section"
import styled from "styled-components"

/**
 * @author
 * @function Index
 **/

const Index = props => {
  // const size = useContext(ResponsiveContext)
  // For some reason, this refuses to play nice with Gatsby, so I had to use ResponsiveContext.Consumer

  return (
    <DefaultLayout>
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction={"column"} align={"center"}>
            <Box
              background={"brand"}
              fill={true}
              height={{ min: "90vh" }}
              justify={"center"}
            >
              <NarrowSection>
                <Box direction={"row-responsive"} key={"test"}>
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
                      to understand and respond to (mis)information in India.
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
            </Box>

            <Box fill>
              {/*<NarrowSection>
                <WeBuildFor />
              </NarrowSection>*/}

              <NarrowSection>
                <CaseStudySection size={size} />
              </NarrowSection>

              <Box>
                <Box background="#514E80" align="center">
                  <NarrowSection>
                    <MailchimpSubscribeForm />
                  </NarrowSection>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </DefaultLayout>
  )
}

const CaseStudySection = ({ size, bgColor, contentWidth }) => {
  return (
    <Box width={contentWidth ? contentWidth : "960px"} alignContent={"center"}>
      <LandingPageParagraph>
        Tattle's core infrastructure consists of
        <ul>
          <li>
            {" "}
            A growing archive of fact-checks and content circulating on chat
            apps and social media
          </li>
          <li>
            Flexible and scalable APIs for multi-lingual and multi-modal content
            search
          </li>
        </ul>
        This platform enables a variety of research, tools and solutions to be
        built on top of.
      </LandingPageParagraph>
      <Box height={"xxsmall"} />
      <Box>
        <SectionLabels>Case Studies</SectionLabels>
      </Box>
      <Text></Text>
      <ResponsiveLayoutDatasets size={size}>
        <CaseStudyPreview
          previewImage={
            "https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
          }
          title={"CSCW Paper by Microsoft Research"}
          description={
            "A mixed-methods study that highlights affective aspects of Covid-19 misinformation "
          }
          url={"https://programs.sigchi.org/cscw/2020/program/content/41594"}
          publicationDate={"13-11-2020"}
        />
        <CaseStudyPreview
          previewImage={
            "https://images.unsplash.com/photo-1607049582789-3b2dd51ac95e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          title={"BBC Story"}
          description={
            "A data story on evolving themes in fact-checks between January-June 2020"
          }
          url={"https://www.bbc.com/news/world-asia-india-53165436"}
          publicationDate={"13-11-2020"}
        />
        <CaseStudyPreview
          previewImage={
            "https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          }
          title={"Khoj App"}
          description={
            "Tattle's flagship app that helps mobile users identify misinformation on chat apps."
          }
          url={"http://tattle.co.in/products/khoj"}
          publicationDate={"13-11-2020"}
        />
        <CaseStudyPreview
          previewImage={
            "https://images.unsplash.com/photo-1607049582789-3b2dd51ac95e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
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
        count: 4,
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

export default Index
