import React from "react"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
/**
 * @author
 * @function DefaultLayout
 **/

const DefaultLayoutNarrow = ({ children }) => (
  <AppShell
    headerLabel={"Tattle"}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
    isMDXPage={true}
  >
    {children}
  </AppShell>
)

export default DefaultLayoutNarrow
