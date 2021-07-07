import React from "react"
import { Heading } from "grommet"
import NarrowContentWrapper from "../../../components/atomic/layout/narrow-content-wrapper"
import DefaultLayout from "../../../components/default-layout"
import CovidWhatsappTSNEMap from "../../../components/molecule/covid-whatsapp-tsne-map"

const TSNE = () => {
  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <Heading level={2}> T-SNE Map of Covid Group Images</Heading>
        <CovidWhatsappTSNEMap />
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default TSNE
