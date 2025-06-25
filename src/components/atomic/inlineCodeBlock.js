import React from "react";
import { dracula } from "react-code-blocks";

/**
 * Renders a styled inline code snippet.
 *
 * @param {Object} props
 * @param {string} props.children - The code content to display inline.
 * @returns {JSX.Element} Inline code block element.
 */

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