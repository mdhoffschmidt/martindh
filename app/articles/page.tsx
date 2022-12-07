import { Page } from "../../components/page";

import Article1 from "./article-2021-12-23/article";
import Article2 from "./article-2022-01-19/article";
import Article3 from "./article-2022-06-26/article";
import Article4 from "./article-2022-07-11/article";
import Article5 from "./article-2022-07-29/article";
import Article6 from "./article-2022-08-19/article";


export default function PageForArticles () {
    return (
        <Page>

            <h1> 
                Articles
            </h1>

            <div className="flex flex-col justify-start items-start">
                <Article6/>
                <Article5/>
                <Article4/>
                <Article3/>
                <Article2/>
                <Article1/>
            </div>

        </Page>
    )
}
