import React from "react"
import { Grommet } from "grommet"
import './src/styles/global.css'
import "./prism-cb.css"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Gatsby API to set Wrapper components. Wrapping entire root with Grommet to get access to especially ResponsiveContext
export const wrapRootElement = ({ element }) => {
  return <Grommet>{element}</Grommet>
}
