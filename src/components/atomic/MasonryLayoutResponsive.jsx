import React, { useEffect, useState } from "react"
import MasonryLayout from "./MasonryLayout"
import { Heading } from "grommet"

const getColumnCount = (width) => {
  if (width < 768) {
    // Small (Phones)
    return 1
  } else if (width < 1024) {
    // Breakpoint for tablets
    return 2
  } else if (width < 1536) {
    // Medium (Desktops and larger tablets)
    return 3
  } else {
    // Large (Large desktops)
    return 5
  }
}

const MasonryLayoutResponsive = ({ children }) => {
  const [columnCount, setColumnCount] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount(window.innerWidth))
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (columnCount === null) {
    return (
      <Heading level={5} alignSelf="center">
        Loading...
      </Heading>
    )
  }

  return (
    <MasonryLayout columns={columnCount} gap={12}>
      {children}
    </MasonryLayout>
  )
}

export default MasonryLayoutResponsive
