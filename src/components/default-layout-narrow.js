import React, { useState, useEffect } from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
import { useLocation } from "@reach/router"
/**
 * @author
 * @function DefaultLayout
 **/

/**
 * Narrow layout wrapper that updates label from the current route.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Layout content
 * @returns {JSX.Element}
 */


const DefaultLayoutNarrow = ({ children }) => {
  const location = useLocation()
  const [label, setLabel] = useState("")

  useEffect(() => {
    setLabel(location.pathname.split("/")[1])
    console.log({ l2: location.pathname })
  }, [location])

  return (
    <AppShell
      headerLabel={label}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
      isMDXPage={true}
    >
      {children}
    </AppShell>
  )
}

export default DefaultLayoutNarrow
