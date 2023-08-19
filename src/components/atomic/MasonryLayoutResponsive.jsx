import { ResponsiveContext } from "grommet"
import React, { useContext, useEffect, useState } from "react"
import MasonryLayout from "./MasonryLayout"

const MasonryLayoutResponsive = ({ children }) => {
  const size = useContext(ResponsiveContext)
  const [columnCount, setColumnCount] = useState(1)

  useEffect(() => {
    switch (size) {
      case "xsmall":
      case "small":
        setColumnCount(1)
        break
      case "medium":
        setColumnCount(3)
        break
      case "large":
        setColumnCount(5)
        break
      default:
        setColumnCount(1)
    }
  }, [size])

  return (
    <MasonryLayout columns={columnCount} gap={12}>
      {children}
    </MasonryLayout>
  )
}

export default MasonryLayoutResponsive
