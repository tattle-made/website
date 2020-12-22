import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Image, Paragraph } from "grommet"
import { PlainExternalLink } from "../../components/atomic/TattleLinks"

const CaseStudyPreview = ({
  previewImage,
  title,
  description,
  url,
  publicationDate,
  offset,
}) => {
  return (
    <Box direction="column" gap={"xsmall"} margin={{ top: "medium" }}>
      <PlainExternalLink href={url} target={"_blank"}>
        <Box
          width={"100%"}
          height={"160px"}
          round={"xsmall"}
          overflow={"hidden"}
        >
          <Image src={previewImage} fit="cover" fill={true} />
        </Box>
        <Box>
          <Heading level={4} margin={{ bottom: "4.578px", top: "7.324px" }}>
            {title}
          </Heading>
          <Paragraph size={"small"} margin={{ top: "none" }}>
            {description}
          </Paragraph>
        </Box>
      </PlainExternalLink>
    </Box>
  )
}

export default CaseStudyPreview
