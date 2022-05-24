export default function Article1 () {
    return (
        <div>

            <h1> Data Challenges: Part 1 </h1>

            <h2> 1. Introduction </h2>

            <p>
                A few months ago, Andrew Ng initiated the <a href="https://www.youtube.com/watch?v=06-AZXmwHjo" target="_blank" rel="noreferrer"> Data Centric AI </a> movement.
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

            <h2> 3. Definition of the data Challenges for Machine Learning </h2>

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
                As stated by Aroyo et al., measuring data quality is challenging in practice.
                More specificaly it includes challenges such as fairness and biases, reproducilibility and quality issues, lack of documentantion etc. 
            </p>

            <p>
                The software engineers have developped best practices such as Unit Testing, Lint, code versioning, documentation and reviews to ensure the software meets some level of excellence.
                Regarding data, the question remains open. 
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
                Knowing that measuring data excellence is challenging does not help us at this stage.
                I thought it would help to give the reader some understanding on where most of the projects fail.
                From the same author, in <a href="https://storage.googleapis.com/pub-tools-public-publication-data/pdf/0d556e45afc54afeb2eb6b51a9bc1827b9961ff4.pdf" target="_blank" rel="noreferrer">Sambasivan et al.</a>, explore the impact of data cascades.
                Which they define as <span className="italic">"Compounding events causing negative, downstream effects from data issues, that result in technical debt over time"</span>.
                The authors analyze the data challenges for 53 AI experts. 
                The nature of the projects analyzed are the so-called "High Stakes" projects, such as healthcare for example.
            </p>

            <p>
                Let's first start with the properties of data cascades,
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

            <p>
                Data Cascades can therefore have a negative impact throughout the life cycle of a project, i.e. from the definition of the problem to the deployment of the model, including its training and evaluation. 
                Moreover, the presence of one cascade leads often to a second or third cascade.
                The table below highlights the results found by the authors.
            </p>

            <table>
                <thead>
                    <tr>
                        <th> Cascades </th>
                        <th> Share in % </th>
                        <th> Triggers </th>
                        <th> Impact </th>
                        <th> Signals </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Interact with Physical world
                        </td>
                        <td>
                            54.7
                        </td>
                        <td>
                            Hardware drift, Environmental drift, Human Drift
                        </td>
                        <td>
                            Abandonment of projects, Model Failure, Harms to beneficiaries
                        </td>
                        <td>
                            System performance deployment
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bad application-domain expertise
                        </td>
                        <td>
                            53.4
                        </td>
                        <td>
                            Subjective ground-truth, Bad data representative for application domain-expertise, Moving fast to PoC, AI practitioners are responsible for data sense-making
                        </td>
                        <td>
                            Costly Iterations (several months or years)
                        </td>
                        <td>
                            System performance, Post-hoc consulting with domain experts
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Conflicting reward system
                        </td>
                        <td>
                            32.1
                        </td>
                        <td>
                            Misaligned incentives and priorities between practitioners, domain experts, and field partners, Viewing data as non technical, Data I Literacy
                        </td>
                        <td>
                            Quit the project, moving to new datasource, costly iteration
                        </td>
                        <td>
                            System performance, burned partner relations 
                        </td>
                    </tr>    
                    <tr>
                        <td>
                            Poor cross org documentation
                        </td>
                        <td>
                            20.8
                        </td>
                        <td>
                            Neglecting value of data documentation
                        </td>
                        <td>
                            Useless data, Wasted time
                        </td>
                        <td>
                            Manuel instances reviews, mostly by chance
                        </td>
                    </tr>                                        
                </tbody>
            </table>

            <p>
                It is useful to compared the cascade in the light of the data challenges mentionned earlier.
                First, the most important problems would be related to Data Fidelity.
                They are diagnosed in more than 50% of the projects.
                With impacts as serious as the pure and simple abandonment of the project.
                Second, Data Validity problem, present in more than 40% of projects. 
                Difficult to diagnose apparently and often caused by a gap between business and technical experts. 
                Finally, Data Reliability (30%) and Data Maintenance (20%) problems seem to be less critical but still harm practionners by making them lose a lot of time.
            </p>

            <h2> 5. Ensure project successs </h2>

            <p>
                Now we have discussed data challanges and how to impact project, let's share some material to help you make to most out of this in your daily activities.
                I asked many of my Data Science peers how they tackle data challenges to ensure the success of their projects. 
                The following three sections collect the feedbacks from about twenty data pratitioners.
            </p>

            <h3>
                5.1 Best practices
            </h3>
     
            <p>
                Try to systematically test the validity of your samples with use case specific rules.
                Given a NLP problem, you might for instance exploit business rules that can identified with regular expressions, pattern matching or text length.
            </p>

            <p>
                It is very handy to develop configuration files to parametrize data wrangling processes that ensure reproducibility. 
                In addition to that, configuration files can be easily versioned with git. 
                Try to break down each processing task into a single purpose function or class that you can call from your file.
                Assemble them sequentially to build more complex tasks. 
                The resulting pipeline will have two advantages. 
                First, it will be very easy to test it and ensure everything is working well.
                Second, anyone else diving into your code will find easily understandable code and configuratio files.
            </p>
  
            <p>
                Most of use are using Python and one othe most underrated feature of it are dataclasses.
                Try to systematically express your data samples using those.
                Other tools such as Pydantic can also be very useful to integrate object serialization with json files.
                Manipulating data in an object oriented manner is two fold. 
                First, constraints improves the odds that data is valid.
                Second, <span className="italic"> Typing </span> will make all your code much clearer and less error prone.
            </p>

            <h3> 5.2 Tools </h3>

            <h4>
                5.2.1 Data Management
            </h4>

            <ul>
                <li> 
                    <a href="https://airflow.apache.org/" target="_blank" rel="noreferrer"> 
                        Airflow 
                    </a> 
                </li>
                <li> 
                    <a href="https://airbyte.io/" target="_blank" rel="noreferrer"> 
                        Airbyte 
                    </a>
                </li>
                <li> 
                    <a href="https://luigi.readthedocs.io/en/stable/" target="_blank" rel="noreferrer"> 
                        Luigi 
                    </a>
                </li>
            </ul>

            <h4>
                5.2.2 Dataset and model versioning
            </h4>

            <ul>
                <li> 
                    <a href="https://www.pachyderm.com/" target="_blank" rel="noreferrer"> 
                        Pachyderm 
                    </a> 
                </li>
                <li> 
                    <a href="https://dvc.org/" target="_blank" rel="noreferrer"> 
                        DVC
                    </a>
                </li>
                <li> 
                    <a href="https://docs.wandb.ai/" target="_blank" rel="noreferrer"> 
                        WandB 
                    </a>
                </li>
            </ul>

            <h4>
                5.2.3 Data Reliability
            </h4>

            <ul>
                <li> 
                    <a href="https://greatexpectations.io/" target="_blank" rel="noreferrer"> 
                        Great Expectations
                    </a> 
                </li>
                <li> 
                    <a href="https://www.soda.io/" target="_blank" rel="noreferrer"> 
                        Soda
                    </a>
                </li>
            </ul>

            <h4>
                5.2.4 Labelling
            </h4>

            <ul>
                <li> 
                    <a href="https://github.com/doccano/doccano" target="_blank" rel="noreferrer"> 
                        Doccano
                    </a> 
                </li>
                <li> 
                    <a href="https://labelstud.io/" target="_blank" rel="noreferrer"> 
                        Label Studio
                    </a>
                </li>
                <li> 
                    <a href="https://github.com/openvinotoolkit/cvat" target="_blank" rel="noreferrer"> 
                        CVAT
                    </a>
                </li>
            </ul>

            <h3> 5.3 Systematic integration approach </h3>

            <p>
                Build a reusable data pipeline or project template that integrates all the elements needed to quickly put an Machine Learning model into production for a given task.
            </p>

            <p>
                The advantages are :
            </p>

            <ol>
                <li>
                    Validate the template once, so that you no longer have to deal with Data Maintenance and Data Reliability issues and can focus on the validity and fidelity of the data set construction.
                </li>
                <li>
                    Be very quick in putting a model into production for a given problem and then iterate on input data
                </li>
                <li>
                    Introduce business rules for a data pipeline to allow better integration with business experts (e.g. develop specific connectors for particular businesses to maximize integration with experts like doctors, lawyers, etc.)
                </li>
            </ol>

            <h2>
                6. Conclusion
            </h2>

            <p>
                Throughtout the article we have seen what Data Challenges are.
                We have tried to highlight their respective impact on Data Science projects thanks to existing studies on Data Cascades.
                We found that Data Cascades can have a critical impact on projects and from the start practionners should be aware of that. 
                Carefuly designing and building a data science project can considerably improve the odds of success and accelerate industrialisation as costly iterations can be avoided.
                The article lists some best practices and commonly used tools gathered among my collegues. 
                The list is not exhaustive and if you think of additionnal material, do not hesitate to reach out, I will be happy to add it.
                I hope the present article will help you to maximize your chances of succeeding in your Data Science projects.
            </p>

        </div>
    )
}
