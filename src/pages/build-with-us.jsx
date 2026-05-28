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

          <Box margin={{ top: "large" }}>     
            <Box direction="column" gap="small">
                <RadarChart options={radarOptions} />
                </Box>
            <Box direction="column" gap="small">
                <Text size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Curabitur pretium tincidunt
                lacus. Nulla gravida orci a odio. Nullam varius, turpis
                molestie pretium placerat, arcu purus aliquam sem, et tempus
                nibh enim vel purus. Aliquam commodo facilisis lectus, vitae
                vulputate dui fringilla vel.
                </Text>
            </Box>
          </Box>


          <Heading level={3} >
            Software for Psychologists
          </Heading>

          <Box margin={{ top: "large" }}>     
            <Box direction="column" gap="small">
                <RadarChart options={radarOptions} />
                </Box>
            <Box direction="column" gap="small">                
                <Text size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Curabitur pretium tincidunt
                lacus. Nulla gravida orci a odio. Nullam varius, turpis
                molestie pretium placerat, arcu purus aliquam sem, et tempus
                nibh enim vel purus. Aliquam commodo facilisis lectus, vitae
                vulputate dui fringilla vel.
                </Text>
            </Box>
          </Box>

          <Heading level={3} >
            Investigative Article with Boom Live
          </Heading>

          <Box margin={{ top: "large" }}>     
            <Box direction="column" gap="small">
                <RadarChart options={radarOptions} />
                </Box>
            <Box direction="column" gap="small"> 
                <Text size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Curabitur pretium tincidunt
                lacus. Nulla gravida orci a odio. Nullam varius, turpis
                molestie pretium placerat, arcu purus aliquam sem, et tempus
                nibh enim vel purus. Aliquam commodo facilisis lectus, vitae
                vulputate dui fringilla vel.
                </Text>
            </Box>
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
