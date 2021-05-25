import React, { useRef, useEffect, useState } from "react"
import {
  Box,
  RadioButtonGroup,
  Heading,
  Text,
  Paragraph,
  Carousel,
  Layer,
  Button,
} from "grommet"
import styled from "styled-components"
import DefaultLayout from "../../components/default-layout"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import { data as dataCluster5 } from "../../data/vaccine-hesitancy/vaccine_5clusters"
import { data as dataCluster6 } from "../../data/vaccine-hesitancy/vaccine_6clusters"
import { data as dataCluster7 } from "../../data/vaccine-hesitancy/vaccine_7clusters"
import { LDAvis } from "../../data/vaccine-hesitancy/ldavis"
import { PlainExternalLink } from "../../components/atomic/TattleLinks"

const D3Div = styled.div`
  path {
    fill: none;
  }
`

const VaccineHesitancyClusterVisualization = () => {
  const ldavis = useRef()
  const [clusterNumber, setClusterNumber] = useState("5")
  const [data, setData] = useState(dataCluster5)
  const [selectedTopicId, setSelectedTopicId] = useState(-1)

  useEffect(() => {
    console.log("location 6")
    console.log(ldavis.current.innerHTML)
    ldavis.current.innerHTML = ""
    LDAvis(ldavis.current, data, "#visualization", onClusterSelected)
  }, [data])

  useEffect(() => {
    console.log("location 6")
    console.log(ldavis.current.innerHTML)
    ldavis.current.innerHTML = ""
    LDAvis(ldavis.current, data, "#visualization", onClusterSelected)
  }, [selectedTopicId])

  useEffect(() => {
    console.log("location 15")
  }, [selectedTopicId])

  const onClusterSelected = clusterId => {
    // setSelectedTopicId(clusterId.topics)
    setSelectedTopicId(clusterId.topics)
  }

  const onOptionChanged = event => {
    console.log("location 4")
    // (event) => setValue(event.target.value)
    const clusterNum = event.target.value
    setSelectedTopicId(-1)
    setClusterNumber(clusterNum)
    let data
    switch (clusterNum) {
      case "5":
        data = dataCluster5
        break
      case "6":
        data = dataCluster6
        break
      case "7":
        data = dataCluster7
        break
    }
    setData(data)
  }

  return (
    <NarrowContentWrapper>
      <Box
        direction={"row-responsive"}
        gap={"medium"}
        margin={{ top: "medium", bottom: "medium" }}
        flex={false}
      >
        <Text size={"small"} weight={500}>
          Cluster Number :{" "}
        </Text>
        <RadioButtonGroup
          direction={"row-responsive"}
          name="cluster-number"
          options={["5", "6", "7"]}
          value={clusterNumber}
          onChange={onOptionChanged}
        />
      </Box>
      <Box height={"28em"}>
        <D3Div ref={ldavis} id="visualization"></D3Div>
      </Box>

      <Box background={"light-2"} pad={"small"}>
        <Heading level={3}>Articles in this Cluster</Heading>
        {selectedTopicId === -1 && (
          <Text size={"small"}>
            {" "}
            Hovering on a cluster above will show articles linked to this
          </Text>
        )}
        <Box
          height={selectedTopicId === -1 ? "0px" : "medium"}
          overflow={"scroll"}
        >
          {selectedTopicId !== -1 &&
            data["per_cluster_headlines"][selectedTopicId].map(
              (headline, index) => {
                return (
                  <Box flex={"grow"} margin={{ bottom: "medium" }} key={index}>
                    <PlainExternalLink
                      key={"abc"}
                      href={headline.url}
                      target="_blank"
                    >
                      <Box>
                        <Text size={"small"} weight={500}>
                          {" "}
                          {headline.headline}
                        </Text>
                        <Text size={"xsmall"}> {headline.url}</Text>
                      </Box>
                    </PlainExternalLink>
                  </Box>
                )
              }
            )}
        </Box>
      </Box>
    </NarrowContentWrapper>
  )
}

export default VaccineHesitancyClusterVisualization
