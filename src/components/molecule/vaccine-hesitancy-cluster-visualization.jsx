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
import { Sun } from "react-feather"
import styled from "styled-components"
import DefaultLayout from "../../components/default-layout"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import { data as dataCluster5 } from "../../data/vaccine-hesitancy/vaccine_5clusters"
import { data as dataCluster6 } from "../../data/vaccine-hesitancy/vaccine_6clusters"
import { data as dataCluster7 } from "../../data/vaccine-hesitancy/vaccine_7clusters"
import { LDAvis } from "../../data/vaccine-hesitancy/ldavis"
import { PlainExternalLink } from "../../components/atomic/TattleLinks"

/**
 * Renders the Vaccine Hesitancy cluster visualization using D3 inside a styled container.
 * 
 * Handles cluster selection and option change events.
 * 
 * @returns {JSX.Element} Vaccine hesitancy visualization component.
 */

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
    if (clusterId === -1) {
      setSelectedTopicId(clusterId)
    } else {
      setSelectedTopicId(clusterId.topics)
    }
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

      <Box height={"24em"}>
        <D3Div ref={ldavis} id="visualization"></D3Div>
      </Box>

      <Box direction={"row-responsive"} gap={"xsmall"} align={"center"}>
        <Sun color={"red"} size={"12"} />
        <Text size={"xsmall"}>
          Clicking on a circle will show the fact checking articles grouped in
          it along with the most prominent words in those articles.
        </Text>
      </Box>

      {selectedTopicId !== -1 && (
        <Box background={"light-2"} pad={"small"} margin={{ top: "medium" }}>
          <Heading level={3} margin={{ top: "none" }}>
            Articles in this Cluster
          </Heading>
          <Box
            height={selectedTopicId === -1 ? "0px" : "fit-content"}
            overflow={"auto"}
          >
            {selectedTopicId !== -1 &&
              data["per_cluster_headlines"][selectedTopicId].map(
                (headline, index) => {
                  return (
                    <Box
                      flex={"grow"}
                      margin={{ bottom: "medium" }}
                      key={index}
                    >
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
      )}
    </NarrowContentWrapper>
  )
}

export default VaccineHesitancyClusterVisualization
