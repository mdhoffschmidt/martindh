import { ArticleItem } from "./articleItem";

import { Article as Article1, Abstract as Abstract1, Meta as Meta1 } from "../../articles/article-2021-12-23";
import { Article as Article2, Abstract as Abstract2, Meta as Meta2 } from "../../articles/article-2022-01-19";
import { Article as Article3, Abstract as Abstract3, Meta as Meta3 } from "../../articles/article-2022-06-26";
import { Article as Article4, Abstract as Abstract4, Meta as Meta4 } from "../../articles/article-2022-07-11";
import { Article as Article5, Abstract as Abstract5, Meta as Meta5 } from "../../articles/article-2022-07-29";
import { Article as Article6, Abstract as Abstract6, Meta as Meta6 } from "../../articles/article-2022-08-19";
import { Page } from "../commons/page";
import { IArticleMeta } from "../../interfaces/articles";


function GetFormatedArticle(abstract: () => JSX.Element, article: () => JSX.Element, meta: IArticleMeta) {
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
    GetFormatedArticle(Abstract6, Article6, Meta6),
    GetFormatedArticle(Abstract5, Article5, Meta5),
    GetFormatedArticle(Abstract4, Article4, Meta4),
    GetFormatedArticle(Abstract3, Article3, Meta3),
    GetFormatedArticle(Abstract2, Article2, Meta2),
    GetFormatedArticle(Abstract1, Article1, Meta1),
];

function Articles () {
    return (
        <div>

            <h1> 
                Articles
            </h1>

            <div className="flex flex-col justify-start items-start">
                {
                    listOfArticles.map((articleItem, index) => (

                            <ArticleItem                        
                                abstract = { articleItem.abstract() }
                                date = { articleItem.date }
                                key={ index }
                                href = { articleItem.path }
                                tags = { articleItem.tags }
                                title = { articleItem.title }
                            />
                        
                    ))
                }
            </div>

        </div>
    )
}

export const ArticlePage = () => {
    return (
        <Page main={ <Articles /> }/>
    );
}
