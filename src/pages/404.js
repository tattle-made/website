import React from "react"
import { primaryNav, footerItems } from '../config/options';
import AppShell from '../components/atomic/AppShell';


const NotFoundPage = () => (
  <AppShell
    headerLabel={'Tattle Services'}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
  >
    <h1> home </h1>
  </AppShell>
)

export default NotFoundPage
