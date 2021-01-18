import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Box, Button, Heading, Text, Paragraph } from "grommet"
import { ExternalLink } from "react-feather"
import DefaultLayout from "../components/default-layout"
import NarrowSection from "../components/atomic/layout/narrow-section"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import TagBubble from "../components/atomic/TagBubble"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { updates } from "../config/updates"

const UpdateListItem = ({ item }) => {
  return (
    <Box direction={"column"} margin={{ top: "xsmall", bottom: "small" }}>
      <Box height={"7.324px"} />
      <Paragraph size={"small"} color={"dark-3"} margin={"none"}>
        {item.date}
      </Paragraph>
      <Box direction={"row-responsive"} justify={"stretch"}>
        <Box>
          <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
            {item.title}
          </Heading>
          <Box direction={"row-responsive"} gap={"xsmall"}>
            {item.tags.map(tag => (
              <TagBubble data={{ label: tag }} />
            ))}
          </Box>
          <Paragraph size={"medium"}>{item.event_name}</Paragraph>
        </Box>
        <Box flex={"grow"}></Box>

        <PlainExternalLink href={item.url} target={"_blank"}>
          <Box
            gap={"small"}
            direction={"row"}
            align={"center"}
            margin={{ top: "xsmall" }}
          >
            <Text size={"small"}> Read More</Text>
            <ExternalLink size={16} />
          </Box>
        </PlainExternalLink>
      </Box>

      <Box height={"xxsmall"} />
    </Box>
  )
}

/**
 * @author
 * @function Updates
 **/

const Updates = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Box>
            <Heading level={2}>Updates</Heading>
            <NarrowSection>
              {updates.map(update => (
                <UpdateListItem item={update} />
              ))}
            </NarrowSection>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

Updates.propTypes = {
  // your expected props
}

Updates.defaultProps = {
  // your default props
}

export default Updates
