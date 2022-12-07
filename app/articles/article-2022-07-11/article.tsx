import Abstract from "./abstract";
import { ArticleItem } from "../../../components/articleItem";


export default function Article() {
    const date = new Date("2022-07-11");
    return (
        <ArticleItem               
            abstract = { Abstract() }
            date = { date.toString() }
            key={ 3 }
            href = "/articles/article-2022-07-11"
            tags = { ["Crypto Currencies", "Web3", "NFT"] }
            title = { "Free NFTs fot the bear market" }
        />
    );
}
