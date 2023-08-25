import React from "react";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CustomCodeBlock = (props) => {
    const { className, copy, children } = props;
    const language = className && className.match(/(?<=language-)(\w.*?)\b/)
        ? className.match(/(?<=language-)(\w.*?)\b/)[0]
        : "javascript";

    return copy ? (
        <CopyBlock
            text={children}
            language={language}
            theme={dracula}
            wrapLines
            codeBlock
        />
    ) : (
        <CodeBlock text={children} language={language} theme={dracula} wrapLines />
    );
};

export default CustomCodeBlock;