import React from "react"
import { Heading, Box, Text, Paragraph } from "grommet"
import { ArrowLeft } from "react-feather"
import NarrowContentWrapper from "../../../components/atomic/layout/narrow-content-wrapper"
import DefaultLayout from "../../../components/default-layout"
import CovidWhatsappTSNEMap from "../../../components/molecule/covid-whatsapp-tsne-map"
import { navigate } from "gatsby"

const TSNE = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <Box
          background={"accent-1"}
          height={"fit-content"}
          pad={"small"}
          round={"small"}
          width={"fit-content"}
          direction={"row"}
          align={"center"}
          gap={"small"}
          onClick={() => {
            navigate("/articles/covid-whatsapp-public-groups/")
          }}
          margin={{ top: "small" }}
          border={"all"}
        >
          <ArrowLeft size={24} />
          <Text size={"small"}>Full Report</Text>
        </Box>
        <Heading level={3}> t-SNE Visualization</Heading>
        <Paragraph size={"medium"}>
          Clusters of images collected from Whatsapp Public Groups during Second
          Wave of Covid-19 in India.
        </Paragraph>
        <CovidWhatsappTSNEMap />
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default TSNE
