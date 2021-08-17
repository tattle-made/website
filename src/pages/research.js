import React, { useContext } from "react"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import {
  Box,
  Heading,
  Paragraph,
  ResponsiveContext,
  Text,
  Image,
} from "grommet"
import { research } from "../config/research"
import TagBubble from "../components/atomic/TagBubble"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"

const FeaturedListItem = ({ item }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box
      direction={"column"}
      onClick={() => {}}
      hoverIndicator={true}
      focusIndicator={false}
      width={size === "small" ? "100%" : "50%"}
      pad={"xsmall"}
    >
      <PlainExternalLink href={item.url} target={"_blank"}>
        <Paragraph size={"small"} color={"dark-3"} margin={"none"}>
          {item.date}
        </Paragraph>
        <Box direction={"row-responsive"} justify={"stretch"}>
          <Box>
            <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
              {item.title}
            </Heading>
            <Box direction={"row"} wrap={true} gap={"xsmall"}>
              {item.tags.map(tag => (
                <TagBubble data={{ label: tag }} />
              ))}
            </Box>
            <Paragraph size={"medium"}>{item.description}</Paragraph>
          </Box>
        </Box>
      </PlainExternalLink>
    </Box>
  )
}

const AllListItem = ({ item }) => (
  <Box
    direction={"column"}
    pad={"xsmall"}
    onClick={() => {}}
    hoverIndicator={true}
    focusIndicator={false}
  >
    <PlainExternalLink href={item.url} target={"_blank"}>
      <Paragraph size={"small"} color={"dark-3"} margin={"none"}>
        {item.date}
      </Paragraph>
      <Box direction={"row-responsive"} justify={"stretch"}>
        <Box>
          <Heading
            level={4}
            margin={{ bottom: "4.578px", top: "7.324px" }}
            fill
          >
            {item.title}
          </Heading>
          <Box direction={"row"} wrap={true} gap={"xsmall"}>
            {item.tags.map(tag => (
              <TagBubble data={{ label: tag }} />
            ))}
          </Box>
          <Paragraph size={"medium"} fill>
            {item.description}
          </Paragraph>
        </Box>
      </Box>
    </PlainExternalLink>
  </Box>
)

const Research = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Box>
            <Heading level={2} margin={{ bottom: "none" }}>
              Research
            </Heading>

            <NarrowSection>
              <Text size={"small"} weight={600} margin={{ bottom: "medium" }}>
                Featured
              </Text>
              <Box direction={"row-responsive"} gap={"large"}>
                {research.featured.map(update => (
                  <FeaturedListItem item={update} />
                ))}
              </Box>
            </NarrowSection>

            <NarrowSection>
              <Text size={"small"} weight={600} margin={{ bottom: "medium" }}>
                Papers, Reports, Abstracts
              </Text>
              <Box direction={"column"}>
                {research.all.map(update => (
                  <AllListItem item={update} />
                ))}
              </Box>
            </NarrowSection>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Research
