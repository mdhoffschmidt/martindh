import ArticleItem from "../components/articleItem"

export default function Articles () {
    return (
        <div>

            <h1> 
                Articles
            </h1>

            <div flex flex-col justify-start items-start gap-10>

                <ArticleItem
                    href="/articles/article-2"
                    title="Data Challenges : Part 2"
                    date="2022 January 19"
                    abstract="
                    Adopting a Data Centric approach to a Machine Learning project will probably leave you wondering what steps will lead you there. 
                    Improving the data rather than the model seems quite obvious since everyone knows that the garbage in yields garbage out. 
                    The previous article discussed the different challenges that must be overcome to reach Data Excellence. 
                    The goal was to formalize what are the data challenges a Data Scientist might encounter and what impact they can have on a Machine Learning project.
                    "
                    tags={["Data Science"]}
                />

                <ArticleItem
                    href="/articles/article-1"
                    title="Data Challenges : Part 1"
                    date="2021 December 23"
                    abstract="
                    A few months ago, Andrew NG initiated the Data Centric AI vs. Model Centric AI movement.
                    The idea is simple: to improve the performance of a model on a particular task, he suggests iterating on the data rather than on the model.
                    However, iterating on the data can mean many things.
                    Where some choices are sometimes made intuitively, a precise and technically rigorous methodology is required. 
                    This can lead to errors in replicability, consistency, dataset versioning, etc.
                    So, even before being able to iterate on the data, it is important to have a data pipeline that meets certain criteria of excellence and this is precisely the purpose of this document.
                    "
                    tags={["Data Science"]}
                />


            </div>

        </div>
    )
}
