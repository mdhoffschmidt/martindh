export default function Article1 () {
    return (
        <div>

            <h1> Data Cascades </h1>

            <h2> 1. Introduction </h2>

            <p>
                A few months ago, Andrew Ng initiated the <a href="https://www.youtube.com/watch?v=06-AZXmwHjo" target="_blank" rel="noreferrer"> Data Centric AI </a> movement.
                He suggests that to improve the performance of a model on a given task improving the dataset will ultimately lead to better results than iterating on the model itself.
                While it seems obvious that better data leads to better models, improving the data can remains vague.
                Where some choices are sometimes made intuitively, a precise and technically rigorous methodology is required.
                This can lead to errors in replicability, consistency, dataset versioning, etc.
                I questionned few of my data scientists collegues on the topic and they state that Data Science remains Art. 
                Nevertheless I think a lot can be learned from Data Engineers to improve the strentgh and quality of data science projects.
                Defining data excellence is difficult. 
                The purpose of the present document is therefore to help the reader to understand more clearly the traps to avoid to ensure successful project outcomes.
            </p>

            <h2> 2. Goals </h2>

            <p>
                At the end of the document you will :
            </p>

            <ol>
                <li>
                    Understand the data challenges for a Machine Learning project
                </li>
                <li>
                    Be able identify the impact of these on the success of a project
                </li>
                <li>
                    Have a list of some of the best practices I collected among my peers as well as tools they commonly use
                </li>
            </ol>

            <p>
                Covering these topics should ultimately allow us to move projects into production more quickly, to be more robust and more efficient.
            </p>

            <h2> 3. Defintion of the data Challenges for Machine Learning </h2>

            <p>
                In <a href="https://arxiv.org/pdf/2111.10391.pdf" target="_blank" rel="noreferrer"> Data Excellence for AI: Why Should You Care </a> Aroyoa et al. explain how little attention data received over the past few years.
                On the one hand, innovation in AI has been mostly driven by Model improvements such as the recent Transformers architecture that revolutionized the Deep Learning NLP and Image fields.
                On the other hand, data remaind mostly overlooked by the AI community and seen as simple preprocessing task.
            </p>

            <p>
                Everyone knows that "garbage in" ultimately leads to "garbage out".
                The question is then, how can you assess of the goodness of data enterring a model ?
                How can you assess how well the data reflects the real world ?
                There are countless metrics to evaluate the performance of models but there are very fews metrics to assess the quality of data.
                As stated by Aroyoa et al., measuring data quality is very difficult to do in practice.
                More specificaly it includes challenges such as fairness and biases, reproducilibility and quality issues, lack of documentantion etc. 
            </p>

            <p>
                The software engineers have developped best practices such as Unit Testing, Lint, code versioning, documentation and reviews to ensure the software meet some level of excellence.
                Regarding data the question remains open. 
                <span className="italic"> Data Excellence </span> is yet to be invented.
                However, there are some key properties reported by <a href="https://arxiv.org/pdf/2111.10391.pdf" target="_blank" rel="noreferrer"> Aroyoa et al. </a> that contribute to data excellence: Maintainability, Validity, Reliability, Fidelity.
                The table below highlights the challenges, gives a short description as well as some exemples.
            </p>

            <table>
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
                            Maintainability
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

            <p>
                It is not easy is to measure the level of quality according to the four key properties.
                While data Maintainability and Reliability are closer to Data Engineering problems, data Validity and Fidelity problems will depend on external factors, use cases, etc.
                For that reasons, those last two properties are much harder to solve from an Engineering point of view.
            </p>

            <h2>
                4. Data Cascades
            </h2>

            <p>
                In <a href="https://storage.googleapis.com/pub-tools-public-publication-data/pdf/0d556e45afc54afeb2eb6b51a9bc1827b9961ff4.pdf" target="_blank" rel="noreferrer">Sambasivan et al.</a>, data cascades are defined as:
                <br></br>
                <span className="italic">"Compounding events causing negative, downstream effects from data issues, that result in technical debt over time"</span>
            </p>

            <p>
                The table below collects the properties of data cascaces :
            </p>

            <table>
                <thead>
                    <tr>
                        <th> Properties </th>
                        <th> Characteristics </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Opaque
                        </td>
                        <td>
                            Gard to detect, have a long-term impact and are persistent
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Education
                        </td>
                        <td>
                            AI practitioners see the data mostly as an operational task where they tend to move fast neglecting crucial steps
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Negative Impact
                        </td>
                        <td>
                            Impacts negatively AI development and deployment processes and leads to costly iterations
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Multiple
                        </td>
                        <td>
                            Half of the time, 2 or more data cascades are present when a project fails
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Avoidable
                        </td>
                        <td>
                            Stepwise and early intervention during the development process
                        </td>
                    </tr>                                                       
                </tbody>

            </table>


            <h2> 5. Best practices </h2>
     

        </div>
    )
}
