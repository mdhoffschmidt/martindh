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

                {/* <ArticleItem
                    href="/articles/article-6"
                    title="Who are the crypto users"
                    date="2022 July 29"
                    abstract=""
                    tags={["NFT"]}
                /> */}

                {/* <ArticleItem
                    href="/articles/article-5"
                    title="What comes next to the Bear Market"
                    date="2022 July 14"
                    abstract="Over the past few weeks I have encountered many people worried about the Bear Market, its impact on the crypto ecosystem and more specificaly on the NFT one.
                    The price of bitcoin fell indeed from above $65,000 in November 2021 to $20,000 recently.
                    How bill the Bear Market affect the future of NFT collections ? 
                    We could first ask ourselve, what is a Bear Market and are we right in there ?"
                    tags={["NFT"]}
                />

 */}

            </div>

        </div>
    )
}
