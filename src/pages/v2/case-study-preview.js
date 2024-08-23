import React from "react"
import { Box, Heading, Text, Image, Paragraph } from "grommet"
import {
  Link,
  PlainLink,
  SmartPlainLink,
} from "../../components/atomic/TattleLinks"
import { GatsbyImage } from "gatsby-plugin-image"

const CaseStudyPreview = ({
  coverImage,
  previewImage,
  title,
  description,
  url,
  publicationDate,
  offset,
  blog_slug,
  updates_slug,
}) => {
  return (
    <Box
      gap={"xsmall"}
      margin={{ top: "medium" }}
      border={{ color: "#f4c6d7" }}
      round={"small"}
    >
      {coverImage ? (
        <Box width={"100%"} height={"small"}>
          <GatsbyImage alt="cover" image={coverImage} objectFit="contain" />
        </Box>
      ) : null}

      <Box pad={"medium"}>
        <PlainLink to={url} target={"_blank"}>
          <Box direction={"column"}>
            <Box
              width={"xsmall"}
              height={"xsmall"}
              round={"xxsmall"}
              overflow={"hidden"}
              justify="center"
            >
              <GatsbyImage alt="preview" image={previewImage} objectFit="contain"/>
            </Box>
            <Box>
              <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
                {title}
              </Heading>
              <Paragraph
                size={"medium"}
                margin={{ top: "none", bottom: "none" }}
              >
                {description}
              </Paragraph>
            </Box>
          </Box>
        </PlainLink>
      </Box>
      <Box pad={"medium"}>
        {blog_slug ? (
          <SmartPlainLink target={blog_slug}>Read blog posts</SmartPlainLink>
        ) : null}

        {updates_slug ? (
          <SmartPlainLink target={updates_slug}>Read Updates</SmartPlainLink>
        ) : null}
      </Box>
    </Box>
  )
}

export default CaseStudyPreview
