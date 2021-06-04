import React, { useState, useRef, useEffect } from "react"
import { Box, Heading, Paragraph, Text, Image, Tip } from "grommet"
import { data } from "../../data/bmg/count_bins_curated"
// import { data } from "../../data/bmg/count_bins_1"
import DefaultLayout from "../../components/default-layout"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../../components/atomic/layout/narrow-section"
import useSize from "@react-hook/size"
import d3, { layout } from "d3"

const ExpandedImage = ({ fileId }) => (
  <Box width={"xlarge"} height={"xlarge"} background={"dark-2"}>
    <Text>hi</Text>
  </Box>
)

const Bin = ({ data, ix }) => (
  <div key={ix} className="bin-item">
    <Box
      direction={"row-responsive"}
      gap={"small"}
      pad={"small"}
      background={ix % 2 ? "light-1" : "light-3"}
    >
      <Text size={"xsmall"}>{ix + 1}</Text>
      {data["ids"].map(fileId => {
        return (
          <Box width={"4em"} height={"4em"}>
            <Tip
              content={
                <Box width={"24em"} height={"24em"}>
                  <Image
                    fit={"contain"}
                    src={`https://s3.ap-south-1.amazonaws.com/media.services.tattle.co.in/images/${fileId}`}
                  />
                </Box>
              }
            >
              <Image
                fit={"cover"}
                src={`https://s3.ap-south-1.amazonaws.com/media.services.tattle.co.in/images/${fileId}`}
              />
            </Tip>
          </Box>
        )
      })}
    </Box>
  </div>
)

const BMG = () => {
  const target = useRef(null)
  const [visualizationWidth, visualizationHeight] = useSize(target)

  return (
    <DefaultLayout>
      <Box>
        <NarrowContentWrapper>
          <NarrowSection>
            <Heading level={1}> Clusters</Heading>

            {data.slice(0, 6).map((datum, i) => {
              return (
                <Box gap={"small"}>
                  <Text size={"small"}>{datum.name}</Text>
                  <Box>
                    {datum.bins.map((bin, ix) => (
                      <Bin data={bin} ix={ix} />
                    ))}
                  </Box>
                  <Box height={"xsmall"} />
                </Box>
              )
            })}
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>
    </DefaultLayout>
  )
}

export default BMG

// {Object.keys(data).map((binId, ix) => {
//   const show = data[binId]["count"] >= 3
//   return show && <Bin binId={binId} key={ix} />
// })}
