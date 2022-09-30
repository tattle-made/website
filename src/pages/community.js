import React, { useContext } from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import ResponsiveContributorGrid from "../components/atomic/ResponsiveContributorGrid"
import { ResponsiveContext, Grid, Box, Heading, Text, Paragraph } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"

const staff = [
  {
    name: "Bhargav Dave",
    role: "Data Engineer",
    url: "https://github.com/Bhargav-Dave",
  },
  {
    name: "Denny George",
    role: "Interaction design and Tech Lead",
    url: "https://denntenna.github.io/",
  },
  { name: "J Mahalakshmi", role: "Data Scientist" },
  {
    name: "Swair Shah",
    role: "ML Engineer",
  },
  {
    name: "Sudeep Duggal",
    role: "Contributor :  Data Science, Security, Accessibility",
    url: "https://github.com/duggalsu",
  },
  
  {
    name: "Saakshita Prabhakar",
    role: "UX / Visual Design Contributor",
    url: "https://saakshita.com",
  },
  {
    name: "Tarunima Prabhakar",
    role: "Research and Project Lead",
    url: "https://tarunima.com",
  },
  {
    name: "Yash Budhwar",
    role: "Operations and Strategy Associate",
    url: "http://www.linkedin.com/in/yash-budhwar-495290a5",
  },
  {
    name: "Yohan Mathew",
    role: "DevOps and Automation",
    url: "https://www.linkedin.com/in/ymathew/",
  },
]

const advisors = [
  {
    name: "Anushree Abhyankar",
    role: "Full Stack Contributor",
    url: "https://anushreeabhyankar.com",
  },
  {
    name: "Anushree Gupta",
    role: "Researcher",
    url: "",
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
    url: "http://nilomeejesrani.work/",
  },
  {
    name: "Onish Garg",
    role: "Full Stack Developer",
  },
  {
    name: "Rahul Dev",
    role: "Software Engineer",
    url: "https://github.com/mlkorra",
  },
  {
    name: "Rishabh Jain",
    role: "Design Research",
    url: "https://www.jaineric.com/",
  },

  {
    name: "Saumya Gupta",
    role: "Journalist/Researcher",
  },
  {
    name: "Sudeep Duggal",
    role: "Data Science Contributor",
    url: "https://github.com/duggalsu",
  },
  {
    name: "Sunandan Chakraborty",
    role:
      "Past Advisor, (Assistant Professor, Information School, Indiana University)",
  },
  {
    name: "Suraj Sharma",
    role: "Full Stack Intern",
    url: "http://evenzero.in",
  },
  {
    name: "Swastika Mohapatra",
    role: "Data Science Intern",
    url: "https://www.linkedin.com/in/swastika-mohapatra/",
  },
  {
    name: "Upasana Bhattacharjee",
    role: "Qualitative Researcher",
    url: "",
  },
  {
    name: "Venkatesh Thapan",
    role: "Backend Developer",
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
              url={staffMember.url}
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
              url={advisor.url}
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

const CommunityMemberCard = ({ name, role, url }) => (
  <Box
    width={"medium"}
    direction={"column"}
    pad={"small"}
    onClick={() => {}}
    hoverIndicator={true}
    focusIndicator={false}
  >
    <PlainExternalLink href={url} target={"_blank"}>
      <Box direction={"row"} align={"center"}>
        <Heading level={3} margin={"none"} weight={500} color={"brand"}>
          {name}
        </Heading>
        <Box flex={"grow"} />
        {url && url.length != 0 && <ExternalLink size={16} />}
      </Box>
      <Paragraph size={"small"}>{role}</Paragraph>
    </PlainExternalLink>
  </Box>
)

export default Community
