import React, { useState, useEffect } from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import { useLocation } from "@reach/router"
/**
 * @author
 * @function DefaultLayout
 **/

const DefaultLayout = ({ children }) => {
  const location = useLocation()
  const [label, setLabel] = useState("")

  useEffect(() => {
    setLabel(location.pathname.split("/")[1])
    console.log({ l: location.pathname })
  }, [location])

  return (
    <AppShell
      headerLabel={label}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
    >
      {children}
    </AppShell>
  )
}

export default DefaultLayout
