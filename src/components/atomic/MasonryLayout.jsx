import React from "react"
import PropTypes from "prop-types"

/**
 * Renders a responsive masonry-style layout using flexbox.
 * Distributes child elements evenly across specified number of columns with a given gap.
 *
 * @param {Object} props
 * @param {number} props.columns - Number of columns in the layout.
 * @param {number} props.gap - Gap (in px) between columns.
 * @param {React.ReactElement[]} props.children - Elements to display within the masonry layout.
 * @returns {JSX.Element} Masonry layout wrapper.
 */

// Reference : https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99

function MasonryLayout({columns=2,children, gap=20}){
  const columnWrapper = {}
  const result = []

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = []
  }

  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${gap}px` }}>{children[i]}</div>
    )
  }

  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        key={i}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    )
  }

  return <div style={{ display: "flex" }}>{result}</div>
}

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default MasonryLayout
