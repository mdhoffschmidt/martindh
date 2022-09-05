import ArticleItem from "../components/articleItem"

import { listOfArticles } from "../articles/articles.js";


export default function Articles () {
    return (
        <div>

            <h1> 
                Articles
            </h1>

            <div flex flex-col justify-start items-start>
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
