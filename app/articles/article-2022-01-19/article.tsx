import Abstract from "./abstract";
import { ArticleItem } from "../../../components/articleItem";


export default function Article() {
    const date = new Date("2022-01-19");
    return (
        <ArticleItem               
            abstract = { Abstract() }
            date = { date.toString() }
            key={ 2 }
            href = "/articles/article-2022-01-19"
            tags = { ["Data Science", "Data Quality"] }
            title = { "Data Challenges: Part 2" }
        />
    );
}
