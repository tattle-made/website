import React from "react"
import { Anchor, Box, Heading, Image, Paragraph, Text } from "grommet"
import DefaultLayout from "../../components/default-layout"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../../components/atomic/layout/narrow-section"
import { PlainLink } from "../../components/atomic/TattleLinks"
import { graphql, useStaticQuery } from "gatsby"
import { LatestProductBlogsUpdates } from "../../components/LatestProductBlogsUpdates"


const Page = () => {
  const { cover_image } = useStaticQuery(graphql`
    query {
      cover_image: file(relativePath: { eq: "banner_facts.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading level={2}>facts!</Heading>
          <Text size={"small"}>Interactive resources for media literacy</Text>
          <Box>
            <Box
              overflow={"hidden"}
              width={"100%"}
              background={"red"}
              height={"20em"}
            >
              <Image
                src={cover_image.childImageSharp.original.src}
                fit="cover"
                alt="Cover image for facts! interactive resources for media literacy"
              />
            </Box>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>

      <NarrowContentWrapper>
        {/* <NarrowSection>
          <Heading level={2}>Recent Blogs</Heading>
          <Paragraph fill margin={"none"}>
            <PlainLink to="/blog/factshala-project-reading-list">
              <Text weight={800} size={"small"}>
                Factshala Project Reading List
              </Text>
            </PlainLink>
            <Text size={"small"}>, Yash Budhwar</Text>
          </Paragraph>
          <Paragraph fill margin={"none"}>
            <PlainLink to="/blog/media-literacy-in-classrooms-insights-from-instructors">
              <Text weight={800} size={"small"}>
                Media Literacy in Classrooms - Insights from Instructors
              </Text>
            </PlainLink>
            <Text size={"small"}> Denny George</Text>
          </Paragraph>
        </NarrowSection> */}
        <NarrowSection>
        <LatestProductBlogsUpdates projects={["facts","factshala","mlcc"]} />
        </NarrowSection>
      </NarrowContentWrapper>

      <NarrowContentWrapper>
        <NarrowSection>
          <Box direction="baseline" align="center" gap={"small"}>
            <Paragraph>supported by </Paragraph>
            <Anchor href={"https://factshala.com/"} target={"_blank"}>
              <Box width="8em" height={"4em"}>
                <Image fit="contain" src="/factshala-logo.png"></Image>
              </Box>
            </Anchor>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Page
