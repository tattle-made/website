import React from "react"

/**
 * Two-column layout: 1/4 + 3/4 on md+ screens, single column on mobile.
 * Props:
 *   left  — content for the narrow (1/4) column
 *   right — content for the wide (3/4) column
 */
const TwoColumnLayout = ({ left, right }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full items-center">
      <div className="w-full md:w-1/2">{left}</div>
      <div className="w-full md:w-1/2">{right}</div>
    </div>
  )
}

export default TwoColumnLayout
