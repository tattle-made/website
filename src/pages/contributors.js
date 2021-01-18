import React, { useState, useEffect } from "react"
import { Heading } from "grommet"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { navigate } from "@reach/router"

/**
 * @author
 * @function Contributors
 **/

const Contributors = () => {
  useEffect(() => {
    console.log("here")
    navigate("/community")
  }, [])

  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <Heading level={2}>Redirecting to /community</Heading>
      </NarrowContentWrapper>
    </DefaultLayout>
  )
}

export default Contributors
