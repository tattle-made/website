import React from "react"
import {
  Box,
  Heading,
  Text,
  Paragraph,
  Grid,
  ResponsiveContext,
  Avatar,
  Icons,
  Grommet,
} from "grommet"

import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"

const columns = {
  small: ["auto"],
  medium: ["1/3", "1/3", "1/3"],
}

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row

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

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size]
        }
      }

      let rowsVal = rows
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size]
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas
      if (areas && !Array.isArray(areas)) areasVal = areas[size]

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      )
    }}
  </ResponsiveContext.Consumer>
)

const ResponsiveGrid = props => (
  <Grommet>
    <Box>
      <Responsive
        rows={rows}
        columns={columns}
        gap="small"
        areas={fixedGridAreas}
        margin="medium"
      >
        <Text size={"xlarge"}>{props.title}</Text>
        <Box
          gridArea="con1"
          responsive="true"
          direction="column"
          gap="small"
          pad="small"
        >
          <Avatar
            size="xlarge"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
          <Text weight="bold" size="medium" color="red">
            Denny George
          </Text>
          <Text weight="bold" size="medium" color="dark-3">
            Interaction design and tech lead
          </Text>
          <Text size="medium" color="dark-3">
            Past: Director of Mobile Products on Micragram, and WorkIt at
            Quadrant2; <br /> New York ITP, Tisch School of Arts, NYU
          </Text>
        </Box>
        <Box
          gridArea="con2"
          responsive="true"
          direction="column"
          gap="small"
          pad="small"
        >
          <Avatar
            size="xlarge"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
          <Text weight="bold" size="medium" color="red">
            Tarunima Prabhakar
          </Text>
          <Text weight="bold" size="medium" color="dark-3">
            Research and Project Lead
          </Text>
          <Text size="medium" color="dark-3">
            Past: Research Fellow, CLTC, UC, Berkeley;
            <br />
            Facebook Policy Research
          </Text>
        </Box>
        <Box
          gridArea="con3"
          responsive="true"
          direction="column"
          gap="small"
          pad="small"
        >
          <Avatar
            size="xlarge"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
          <Text weight="bold" size="medium" color="red">
            Kruttika Nadig
          </Text>
          <Text weight="bold" size="medium" color="dark-3">
            Data Scientist
          </Text>
          <Text size="medium" color="dark-3">
            Past: Marketing Manager, Amazon; <br /> Research Consultant: Lord
            Cultural Resources; <br /> Journalist: Times Group and Indian
            Express Group
          </Text>
        </Box>
      </Responsive>
    </Box>
  </Grommet>
)

const ContributorsPage = () => (
  <AppShell
    headerLabel={"Tattle"}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
  >
    <ResponsiveGrid title={"Full Time Staff"} />
    <ResponsiveGrid title={"Advisors"} />

    <Text size={"medium"}>
      <i>
        Several other people have volunteered time and skills such as writing,
        coding, and designing.{" "}
      </i>
    </Text>
  </AppShell>
)

export default ContributorsPage
