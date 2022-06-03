import file from "../markdown/article-3.md";
import useMarkdownFile from '../hooks/useMarkdownFile';

export default function Article3 () {
    const [markdownComponent] = useMarkdownFile(file);
    return <div>
        { markdownComponent }
    </div>
}
