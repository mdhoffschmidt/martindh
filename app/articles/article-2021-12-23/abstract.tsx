import { ReactNode } from "react";


export default function Abstract(): ReactNode {
    return (
        <div className="text-inherit hover:no-underline">
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
        </div>
    );
}
