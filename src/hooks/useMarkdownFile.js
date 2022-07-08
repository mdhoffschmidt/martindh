import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function useMarkdownFile (file) {
    const [markdown, setMarkdown] = useState("");    
    useEffect(() => {
      fetch(file)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, [file]);
    const markdownComponent = <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>;
    return [markdownComponent];
}
