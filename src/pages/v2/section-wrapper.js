import React, { useState, useEffect } from "react"

/**
 * @author
 * @function SectionWrapper
 **/

const SectionWrapper = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return <div>{fetching && <h3>something</h3>}</div>
}

export default SectionWrapper
