import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Image, Paragraph } from "grommet"
import {
  PlainExternalLink,
  PlainLink,
} from "../../components/atomic/TattleLinks"

const CaseStudyPreview = ({
  previewImage,
  title,
  description,
  url,
  publicationDate,
  offset,
}) => {
  return (
    <Box
      gap={"xsmall"}
      margin={{ top: "medium" }}
      border={{ color: "#f4c6d7" }}
      round={"small"}
      pad={"medium"}
    >
      <PlainLink to={url} target={"_blank"}>
        <Box direction={"column"}>
          <Box
            width={"xsmall"}
            height={"xsmall"}
            round={"xxsmall"}
            overflow={"hidden"}
          >
            <Image src={previewImage} fit="contain" fill={true} />
          </Box>
          <Box>
            <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
              {title}
            </Heading>
            <Paragraph size={"medium"} margin={{ top: "none" }}>
              {description}
            </Paragraph>
          </Box>
        </Box>
      </PlainLink>
    </Box>
  )
}

export default CaseStudyPreview
