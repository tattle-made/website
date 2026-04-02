import React, { useEffect, useState } from "react"
import MasonryLayout from "./MasonryLayout"
import { Heading } from "grommet"

/**
 * Responsive wrapper for MasonryLayout.
 * Adjusts column count based on window width.
 *
 * @param {Object} props
 * @param {React.ReactNode[]} props.children - Items to display in the layout.
 * @returns {JSX.Element} Responsive masonry layout.
 */

const getColumnCount = (width) => {
  if (width < 768) {
    return 1
  } else if (width < 1280) {
    return 2
  } else {
    return 3
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
    <MasonryLayout columns={columnCount} gap={28}>
      {children}
    </MasonryLayout>
  )
}

export default MasonryLayoutResponsive
