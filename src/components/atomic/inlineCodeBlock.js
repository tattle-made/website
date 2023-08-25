import React from "react";
import { dracula } from "react-code-blocks";

const InlineCodeBlock = ({ children }) => (
    <code style={{ 
        backgroundColor: "#FFEBCB",
        color: "#514E80",
        padding: "2px 6px",
        borderRadius: "4px",
        fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
    }}>
        {children}
    </code>
);

export default InlineCodeBlock 