import React from 'react'
import { Grommet } from "grommet"
import { AuthProvider } from "./src/context/AuthContext"
import './src/styles/global.css'
import "./prism-cb.css"

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      <Grommet><div id="app">{element}</div></Grommet>
    </AuthProvider>
  )
}
