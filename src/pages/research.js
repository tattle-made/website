import React from "react"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import {
  Box,
  Heading,
  Paragraph,
  Text,
} from "grommet"
import { research } from "../config/research"
import TagBubble from "../components/atomic/TagBubble"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"

const SectionLabel = ({ children }) => (
  <Text
    size="xsmall"
    weight={700}
    color="dark-4"
    margin={{ bottom: "medium" }}
    style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
  >
    {children}
  </Text>
)

const FeaturedCard = ({ item }) => (
  <Box
    border={{ color: "visuals-3" }}
    round="xsmall"
    overflow="hidden"
    flex={{ grow: 1, shrink: 1 }}
    style={{ minWidth: 0 }}
  >
    <PlainExternalLink href={item.url} target="_blank">
      <Box pad="large">
        <Text size="xsmall" weight={600} color="dark-4" margin={{ bottom: "xsmall" }}>
          {item.date}
        </Text>
        <Heading
          level={3}
          margin={{ top: "xsmall", bottom: "small" }}
          color="brand"
          weight={500}
        >
          {item.title}
        </Heading>
        <Box direction="row" wrap gap="xsmall" margin={{ bottom: "medium" }} className="gap-y-2">
          {item.tags.map((tag, index) => (
            <TagBubble key={index} data={{ label: tag }} />
          ))}
        </Box>
        <Paragraph size="small" margin="none" fill>
          {item.description}
        </Paragraph>
      </Box>
    </PlainExternalLink>
  </Box>
)

const AllListItem = ({ item }) => (
  <Box
    pad={{ vertical: "medium" }}
    border={{ side: "bottom", color: "visuals-3" }}
  >
    <PlainExternalLink href={item.url} target="_blank">
      <Text size="xsmall" weight={600} color="dark-4" margin={{ bottom: "xsmall" }}>
        {item.date}
      </Text>
      <Box direction="row" align="start" justify="between" gap="small">
        <Heading
          level={4}
          margin={{ top: "xsmall", bottom: "xsmall" }}
          color="brand"
          weight={500}
          fill
        >
          {item.title}
        </Heading>
        <Box flex={false} margin={{ top: "small" }}>
          <ExternalLink size={14} />
        </Box>
      </Box>
      <Box direction="row" wrap gap="xsmall" margin={{ bottom: "xsmall" }} className="gap-y-2">
        {item.tags.map((tag, index) => (
          <TagBubble key={index} data={{ label: tag }} />
        ))}
      </Box>
      <Paragraph size="small" margin={{ top: "xsmall", bottom: "none" }} fill>
        {item.description}
      </Paragraph>
    </PlainExternalLink>
  </Box>
)

const Research = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Box margin={{ bottom: "large" }}>
            <Heading level={1} margin={{ top: "none", bottom: "xsmall" }}>
              Research
            </Heading>
            <Paragraph size="medium" color="dark-3" margin="none">
              Papers, reports, datasets, and abstracts from Tattle's work on misinformation, online harms, and civic tech.
            </Paragraph>
          </Box>

          <Box margin={{ bottom: "xlarge" }}>
            <SectionLabel>Featured</SectionLabel>
            <div className="flex flex-col lg:flex-row gap-6">
              {research.featured.map((item, i) => (
                <FeaturedCard key={i} item={item} />
              ))}
            </div>
          </Box>

          <Box>
            <Box>
              {research.all.map((item, i) => (
                <AllListItem key={i} item={item} />
              ))}
            </Box>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Research
