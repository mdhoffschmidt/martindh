import ArticleItem from "../components/articleItem"

export default function Articles () {
    return (
        <div>

            <h1> 
                Articles
            </h1>

            <div flex flex-col justify-start items-start>

                <ArticleItem
                    href="/articles/article-2"
                    title="Data Challenges: Part 2"
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
                    title="Data Challenges: Part 1"
                    date="2021 December 23"
                    abstract="
                    A few months ago, Andrew Ng initiated the Data Centric AI movement.
                    He suggests that to improve the performance of a model on a given task improving the dataset will ultimately lead to better results than iterating on the model itself.
                    While it seems obvious that better data leads to better models, improving the data can remains vague.
                    Where some choices are sometimes made intuitively, a precise and technically rigorous methodology is required.
                    This can lead to errors in replicability, consistency, dataset versioning, etc.
                    I questionned few of my data scientists peers on the topic.
                    According to them Data Science is an Art. 
                    It is clear that intuition and practice matter in the field.
                    Nevertheless I think a lot can be learned from Data Engineers to improve the strentgh and quality of data science projects.
                    Defining data excellence is difficult.
                    The purpose of the present document is therefore to help the reader to understand more clearly the traps to avoid to ensure successful project outcomes.
                    "
                    tags={["Data Science"]}
                />


            </div>

        </div>
    )
}
