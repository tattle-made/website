import React from 'react'
import { primaryNav, footerItems } from '../config/options';
import AppShell from '../components/atomic/AppShell';
/**
* @author
* @function DefaultLayout
**/

const DefaultLayout = ({children}) => (
    <AppShell
        headerLabel={'Tattle'}
        footerItems={footerItems}
        primaryNav={primaryNav}
        expandCenter={true}
    >
        {children}
    </AppShell>
)

export default DefaultLayout