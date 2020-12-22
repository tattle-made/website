import React, { useContext } from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import ResponsiveContributorGrid from "../components/atomic/ResponsiveContributorGrid"
import { ResponsiveContext, Grid, Box, Heading, Text } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"

const staff = [
  {
    name: "Denny George",
    role: "Interaction design and Tech Lead",
  },
  {
    name: "Tarunima Prabhakar",
    role: "Research and Project Lead",
  },
  {
    name: "Kruttika Nadig",
    role: "Data Scientist",
  },
]

const advisors = [
  {
    name: "Swair Shah",
    role: "ML Engineer",
  },
  {
    name: "Sunandan Chakraborty",
    role: "Assistant Professor, Information School, Indiana University",
  },
  {
    name: "Nilomee Jesrani",
    role: "UX / Visual Design",
  },
  {
    name: "Saakshita Prabhakar",
    role: "UX / Visual Design",
  },
  {
    name: "Eishita Chhetri",
    role: "Illustrator",
  },
  {
    name: "Yohan Mathew",
    role: "DevOps and Automation",
  },
  {
    name: "Harman Singh",
    role: "Mobile Engineer",
  },
  {
    name: "Sudeep Duggal",
    role: "FOSS Contributor",
  },
  {
    name: "Rishabh Jain",
    role: "Design Research",
  },
]

const Community = () => (
  <DefaultLayout>
    <NarrowSection>
      <Heading level={2}> Community </Heading>
      <Heading level={3}>Full Time Staff</Heading>
      <ResponsiveGrid>
        {staff.map((staffMember, index) => (
          <CommunityMemberCard
            key={index}
            name={staffMember.name}
            role={staffMember.role}
          />
        ))}
      </ResponsiveGrid>

      <Heading level={3}>Advisors</Heading>
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
          Several other people have volunteered time and skills such as writing,
          coding, and designing.{" "}
        </i>
      </Text>
    </NarrowSection>
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
    <Text size={"medium"} weight={500} color={"brand"}>
      {name}
    </Text>
    <Text size={"small"}>{role}</Text>
    <Box height={"xxsmall"}></Box>
  </Box>
)

export default Community
