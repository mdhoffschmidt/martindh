import Abstract from "./abstract";
import { ArticleItem } from "../../../components/articleItem";


export default function Article() {
    const date = new Date("2021-12-23");
    return (
        <ArticleItem               
            abstract = { Abstract() }
            date = { date.toString() }
            key={ 1 }
            href = "/articles/article-2021-12-23"
            tags = { ["Data Science", "Data Quality"] }
            title = { "Data Challenges: Part 1" }
        />
    );
}