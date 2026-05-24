import { Box, Heading, Text, Anchor } from "grommet"
import React from "react"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"
import LatestBlogsUpdates from "../components/LatestBlogsUpdates"
import LinkCard from "../components/atomic/LinkCard"

import coverAnnoMilli from '../images/cover-anno-milli-announcement.png'
import coverDAUdataset from '../images/cover-blog-dau-dataset-event.png'
import NewsletterSubscribeModal from "../components/atomic/NewsletterSubscribeModal"

const featuredLinks = [
  {
    image: coverDAUdataset,
    heading: "Deepfakes Analysis Unit Dataset Release Event",
    description: "Join our webinar to see how you can access the synthetic media dataset",
    url: "/blog/2025-05-21-dau-dataset-launch/",
  },
  {
    image: coverAnnoMilli,
    heading: "Launch event for annomilli",
    description: "We are going to demo an open source annotation software that we have been building collaboratively with the Archives at NCBS.",
    url: "/blog/launch-event-annomilli/",
  },
 
]

const Links = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading level={2}>Links</Heading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {featuredLinks.map((item, i) => (
              <LinkCard key={i} {...item} />
            ))}
          </div>

          <LatestBlogsUpdates />

          
          <Box background={"visuals-1"} pad="medium" round="medium">
            <span>We send out a quarterly newsletter to our readers. <NewsletterSubscribeModal   label="Subscribe for updates" /></span>
            
          </Box>
        </NarrowSection>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Links
