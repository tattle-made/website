import React, { useState, useEffect } from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "../components/atomic/AppShell"
import { useLocation } from "@reach/router"
/**
 * @author
 * @function DefaultLayout
 **/


/**
 * Full-width layout wrapper using AppShell.
 *
 * Updates internal label state based on current route.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render inside the layout
 * @returns {JSX.Element}
 */

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
