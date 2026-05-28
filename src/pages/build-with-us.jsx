import React from "react"
import { Box, Heading, Text, Anchor } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import NewsletterSubscribeModal from "../components/atomic/NewsletterSubscribeModal"
import TwoColumnLayout from "../components/atomic/layout/TwoColumnLayout"
import RadarChart from "../components/atomic/RadarChart"
import { SkillChips } from "../components/atomic/Chip"
import { Link, PlainLink } from "../components/atomic/TattleLinks"

const radarOptions = [
  { label: "UX Design", value: 0.8 },
  { label: "Software Development", value: 1.0 },
  { label: "Community Management", value: 0.4 },
  { label: "Research", value: 0.4 },
  { label: "Marketing", value: 0.2 },
]

const Links = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading level={2}>Build with us</Heading>
          <Text size="small">
            The Tattle team comprises of members with varied interests and expertise. 
          </Text>
          <Box margin={{top: "medium", bottom: "medium"}}>
            <SkillChips
            skills={[
                "Software Development",
                "Decentralized Infrastructures",
                "Open Protocols",
                "Qualitative Research",
                "Quantitative Research",
                "Journalism",
                "Law",
                "Public Policy",
                "Community Management",
                "Open Source Movement",
                "Open Data Practices",
                "DevOps",
                "Linux Server Administration",
                "Infrastructure Security",
                "Language Translation",
                "User Research",
                "UX Design",                
            ]}
            />
          </Box>
          <Text size="small">
            We are a <PlainLink to="/values">curious</PlainLink> by nature and many open ended conversations with people and groups have led to very collaborative interdisciplinary projects at Tattle.  
          </Text>

        <Heading level={3} >
            Annotation Software for Archives at NCBS
        </Heading>

          <Box>     
            <TwoColumnLayout 
                left={
                    <RadarChart options={
                        [
                            { label: "UX Design", value: 0.2 },
                            { label: "Software Development", value: 0.9 },
                            { label: "Research", value: 0.1 },
                            { label: "Project Management", value: 0.2 },
                        ]
                    } />
                }
                right={
                    <Box direction="column" gap="small">
                        <Text size="small">
                        Annomilli is a new archival annotation platform that helps archivists import, annotate and export EAD-based collections while preserving open standards and interoperability.
                        </Text>
                    </Box>
                }
            />
          </Box>


          <Heading level={3} >
            Software for Psychologists
          </Heading>

          <Box>     
            <TwoColumnLayout 
                left={
                    <RadarChart options={
                        [
                            { label: "UX Design", value: 0.3 },
                            { label: "Software Development", value: 1.0 },
                            { label: "Data Cleaning", value: 0.3 },
                            { label: "Project Management", value: 0.2 },
                            { label: "Grant Writing", value: 0.4 },
                        ]
                    } />
                }
                right={
                    <Box direction="column" gap="small">
                        <Text size="small">
                        Monk Prayogshala designed a study to understand how monetary and vanity incentives affect how people share content on social media. We helped build the software and data pipeline to run this study that took place online with ~1000 participants. 
                        </Text>
                    </Box>
                }
            />
          </Box>


          <Heading level={3} >
            Investigative Article with Boom Live
          </Heading>

          <Box>     
            <TwoColumnLayout 
                left={
                    <RadarChart options={
                        [
                            { label: "OSINT", value: 0.8 },
                            { label: "Policy Research", value: 1.0 },
                            { label: "Security", value: 0.4 },
                            { label: "Visual Design", value: 0.4 },
                        ]
                    } />
                }
                right={
                    <Box direction="column" gap="small">
                        <Text size="small">
                        Nudify app Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla nulla mauris. Suspendisse sed aliquam ante. Fusce sollicitudin efficitur velit ut maximus. Nunc interdum vestibulum metus, ac dignissim erat efficitur sed. Sed non lacus diam. Aenean pharetra vulputate turpis. 
                        </Text>
                    </Box>
                }
            />
          </Box>


          <Box background={"visuals-1"} pad="medium" margin={{top: "medium"}} round="medium">
            <span>
              Would you like to explore ways to collaborate on something? 
              <NewsletterSubscribeModal label="Email us" />
            </span>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Links
