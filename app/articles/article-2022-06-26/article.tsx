import Abstract from "./abstract";
import { ArticleItem } from "../../../components/articleItem";


export default function Article() {
    const date = new Date("2022-06-26");
    return (
        <ArticleItem               
            abstract = { Abstract() }
            date = { date.toString() }
            key={ 3 }
            href = "/articles/article-2022-06-26"
            tags = { ["NFT", "Web3"] }
            title = { "An overview of the NFT Market" }
        />
    );
}
