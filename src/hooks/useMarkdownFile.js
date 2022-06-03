import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';


export default function useMarkdownFile (file) {
    const [markdown, setMarkdown] = useState("");    
    useEffect(() => {
      fetch(file)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, [file]);
    const markdownComponent = <ReactMarkdown children={markdown}/>;
    return [markdownComponent];
}
