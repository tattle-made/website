import React from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import ResponsiveContributorGrid from "../components/atomic/ResponsiveContributorGrid"
import { Text } from "grommet"

const columns = {
  small: ["auto"],
  medium: ["1/3", "1/3", "1/3"],
}

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
const rows = {
  small: ["auto", "auto", "auto", "auto"],
  medium: ["auto", "auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "con0", start: [0, 0], end: [0, 1] },
    { name: "con1", start: [0, 1], end: [0, 1] },
    { name: "con2", start: [0, 2], end: [0, 2] },
    { name: "con3", start: [0, 3], end: [0, 3] },
  ],
  medium: [
    { name: "con0", start: [0, 0], end: [2, 1] },
    { name: "con1", start: [0, 1], end: [0, 1] },
    { name: "con2", start: [1, 1], end: [1, 1] },
    { name: "con3", start: [2, 1], end: [2, 1] },
  ],
}

const ContributorsPage = () => (
  <AppShell
    headerLabel={"Tattle"}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
  >
    <ResponsiveContributorGrid
      columns={columns}
      rows={rows}
      areas={fixedGridAreas}
      title="Full Time Staff"
      data={[
        {
          Type: "Advisor",
          Name: "Denny George",
          Role: "Interaction design and Tech Lead",
        },
        {
          Type: "Advisor",
          Name: "Tarunima Prabhakar",
          Role: "Research and Project Lead",
        },
        {
          Type: "Advisor",
          Name: "Kruttika Nadig",
          Role: "Data Scientist",
        },
      ]}
    />

    <ResponsiveContributorGrid
      columns={columns}
      rows={rows}
      areas={fixedGridAreas}
      title="Advisors"
      data={[
        {
          Type: "Advisor",
          Name: "Swair Shah",
          Role: "AI Engineer",
        },
        {
          Type: "Advisor",
          Name: "Sunandan Chakraborty",
          Role: "Assistant Professor, Information School, Indiana University",
        },
        {
          Type: "Advisor",
          Name: "Nilomee Jesrani",
          Role: "UX / Visual Design",
        },
        {
          Type: "Advisor",
          Name: "Saakshita Prabhakar",
          Role: "UX / Visual Design",
        },
        {
          Type: "Advisor",
          Name: "Eishita Chhetri",
          Role: "Illustrator",
        },
        {
          Type: "Advisor",
          Name: "Vrinda Bhandari",
          Role: "External Legal Counsel for India",
        },
      ]}
    />
    <Text size={"medium"}>
      <i>
        Several other people have volunteered time and skills such as writing,
        coding, and designing.{" "}
      </i>
    </Text>
  </AppShell>
)

export default ContributorsPage
