import React from "react";
import { dracula } from "react-code-blocks";

const InlineCodeBlock = ({ children }) => (
    <code style={{ backgroundColor: dracula.backgroundColor, color: dracula.textColor }}>
        {children}
    </code>
);

export default InlineCodeBlock 