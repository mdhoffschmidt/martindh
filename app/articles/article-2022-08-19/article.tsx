import Abstract from "./abstract";
import { ArticleItem } from "../../../components/articleItem";


export default function Article() {
    const date = new Date("2022-08-19");
    return (
        <ArticleItem               
            abstract = { Abstract() }
            date = { date.toString() }
            key={ 3 }
            href = "/articles/article-2022-08-19"
            tags = { ["NFT Marketplace", "Web3", "NFT"] }
            title = { "Traffic Analysis on NFT Platforms" }
        />
    );
}
