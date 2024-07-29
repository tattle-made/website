import React from "react"
import { Box, Heading} from "grommet"
import { PlainLink} from "./atomic/TattleLinks"
import DefaultLayout from "./default-layout"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import TagBubbleBlog from "./atomic/TagBubbleBlog"
import { AllBlogsIndexLayout } from "./atomic/layout/all-blogs-index-layout"

/**
 * Tag Page component, to be used to render the Tag Page (To show blogs with a given Tag).
 * @param {Object} props
 * @param {string} props.pageHeading -The Heading of the Page
 * @param {string} props.tag -The Tag of which the Page is
 * @param {Object} props.tagCounts -An object mapping each tag to its blogs count.
 * @param {Object[]} props.blogs -Array of Blog Nodes
 * 
 */

function TagPage({pageHeading,tag,tagCounts,blogs}) {
  return (
    <DefaultLayout>
    <Box width="100%" pad="medium" direction="column">
      <NarrowContentWrapper>
        <NarrowSection>
          <Box basis="xsmall" gap="small">
              <Box>
                <PlainLink to={"/blog"}>
                  <Heading level={4}>back to all blogs</Heading>
                </PlainLink>
              </Box>
              <Box direction="row" gap="small" align="center">
                <Heading level={3}>{pageHeading}</Heading>
                <TagBubbleBlog data={{ label: tag, count: tagCounts[tag] }} />
              </Box>
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
      <AllBlogsIndexLayout blogs={blogs} />
    </Box>
  </DefaultLayout>
  )
}

export default TagPage
