import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const thStyle = {
  backgroundColor: "#514E80",
  color: "#fff",
  padding: "10px 14px",
  textAlign: "left",
  borderBottom: "2px solid #ccc",
}

const trStyle = {
  borderBottom: "1px solid #ddd",
}

const tdStyle = {
  padding: "0.6em",
  borderLeft: "1px solid #ddd",
  borderRight: "1px solid #ddd",
}

/**
 * Maps native HTML table children to react-super-responsive-table components.
 * On mobile, each row is rendered as a labeled key-value list instead of
 * a horizontally-scrolling table.
 *
 * NOTE: Thead from the library calls React.cloneElement(children, ...) which
 * requires a single child element — not an array. We therefore extract the
 * single <tr> directly rather than using React.Children.map at that level.
 */
const BlogTable = ({ children }) => (
  <Table>
    {React.Children.map(children, (section) => {
      if (!React.isValidElement(section)) return section

      if (section.type === "thead") {
        // GFM markdown thead always contains exactly one tr.
        // Extract it directly so Thead receives a single element, not an array.
        const row = Array.isArray(section.props.children)
          ? section.props.children[0]
          : section.props.children

        if (!React.isValidElement(row) || row.type !== "tr") return section

        return (
          <Thead>
            <Tr style={trStyle}>
              {React.Children.map(row.props.children, (cell) => {
                if (!React.isValidElement(cell) || cell.type !== "th") return cell
                return (
                  <Th style={{ ...thStyle, ...cell.props.style }}>
                    {cell.props.children}
                  </Th>
                )
              })}
            </Tr>
          </Thead>
        )
      }

      if (section.type === "tbody") {
        return (
          <Tbody>
            {React.Children.map(section.props.children, (row) => {
              if (!React.isValidElement(row) || row.type !== "tr") return row
              return (
                <Tr style={trStyle}>
                  {React.Children.map(row.props.children, (cell) => {
                    if (!React.isValidElement(cell) || cell.type !== "td") return cell
                    return (
                      <Td style={{ ...tdStyle, ...cell.props.style }}>
                        {cell.props.children}
                      </Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        )
      }

      return section
    })}
  </Table>
)

export default BlogTable
