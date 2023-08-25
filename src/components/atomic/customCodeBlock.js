import React from "react";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CustomCodeBlock = (props) => {
    const { className, copy, children } = props;
    const language = className && className.match(/(?<=language-)(\w.*?)\b/)
        ? className.match(/(?<=language-)(\w.*?)\b/)[0]
        : "javascript";

    const trimmedCode = children.trim()
    return copy ? (
        <CopyBlock
            text={trimmedCode}
            language={language}
            theme={dracula}
            wrapLines
            codeBlock
        />
    ) : (
        <CodeBlock text={trimmedCode} language={language} theme={dracula} wrapLines />
    );
};

export default CustomCodeBlock