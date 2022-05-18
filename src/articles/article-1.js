export default function Article1 () {
    return (
        <div>

            <h1> 
                Data Challenges : Part 1
            </h1>

            <h2>
                Introduction
            </h2>

            <p>
                A few months ago, Andrew NG initiated the Data Centric AI vs. Model Centric AI movement [<a href="https://www.youtube.com/watch?v=06-AZXmwHjo" target="_blank" rel="noreferrer"> source </a>].
                The idea is simple: to improve the performance of a model on a particular task, he suggests iterating on the data rather than on the model.
                However, iterating on the data can mean many things. 
                Where some choices are sometimes made intuitively, a precise and technically rigorous methodology is required. 
                This can lead to errors in replicability, consistency, dataset versioning, etc.
                So, even before being able to iterate on the data, it is important to have a data pipeline that meets certain criteria of excellence and this is precisely the purpose of this document.
            </p>

            <h2>
                Goals
            </h2>

            <p>
                The present article intends to cover the following topics :
            </p>

            <ol>
                <li>
                    What are the Data Challenges for a Machine Learning project
                </li>
                <li>
                    Identify the impact of these on the success of a Machine Learning project
                </li>
                <li>
                    Best practices, tools and approaches to use to ensure project success
                </li>
            </ol>

            <p>
                Covering these topics should ultimately allow us to move projects into production more quickly, to be more robust and more efficient.
            </p>

            <h2>
                Defintion of the data Challenges for Machine Learning
            </h2>

            <p>
                This <a href="https://arxiv.org/pdf/2111.10391.pdf" target="_blank" rel="noreferrer"> article </a> proposes a categorization of data challenges into 4 distinct classes:
            </p>

            <ol>
                <li>
                    Maintenance
                </li>
                <li>
                    Reliability
                </li>
                <li>
                    Validity
                </li>
                <li>
                    Fidelity
                </li>
            </ol>

            <table className="my-2">
                <thead>
                    <tr>
                        <th> Challenges </th>
                        <th> Description </th>
                        <th> Exemples </th>
                        <th> Metrics </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Maintenance
                        </td>
                        <td>
                            Large-scale data maintenance is challenging, as it is the case for code for Software Engineering
                        </td>
                        <td>
                            Data versioning, documentation, metadata management, storage, etc.
                        </td>
                        <td>
                            Storage size, number of duplicates, others?
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Reliability
                        </td>
                        <td>
                            Need for reliable data processing pipelines, data cleaning and transformation tools
                        </td>
                        <td>
                            Data consistency, replicability, transformation, collection, labelling, etc.
                        </td>
                        <td>
                            Number of samples, others?
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Validity
                        </td>
                        <td>
                            To what extend the data acutally captures information that a model can learn.
                        </td>
                        <td>
                            Data accuracy, collection guidelines, etc.
                        </td>
                        <td>
                            Model score, Human Score, others?
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Fidelity
                        </td>
                        <td>
                            Make sure that the data is coherent with the real world.
                        </td>
                        <td>
                            Training dataset accurately reflects production data
                        </td>
                        <td>
                            Model shift, others ?
                        </td>
                    </tr>                                        
                </tbody>
            </table>

            <h2>
                Impact of the data challenges for the succes of Machine Learning projects
            </h2>

            <h2>
                Best practices 
            </h2>

            <h2>
                Conclusion
            </h2>

        </div>
    )
}
