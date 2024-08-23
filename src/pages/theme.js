import React, { useState, useEffect, useContext } from "react"
import {
  Grid,
  Box,
  Layer,
  Stack,
  Heading,
  Paragraph,
  Text,
  Image,
  Button,
  TextInput,
  ResponsiveContext,
} from "grommet"
import styled from "styled-components"
import DefaultLayout from "../components/default-layout"
import { GitHub } from "react-feather"
import TattleLogo from "../components/atomic/TattleLogo"
import { StaticImage } from "gatsby-plugin-image"

/**
 * @author
 * @function Theme
 **/

const Theme = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <DefaultLayout>
      <div>
        <h1>------------------------Style-----------------------------</h1>
        <Heading level={1}>Heading One</Heading>
        <Heading level={2}>Heading Two</Heading>
        <Heading level={3}>Heading Three</Heading>
        <Heading level={4}>Heading Four</Heading>
        <Heading level={5}>Heading Five</Heading>
        <Heading level={6}>Heading Six</Heading>
        <Paragraph size={"small"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dignissim massa. Integer ultricies erat ac urna commodo iaculis.
          Quisque a nunc feugiat, vehicula nisl nec, blandit quam. Sed eu
          sagittis nulla. Suspendisse in quam placerat, rutrum nunc id,
          vestibulum augue. Cras congue tempor gravida. Fusce nec ligula sit
          amet lorem cursus fermentum vitae id massa. Nunc tempor ipsum et
          dictum pretium. Vivamus pretium varius ex vel consequat. Vestibulum
        </Paragraph>
        <Paragraph size={"medium"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dignissim massa. Integer ultricies erat ac urna commodo iaculis.
          Quisque a nunc feugiat, vehicula nisl nec, blandit quam. Sed eu
          sagittis nulla. Suspendisse in quam placerat, rutrum nunc id,
          vestibulum augue. Cras congue tempor gravida. Fusce nec ligula sit
          amet lorem cursus fermentum vitae id massa. Nunc tempor ipsum et
          dictum pretium. Vivamus pretium varius ex vel consequat. Vestibulum
        </Paragraph>
        <Paragraph size={"large"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dignissim massa. Integer ultricies erat ac urna commodo iaculis.
          Quisque a nunc feugiat, vehicula nisl nec, blandit quam. Sed eu
          sagittis nulla. Suspendisse in quam placerat, rutrum nunc id,
          vestibulum augue. Cras congue tempor gravida. Fusce nec ligula sit
          amet lorem cursus fermentum vitae id massa. Nunc tempor ipsum et
          dictum pretium. Vivamus pretium varius ex vel consequat. Vestibulum
        </Paragraph>
        <Paragraph size={"xlarge"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dignissim massa. Integer ultricies erat ac urna commodo iaculis.
          Quisque a nunc feugiat, vehicula nisl nec, blandit quam. Sed eu
          sagittis nulla. Suspendisse in quam placerat, rutrum nunc id,
          vestibulum augue. Cras congue tempor gravida. Fusce nec ligula sit
          amet lorem cursus fermentum vitae id massa. Nunc tempor ipsum et
        </Paragraph>
        <Paragraph size={"xxlarge"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dignissim massa. Integer ultricies erat ac urna commodo iaculis.
          Quisque a nunc feugiat, vehicula nisl nec, blandit quam. Sed eu
          sagittis nulla. Suspendisse in quam placerat, rutrum nunc id,
          vestibulum augue. Cras congue tempor gravida. Fusce nec ligula sit
          amet lorem cursus fermentum vitae id massa. Nunc tempor ipsum et
        </Paragraph>
        <Box direction={"column"}>
          <Text size={"xsmall"}>Text xsmall </Text>
          <Text size={"small"}>Text small </Text>
          <Text size={"medium"}>Text medium </Text>
          <Text size={"large"}>Text large </Text>
          <Text size={"xlarge"}>Text xlarge </Text>
          <Text size={"xxlarge"}>Text xxlarge </Text>
        </Box>
        <Box wrap={true} direction={"row-responsive"}>
          <Box background={"brand"} margin={"xsmall"} pad={"small"}>
            <Text>brand</Text>
          </Box>
          <Box direction={"column"}>
            <Box background={"accent-1"} margin={"xsmall"} pad={"small"}>
              <Text>accent-1</Text>
            </Box>
            <Box background={"accent-2"} margin={"xsmall"} pad={"small"}>
              <Text>accent-2</Text>
            </Box>
            <Box background={"accent-3"} margin={"xsmall"} pad={"small"}>
              <Text>accent-3</Text>
            </Box>
            <Box background={"accent-4"} margin={"xsmall"} pad={"small"}>
              <Text>accent-4</Text>
            </Box>
          </Box>

          <Box direction={"column"}>
            <Box background={"neutral-1"} margin={"xsmall"} pad={"small"}>
              <Text>neutral-1</Text>
            </Box>
            <Box background={"neutral-2"} margin={"xsmall"} pad={"small"}>
              <Text>neutral-2</Text>
            </Box>
            <Box background={"neutral-3"} margin={"xsmall"} pad={"small"}>
              <Text>neutral-3</Text>
            </Box>
            <Box background={"neutral-4"} margin={"xsmall"} pad={"small"}>
              <Text>neutral-4</Text>
            </Box>
          </Box>

          <Box direction={"column"} pad={"medium"}>
            <Heading level={3} size={"small"}>
              {" "}
              Status Colors{" "}
            </Heading>
            <Box direction={"row-responsive"}>
              <Box background={"status-ok"} margin={"xsmall"} pad={"small"}>
                <Text>status-ok</Text>
              </Box>
              <Box background={"status-error"} margin={"xsmall"} pad={"small"}>
                <Text>status-error</Text>
              </Box>
              <Box
                background={"status-warning"}
                margin={"xsmall"}
                pad={"small"}
              >
                <Text>status-warning</Text>
              </Box>
              <Box
                background={"status-unknown"}
                margin={"xsmall"}
                pad={"small"}
              >
                <Text>status-unknown</Text>
              </Box>
              <Box
                background={"status-disabled"}
                margin={"xsmall"}
                pad={"small"}
              >
                <Text>status-disabled</Text>
              </Box>
            </Box>
          </Box>

          <Box direction={"column"} pad={"medium"}>
            <Heading level={3} size={"small"}>
              {" "}
              Visualization Colors{" "}
            </Heading>
            <Box direction={"row-responsive"}>
              <Box background={"visuals-1"} margin={"xsmall"} pad={"small"}>
                <Text>visuals one</Text>
              </Box>
              <Box background={"visuals-2"} margin={"xsmall"} pad={"small"}>
                <Text>visuals two</Text>
              </Box>
              <Box background={"visuals-3"} margin={"xsmall"} pad={"small"}>
                <Text>visuals three</Text>
              </Box>
              <Box background={"visuals-4"} margin={"xsmall"} pad={"small"}>
                <Text>visuals four</Text>
              </Box>
              <Box background={"visuals-5"} margin={"xsmall"} pad={"small"}>
                <Text>visuals five</Text>
              </Box>
              <Box background={"visuals-6"} margin={"xsmall"} pad={"small"}>
                <Text>visuals six</Text>
              </Box>
              <Box background={"visuals-7"} margin={"xsmall"} pad={"small"}>
                <Text>visuals seven</Text>
              </Box>
              <Box background={"visuals-8"} margin={"xsmall"} pad={"small"}>
                <Text>visuals eight</Text>
              </Box>
              <Box background={"visuals-9"} margin={"xsmall"} pad={"small"}>
                <Text>visuals nine</Text>
              </Box>
              <Box background={"visuals-10"} margin={"xsmall"} pad={"small"}>
                <Text>visuals ten</Text>
              </Box>
            </Box>
            <Box direction={"column"} pad={"medium"}>
              <Heading level={3} size={"small"}>
                {" "}
                Light Colors{" "}
              </Heading>
              <Box direction={"row-responsive"}>
                <Box background={"light-1"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals one</Text>
                </Box>
                <Box background={"light-2"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals two</Text>
                </Box>
                <Box background={"light-3"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals three</Text>
                </Box>
                <Box background={"light-4"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals four</Text>
                </Box>
                <Box background={"light-5"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals five</Text>
                </Box>
                <Box background={"light-6"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals six</Text>
                </Box>
              </Box>
            </Box>
            <Box direction={"column"} pad={"medium"}>
              <Heading level={3} size={"small"}>
                {" "}
                Dark Colors{" "}
              </Heading>
              <Box direction={"row-responsive"}>
                <Box background={"dark-1"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals one</Text>
                </Box>
                <Box background={"dark-2"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals two</Text>
                </Box>
                <Box background={"dark-3"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals three</Text>
                </Box>
                <Box background={"dark-4"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals four</Text>
                </Box>
                <Box background={"dark-5"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals five</Text>
                </Box>
                <Box background={"dark-6"} margin={"xsmall"} pad={"small"}>
                  <Text>visuals six</Text>
                </Box>
              </Box>
            </Box>

            <Grid
              columns={{
                count: 3,
                size: "auto",
              }}
              gap="medium"
              responsive={true}
            >
              <MultiMediaListItem listItem={{ heading: "Covid Dataset" }} />
              <MultiMediaListItem
                listItem={{ heading: "Fact Checking Articles 2019" }}
              />
              <MultiMediaListItem listItem={{ heading: "Third Dataset" }} />
              <MultiMediaListItem listItem={{ heading: "Fourth Dataset" }} />
            </Grid>
          </Box>
          <Box fill={"horizontal"} margin={{ horizontal: "small" }}>
            <CoverSection />
          </Box>
          <Box fill={"horizontal"} margin={{ horizontal: "small" }}>
            <StaticCoverSection />
          </Box>
          <Box margin={"small"}>
            <Box width={"medium"} direction={"column"} gap={"small"}>
              <Button label={"Default Button"} />
              <Button primary icon={<GitHub />} label={"Primary Button"} />
              <Button secondary label={"Secondary Button"} />
            </Box>
          </Box>
        </Box>
        <Box margin={"small"}>
          <Box width={"medium"} direction={"column"} gap={"small"}>
            <LoginForm />
          </Box>
        </Box>
        <Box margin={"small"}>
          <TattleLogo data={{ scale: 1.2 }} />
        </Box>
      </div>
    </DefaultLayout>
  )
}

const CoverSection = () => {
  return (
    <Box
      round={"xsmall"}
      background={"visuals-4"}
      overflow={"hidden"}
      direction={"row"}
    >
      <Box direction={"column"} margin={{ horizontal: "small" }}>
        <Heading margin={{ top: "4.578px", bottom: "7.324px" }}>
          Heading
        </Heading>
        <Paragraph size={"medium"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet,
          odio nec iaculis dapibus, dui lorem convallis felis, in dapibus lacus
          odio in diam. Nulla purus ipsum, semper scelerisque pulvinar.
        </Paragraph>
      </Box>
      <Box fill={"horizontal"} height={"medium"}>
        <StaticImage
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
          }
        />
      </Box>
    </Box>
  )
}

const StaticCoverSection = () => {
  return (
    <Box
      round={"xsmall"}
      background={"visuals-4"}
      overflow={"hidden"}
      direction={"row"}
      margin={{vertical:"1em"}}
    >
      <Box direction={"column"} margin={{ horizontal: "small" }}>
        <Heading margin={{ top: "4.578px", bottom: "7.324px" }}>
          Heading
        </Heading>
        <Paragraph size={"medium"}>
          Cover with Gatsby Static Image
        </Paragraph>
        <Paragraph size={"medium"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet,
          odio nec iaculis dapibus, dui lorem convallis felis, in dapibus lacus
          odio in diam. Nulla purus ipsum, semper scelerisque pulvinar.
        </Paragraph>
      </Box>
      <Box fill={"horizontal"} height={"medium"}>
        <Image
          fit={"cover"}
          src={
            "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
          }
        />
      </Box>
    </Box>
  )
}

const MultiMediaListItem = ({ listItem }) => {
  return (
    <Box direction={"column"}>
      <Box round={"xsmall"} border={true} height={"small"} width={"100%"}></Box>
      <Box height={"7.324px"} />
      <Heading level={4} margin={{ bottom: "4.578px", top: "7.324px" }}>
        {" "}
        {listItem.heading}{" "}
      </Heading>
      <Paragraph size={"small"} margin={{ top: "none" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
        dapibus libero. Fusce id porta tellus. Duis posuere convallis ipsum.
        Quisque sed nisi ultrices, ornare lorem sed, sodales lectus. Class.
      </Paragraph>
      <Box direction={"row-responsive"} gap={"xsmall"}>
        <TagBubble data={{ label: "dataset" }} />
        <TagBubble data={{ label: "covid" }} />
        <TagBubble data={{ label: "rest" }} />
        <TagBubble data={{ label: "home" }} />
      </Box>
    </Box>
  )
}

/**
 * Creates a tag bubble in the tattle's theme
 *
 * @param data : {
 *    label: string,
 *    description: string,
 *    tags : string[]
 *    src : string // url to a publically accessible image, video or .txt file
 * }
 */
const TagBubble = ({ data }) => {
  return (
    <Box>
      {" "}
      <Box
        round={"small"}
        background={"visuals-1"}
        pad={"xsmall"}
        width={"fit-content"}
      >
        <Text size={"xsmall"}>{data.label}</Text>{" "}
      </Box>
    </Box>
  )
}

const LoginForm = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  return (
    <Box direction={"column"} gap={"xsmall"}>
      <TextInput
        placeholder="Email address"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Box height={"0.244em"} />
      <Button primary label={"Login"} />
      <Text alignSelf={"center"} size={"small"}>
        or
      </Text>
      <Button
        secondary
        icon={<GitHub color={""} />}
        label={"Login with Github"}
      />
    </Box>
  )
}

export default Theme
