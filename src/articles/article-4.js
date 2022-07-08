import file from "../markdown/article-4.md";
import useMarkdownFile from '../hooks/useMarkdownFile';

export default function Article4 () {
    const [markdownComponent] = useMarkdownFile(file);
    return <div>
        { markdownComponent }
    </div>
}
