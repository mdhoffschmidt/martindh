import file from "./markdown/article-2022-06-26.md";
import useMarkdownFile from '../hooks/useMarkdownFile';

export const Meta = {
    "date": new Date("2022-06-26"),
    "tags": ["NFT", "Web3"],
    "title": "An overview of the NFT Market",
};

export const Abstract = () => {
    return (
        <div>
            Today I am at the NFT NYC conference, the biggest conference this year on NFTs.
            As the market is turning bearish, tt's an opportunity to reflect on the fundamentals of the market.
            In the present articles I am trying to answer the following questions :
            - Where can you buy NFTs ? What are the most famous Platforms ? What are their rate takes ?
            - What can you buy ? How many collections are there, what’s their size , what are the most famous ones ?
            - Who is actually buying NFTs and how many of them ?
        </div>
    );
}

export const Article = () => {
    const [markdownComponent] = useMarkdownFile(file);
    return <div>
        { markdownComponent }
    </div>
}
