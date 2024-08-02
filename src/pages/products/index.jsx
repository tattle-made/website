import React from "react";
import DefaultLayout from "../../components/default-layout";
import { Anchor, Box, Grid, Paragraph, Text } from "grommet";
import CaseStudyPreview from "../v2/case-study-preview"
import { graphql, useStaticQuery } from "gatsby";
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper";
import NarrowSection from "../../components/atomic/layout/narrow-section";

// {
//   heading: "",
//   description: "",
//   target: "" 
// }

var other_projects = [
  {
    heading: "Developing Standardized Metrics for Github",
    description: "This project tries to understand how data from GitHub platform usage can contribute to research in international development, public policy, and economics.",
    target: "/products/github-indices"
  },
  {
    heading: "Using Web Monetization for Incentivizing Sharing of ‘Good’ Content",
    description: "This joint project with Monk Prayogshala aims to understand the possibility and effectiveness of web based monetization to promote better content sharing behavior.",
    target: "/products/gftw"
  },
  {
    heading: "Kosh",
    description: "This is the main archive that contains content scraped from all the different sources- the Tattle Jod telegram bot, Fact-checking sites, social media and chat apps.",
    target: "/products/kosh"
  },
  {
    heading: "Jod Bot",
    description: "Jod Bot is a Telegram Bot that lets you push content to Tattle's archive and add tags to it.",
    target: "/products/jod-bot/"
  },
  {
    heading: "Whatsapp Scraper",
    description: "The WhatsApp archiver consolidates chat files exported from different WhatsApp conversations into one database. The scraper relies on WhatsApp's export chat feature which allows 40,000 messages to be exported without media and 10,000 to be exported with media.",
    target: "/products/whatsapp-archiver"
  },
  {
    heading: "Khoj",
    description: "Khoj tells you if an image has appeared in a fact-checking article. Khoj indexes and searches through data scraped from IFCN certified fact checking sites.",
    target: "/products/khoj"
  },

]

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

const ProductIndex = () => {
  const { cover_ogbv, icon_ogbv, cover_viral_spiral, icon_viral_spiral, cover_dau, icon_dau } = useStaticQuery(graphql`
        query {
          cover_ogbv: file(relativePath: { eq: "cover-uli.png" }) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          icon_ogbv: file(relativePath: { eq: "cover-project-uli.png" }) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          icon_viral_spiral: file(
            relativePath: { eq: "cover-project-viral-spiral.png" }
          ) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          cover_viral_spiral: file(relativePath: { eq: "cover_viral_spiral.png" }) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          icon_dau: file(relativePath: { eq: "cover-project-dau.png" }) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          cover_dau: file(relativePath: { eq: "cover_dau.png" }) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      `)
  const size = "medium"
  return (
    <DefaultLayout>
      <Box
        width={{ max: "100%", min: "fit-content" }}
        margin={{ left: "auto", right: "auto" }}
      >

        <Box pad="small">

          <NarrowContentWrapper width={"1280px"}>

            <ResponsiveLayoutDatasets size={size}>
              <CaseStudyPreview
                coverImage={cover_ogbv.childImageSharp.fluid.src}
                previewImage={icon_ogbv.childImageSharp.fluid.src}
                title={"Uli"}
                description={
                  "Empowering users to respond to Online Gender Based Violence via localized content moderation"
                }
                url={"/products/ogbv"}
                publicationDate={"13-11-2020"}
                blog_slug={"/blog/tags/project/uli"}
              />
              <CaseStudyPreview
                coverImage={cover_dau.childImageSharp.fluid.src}
                previewImage={icon_dau.childImageSharp.fluid.src}
                title={"Deepfakes Analysis Unit"}
                description={
                  "Collaborative platform for factcheckers and media forensic experts to analyze possible deepfakes"
                }
                url={"/products/dau"}
                publicationDate={"13-11-2020"}
                blog_slug={"/blog/tags/project/kosh"}
              />
              <CaseStudyPreview
                coverImage={cover_viral_spiral.childImageSharp.fluid.src}
                previewImage={icon_viral_spiral.childImageSharp.fluid.src}
                title={"Viral Spiral"}
                description={
                  "An adaptive digital card game about identity, biases and affinity aimed to increase media literacy."
                }
                url={"/products/viral-spiral"}
                publicationDate={"13-11-2020"}
                blog_slug={"/blog/tags/project/viral-spiral"}
              />
            </ResponsiveLayoutDatasets>
          </NarrowContentWrapper>
        </Box>
      </Box>

      <NarrowContentWrapper>
        <Box pad="medium">
          <Text weight={600} size={"medium"}>
            Other Projects
          </Text>
        </Box>
        <Box direction="column" gap="medium">
          {other_projects.map((project) =>
            <Box margin={{ top: "small" }} pad="medium" background={"#ffebcb66"} >
              <Text size="small" weight={700}>{project.heading}</Text>
              <Paragraph fill>{project.description}</Paragraph>
              <Anchor href={project.target}>Read More</Anchor>
            </Box>
          )}

        </Box>


      </NarrowContentWrapper>



    </DefaultLayout>)
}

export default ProductIndex