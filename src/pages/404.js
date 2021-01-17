import React from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { Heading } from "grommet"

const NotFoundPage = () => (
  <DefaultLayout>
    <NarrowContentWrapper>
      <Heading level={2}>
        The page you are looking for doesn't seem to exist
      </Heading>
    </NarrowContentWrapper>
  </DefaultLayout>
)

export default NotFoundPage
