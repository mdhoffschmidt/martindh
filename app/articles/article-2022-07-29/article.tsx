import Abstract from "./abstract";
import { ArticleItem } from "../../../components/articleItem";


export default function Article() {
    const date = new Date("2022-07-29");
    return (
        <ArticleItem               
            abstract = { Abstract() }
            date = { date.toString() }
            key={ 4 }
            href = "/articles/article-2022-07-29"
            tags = { ["Crypto Currencies", "Web3", "NFT"] }
            title = { "How many are using NFTs ?" }
        />
    );
}
