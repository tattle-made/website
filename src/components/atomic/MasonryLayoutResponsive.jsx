import { ResponsiveContext } from "grommet"
import React, { useContext, useEffect, useState } from "react"
import MasonryLayout from "./MasonryLayout"

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
  const [columnCount, setColumnCount] = useState(() =>
    getColumnCount(window.innerWidth)
  )

  // Event to handle the number of columns based on screen, this is much faster than grommet's ResponsiveContext (Blogs were flickering intitially due to it).
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

  return (
    <MasonryLayout columns={columnCount} gap={12}>
      {children}
    </MasonryLayout>
  )
}

export default MasonryLayoutResponsive
