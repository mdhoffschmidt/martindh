import { Article as Article1, Abstract as Abstract1, Meta as Meta1 } from "./article-2021-12-23";
import { Article as Article2, Abstract as Abstract2, Meta as Meta2 } from "./article-2022-01-19";
import { Article as Article3, Abstract as Abstract3, Meta as Meta3 } from "./article-2022-06-26";
import { Article as Article4, Abstract as Abstract4, Meta as Meta4 } from "./article-2022-07-11";
import { Article as Article5, Abstract as Abstract5, Meta as Meta5 } from "./article-2022-07-29";

function GetFormatedArticle(abstract, article, meta) {
    const date = meta.date.toDateString();
    const path = `/articles/article-${ meta.date.toISOString().split('T')[0] }`;
    return (
        {
            "abstract": abstract,
            "article": article,
            "date": date,
            "path": path,
            "tags": meta.tags,
            "title": meta.title,
        }
    );
}

export const listOfArticles = [
    // GetFormatedArticle(Abstract5, Article5, Meta5),
    GetFormatedArticle(Abstract4, Article4, Meta4),
    GetFormatedArticle(Abstract3, Article3, Meta3),
    GetFormatedArticle(Abstract2, Article2, Meta2),
    GetFormatedArticle(Abstract1, Article1, Meta1),
];
