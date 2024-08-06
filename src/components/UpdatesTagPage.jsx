import React from "react"
import { Box, Heading } from "grommet"
import { PlainLink } from "./atomic/TattleLinks"
import DefaultLayout from "./default-layout"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import TagBubbleBlog from "./atomic/TagBubbleBlog"
import { UpdatesIndex } from "../pages/updates"

/**
 * Tag Page component, to be used to render the Tag Page (To show updates with a given Tag).
 * @param {Object} props
 * @param {string} props.pageHeading -The Heading of the Page
 * @param {string} props.tag -The Tag of which the Page is
 * @param {Object} props.tagCounts -An object mapping each tag to its updates count.
 * @param {Object[]} props.updates -Array of Blog Nodes
 *
 */

function UpdatesTagPage({ pageHeading, tag, tagCounts, updates }) {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Box>
          <Box basis={"xsmall"} gap="">
        <Box>
          <PlainLink to={"/updates"}>
            <Heading level={4}>back to all Updates</Heading>
          </PlainLink>
        </Box>
        <Box direction="row-responsive" gap="small" align="center">
          <Heading level={3}>{pageHeading}</Heading>
          <TagBubbleBlog data={{ label: tag, count: tagCounts[tag] }} />
        </Box>
      </Box>
            <UpdatesIndex updates={updates} />
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>

  )
}
export default UpdatesTagPage