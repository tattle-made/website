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
} from "grommet"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"

const ContributorsPage = () => (
  <AppShell
    headerLabel={"Tattle"}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
  >
    <Box direction="column" gap="500px">
      <Box direction="row">
        <Grid
          rows={["xxsmall", "medium"]}
          columns={[
            { count: "fit", size: "large" },
            { count: "fit", size: "small" },
            { count: "fit", size: "small" },
          ]}
          gap="large"
          responsive="true"
          areas={[
            { name: "con0", start: [0, 0], end: [2, 1] },
            { name: "con1", start: [0, 1], end: [0, 1] },
            { name: "con2", start: [1, 1], end: [1, 1] },
            { name: "con3", start: [2, 1], end: [2, 1] },
          ]}
        >
          <Box gridArea="con0">
            <Heading size={6} color="dark-3">
              Full Time Staff
            </Heading>
          </Box>
          <Box gridArea="con1" background="light-2">
            <Box>
              <Box>
                <Box direction="column" gap="small" pad="small">
                  <Avatar
                    size="xlarge"
                    src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                  />
                  <Text weight="bold" size="large" color="brand">
                    Denny George
                  </Text>
                  <Text weight="bold" size="large" color="dark-3">
                    Interaction design and tech lead
                  </Text>
                  <Text size="medium" color="dark-3">
                    Past: Director of Mobile Products on Micragram, and WorkIt
                    at Quadrant2; <br /> New York ITP, Tisch School of Arts, NYU
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box gridArea="con2" background="light-2">
            <Box>
              <Box direction="column" gap="small" pad="small">
                <Avatar
                  size="xlarge"
                  src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                />
                <Text weight="bold" size="large" color="brand">
                  Tarunima Prabhakar
                </Text>
                <Text weight="bold" size="large" color="dark-3">
                  Research and Project Lead
                </Text>
                <Text size="medium" color="dark-3">
                  Past: Research Fellow, CLTC, UC, Berkeley;
                  <br />
                  Facebook Policy Research
                </Text>
              </Box>
            </Box>
          </Box>
          <Box gridArea="con3" background="light-2">
            <Box>
              <Box direction="column" gap="small" pad="small">
                <Avatar
                  size="xlarge"
                  src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                />
                <Text weight="bold" size="large" color="brand">
                  Kruttika Nadig
                </Text>
                <Text weight="bold" size="large" color="dark-3">
                  Data Scientist
                </Text>
                <Text size="medium" color="dark-3">
                  Past: Marketing Manager, Amazon; <br /> Research Consultant:
                  Lord Cultural Resources; <br /> Journalist: Times Group and
                  Indian Express Group
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box direction="row">
        <Grid
          rows={["xxsmall", "medium"]}
          columns={[
            { count: "fit", size: "large" },
            { count: "fit", size: "small" },
            { count: "fit", size: "small" },
          ]}
          gap="large"
          responsive="true"
          areas={[
            { name: "con0", start: [0, 0], end: [2, 1] },
            { name: "con1", start: [0, 1], end: [0, 1] },
            { name: "con2", start: [1, 1], end: [1, 1] },
            { name: "con3", start: [2, 1], end: [2, 1] },
          ]}
        >
          <Box gridArea="con0">
            <Heading size={6} color="dark-3">
              Advisors
            </Heading>
          </Box>
          <Box gridArea="con1">
            <Box>
              <Box>
                <Box direction="column" gap="small" pad="small">
                  <Text weight="bold" size="large" color="brand">
                    Denny George
                  </Text>
                  <Text weight="bold" size="large" color="dark-3">
                    Interaction design and tech lead
                  </Text>
                  <Text size="medium" color="dark-3">
                    Past: Director of Mobile Products on Micragram, and WorkIt
                    at Quadrant2; <br /> New York ITP, Tisch School of Arts, NYU
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box gridArea="con2">
            <Box>
              <Box direction="column" gap="small" pad="small">
                <Text weight="bold" size="large" color="brand">
                  Tarunima Prabhakar
                </Text>
                <Text weight="bold" size="large" color="dark-3">
                  Research and Project Lead
                </Text>
                <Text size="medium" color="dark-3">
                  Past: Research Fellow, CLTC, UC, Berkeley;
                  <br />
                  Facebook Policy Research
                </Text>
              </Box>
            </Box>
          </Box>
          <Box gridArea="con3">
            <Box>
              <Box direction="column" gap="small" pad="small">
                <Text weight="bold" size="large" color="brand">
                  Kruttika Nadig
                </Text>
                <Text weight="bold" size="large" color="dark-3">
                  Data Scientist
                </Text>
                <Text size="medium" color="dark-3">
                  Past: Marketing Manager, Amazon; <br /> Research Consultant:
                  Lord Cultural Resources; <br /> Journalist: Times Group and
                  Indian Express Group
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  </AppShell>
)

export default ContributorsPage
