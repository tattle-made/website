import React from "react";

const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    fontFamily: "sans-serif",
};

const thStyle = {
    backgroundColor: "#514E80",
    color: "#fff",
    padding: "10px 14px",
    textAlign: "left",
    borderBottom: "2px solid #ccc",
};

const trStyle = {
    borderBottom: "1px solid #ddd",
    
};

const tdStyle = {
    padding: "0.6em",
    borderLeft: "1px solid #ddd",
    borderRight: "1px solid #ddd"
}

const BlogTable = ({ children }) => (
    <table style={tableStyle}>
        {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;
            if (child.type === "thead" || child.type === "tbody") {
                return React.cloneElement(child, {},
                    React.Children.map(child.props.children, (row) => {
                        if (!React.isValidElement(row) || row.type !== "tr") return row;
                        return React.cloneElement(row, { style: { ...trStyle, ...row.props.style } },
                            React.Children.map(row.props.children, (cell) => {
                                if (!React.isValidElement(cell)) return cell;
                                if (cell.type === "th") {
                                    return React.cloneElement(cell, { style: { ...thStyle, ...cell.props.style } });
                                }
                                 if (cell.type === "td") {
                                    return React.cloneElement(cell, { style: { ...tdStyle, ...cell.props.style } });
                                }
                                return cell;
                            })
                        );
                    })
                );
            }
            return child;
        })}
    </table>
);

export default BlogTable