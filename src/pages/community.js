import React, { useContext } from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import ResponsiveContributorGrid from "../components/atomic/ResponsiveContributorGrid"
import { ResponsiveContext, Grid, Box, Heading, Text, Paragraph } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"

const staff = [
  {
    name: "Denny George",
    role: "Interaction design and Tech Lead",
  },
  {
    name: "Swair Shah",
    role: "ML Engineer",
  },
  {
    name: "Saakshita Prabhakar",
    role: "UX / Visual Design Contributor",
  },
  {
    name: "Tarunima Prabhakar",
    role: "Research and Project Lead",
  },
  
]

const advisors = [
  {
    name: "Anushree Abhyankar",
    role: "Full Stack Contributor",
  },
  {
    name: "Anushree Gupta",
    role: "Researcher",
  },
  {
    name: "Eishita Chhetri",
    role: "Illustrator",
  },
  {
    name: "Harman Singh",
    role: "Mobile Engineer",
  },
  {
    name: "Keshav Joshi",
    role: "Data Scientist",
  },
  {
    name: "Kruttika Nadig",
    role: "Data Scientist",
  },
  {
    name: "Mohit Malik",
    role: "Full Stack Intern",
  },
  {
    name: "Nilomee Jesrani",
    role: "UX / Visual Design Contributor",
  },
  {
    name: "Onish Garg",
    role: "Full Stack Developer",
  },
  {
    name: "Rishabh Jain",
    role: "Design Research",
  },

  {
    name: "Saumya Gupta",
    role: "Journalist/Researcher",
  },
  {
    name: "Sudeep Duggal",
    role: "Data Science Contributor",
  },
  {
    name: "Sunandan Chakraborty",
    role:
      "Past Advisor, (Assistant Professor, Information School, Indiana University)",
  },
  {
    name: "Suraj Sharma",
    role: "Full Stack Intern",
  },
 
  {
    name: "Venkatesh Thapan",
    role: "Backend Developer",
  },
  {
    name: "Yohan Mathew",
    role: "DevOps and Automation",
  },
]

const Community = () => (
  <DefaultLayout>
    <NarrowContentWrapper>
      <NarrowSection>
        <Heading level={2}> Community </Heading>
        <Heading level={3}>Current Contributors and Staff</Heading>
        <ResponsiveGrid>
          {staff.map((staffMember, index) => (
            <CommunityMemberCard
              key={index}
              name={staffMember.name}
              role={staffMember.role}
            />
          ))}
        </ResponsiveGrid>

        <Heading level={3}> Past Contributors and Staff </Heading>
        <ResponsiveGrid>
          {advisors.map((advisor, index) => (
            <CommunityMemberCard
              key={index}
              name={advisor.name}
              role={advisor.role}
            />
          ))}
        </ResponsiveGrid>

        <Text size={"small"}>
          <i>
            Several other people have volunteered time and skills such as
            writing, coding, and designing.{" "}
          </i>
        </Text>
      </NarrowSection>
    </NarrowContentWrapper>
  </DefaultLayout>
)

const ResponsiveGrid = ({ children }) => {
  const size = useContext(ResponsiveContext)
  return size === "small" ? (
    <Box direction={"column"} gap={"small"}>
      {children}
    </Box>
  ) : size === "medium" ? (
    <Grid columns={["1/2", "1/2"]} responsive={true} fill={"horizontal"}>
      {children}
    </Grid>
  ) : (
    <Grid columns={["1/3", "1/3", "1/3"]} responsive={true} fill={"horizontal"}>
      {children}
    </Grid>
  )
}

const CommunityMemberCard = ({ name, role }) => (
  <Box width={"medium"} direction={"column"} pad={{ right: "small" }}>
    <Heading level={3} margin={"none"} weight={500} color={"brand"}>
      {name}
    </Heading>
    <Paragraph size={"small"}>{role}</Paragraph>
    <Box height={"xxsmall"}></Box>
  </Box>
)

export default Community
