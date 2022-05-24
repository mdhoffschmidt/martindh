export default function Article2 () {
    return (
        <div>

            <h1> 
                Data Challenges: Part 2
            </h1>

            <h2>
                Introduction
            </h2>

            <p>
                Adopting a Data Centric approach to a Machine Learning project will probably leave you wondering what steps will lead you there. 
                Improving the data rather than the model seems quite obvious since everyone knows that the garbage in yields garbage out. 
                The previous article discussed the different challenges that must be overcome to reach Data Excellence. 
                The goal was to formalize what are the data challenges a Data Scientist might encounter and what impact they can have on a Machine Learning project. 
            </p>

            <p>
                The aim of the present article is to bring some additional elements on the data challenges encountered by data scientists by carrying out a so-called User Research among our peers. 
                We have interviewed data scientists to understand the problems they face most often and how they solve them. 
                For each user, we identify one or more problems. 
                The results are then aggregated by problem and each of them is associated with a specific problem category. 
                We hope that the present research and article will help practitioners identify their problems and associated solutions. 
            </p>

            <h2>
                Goals
            </h2>

            <p>
                The goals of the present articles are :
            </p>

            <ol className="list-decimal">

                <li>
                    Identify the most recurring pain points that data scientists encounter in their daily tasks related to data handling. We want to collect as much feedback as possible on good practices and solutions that are commonly used to solve data related problems.
                </li>

                <li>
                    Share the outcome of the short study via the present article to the interviewed data practitioners and for anyone interested in the topic or facing data related issues. We hope it will help them identify solutions to some problems and build robust projects.
                </li>

                <li>
                    If a recurring pain point is undercovered for which no satisfactory solution exists to date, we would consider the building of a solution to address that problem.
                </li>

            </ol>

            <h2>
                Methodology
            </h2>

            <p>
                For each interview, we ask 5 questions :
            </p>

            <ol className="list-decimal">

                <li>
                    What is difficult about your problems at handling data ?
                </li>

                <li>
                    When was the last time you encountered the problem ?
                </li>

                <li>
                    Why is it difficult ?
                </li>

                <li>
                    What solutions are you using to solve the problem ?
                </li>     

                <li>
                    What do you not like about the solution ?
                </li>                

            </ol>

            <p>
                These questions are also known as the Mom test. We choose to adopt this approach because of our third goal.
            </p>

            <p>
                Answering the first question, the user should highlight a pain point he or she is encountering. 
                Asking the first one may trigger various reactions and many problems can be enumerated. 
                If so, it’s a good start. 
                This is the reason why the second question is important, to put some context around the problem and narrow down its scope. 
                The third question helps you identify more specifically the root causes of the problem. 
                The fourth one helps you understand if the problem is bad enough such that the user tries to find a solution. 
                And if yes, the fifth one helps you identify why the current solution is not good enough. 
                This last one usually gives hints towards the features to be developed for a potential solution.
            </p>

            <p>
                It might be difficult to reach out to unknown people and ask them questions. 
                his is why having a clear idea of the questions to ask is important. 
                First it will make the study more objective and second you minimize the risks of being lost while discussing.
            </p>            

            <h2>
                Results
            </h2>

            <p>
                We have interviewed more than 30 Data Scientists over a three weeks time period. 
                They are from various backgrounds, seniority and responsibility level. 
                They are mostly located in France. A strong majority of them are men.
            </p>

            <p>
                From the collected feedbacks we have identified four main categories of problems :
            </p>

            <ol>
                
                <li> 
                    Data Management 
                </li>

                <li> 
                    MLOps
                </li>

                <li>
                    Labeling
                </li>

                <li>
                    Expert collaboration
                </li>

            </ol>

            <p>
                <span className="font-bold"> Data Management </span> refers to data collection, transformation, storage, accessibility and security. 
                Note that we understand these tasks take place before any model is trained and labeled.
            </p>

            <p>
                <span className="font-bold"> MLOps </span> refers to Machine Learning Models' lifecycle tasks such as model training, re-training, evaluation, versioning, inference, performance analytics, etc.
            </p>

            <p>
                <span className="font-bold"> Labeling </span> refers to the task of annotating a data sample. This task usually involves the user but also experts or a team of annotators. 
            </p>

            <p>
                <span className="font-bold"> Expert collaboration </span> refers to the process of translating the problem of the client expert into technical features that the technical expert or data scientist will be able to implement. 
                This step requires close collaboration and good communication to ensure the success of a Machine Learning project.
            </p>

            <table className="my-4 table-auto">

                <thead>
                    <tr>
                        <th> Category </th>
                        <th> Definition </th>
                        <th> % of participants </th>
                        <th> # of participants </th>
                        <th> Difficulty </th>
                        <th> Solutions </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="align-middle">
                            Data Management
                        </td>
                        <td className="align-middle">
                            Data collection, curation, discovery, transformation, storage, accessibility and security
                        </td>
                        <td className="text-center align-middle">
                            44.1
                        </td>
                        <td className="text-center align-middle">
                            15
                        </td>
                        <td>
                            <ul>
                                <li> Access to clean / relevant / specific data for a customer use case and directly usable </li>
                                <li> Infrastructure and scalability issues </li>
                                <li> Frictions on data life cycle stages </li>
                                <li> Data Engineering skills required </li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li> Implementation of a Robust Framework </li>
                                <li> Tidy Datasets application </li>
                                <li> Being careful with across the data lifecycles </li>
                                <li> Entreprises : Aquarium Learning, Scenebox </li>
                                <li> Cloud providers : AWS S3, GCP, Azure </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="align-middle">
                            MLOps
                        </td>
                        <td className="align-middle">
                            Machine Learning models in production, maintenance, versioning, retraining, dataset versioning
                        </td>
                        <td className="text-center align-middle">
                            29.4
                        </td>
                        <td className="text-center align-middle">
                            10
                        </td>
                        <td>
                            <ul>
                                <li> Understanding the right tools </li>
                                <li> Gap between the research and production phase </li>
                                <li> Put machine learning models into production with the required computational resources </li>
                                <li> Access pre-trained models </li>
                                <li> Learning : become competent </li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li> Cloud providers: Azure / AWS, SageMaker / GCP </li>
                                <li> Entreprises: HuggingFace / WandB / Pachyderm / DVC / ClearML </li>
                                <li> Open Source : MLFlow </li>
                            </ul>
                        </td>
                    </tr>                    
                    
                    <tr>
                        <td className="align-middle">
                            Labeling
                        </td>
                        <td className="align-middle">
                            Data labeling / annotation
                        </td>
                        <td className="text-center align-middle">
                            14.7
                        </td>
                        <td className="text-center align-middle">
                            5
                        </td>
                        <td>
                            <ul>
                                <li> Need to build a specific graphic interface </li>
                                <li> Slow annotation cycles processes </li>
                                <li> Quality annotated data required </li>
                                <li> Difficult to involve the client expertise to annotate </li>
                                <li> Hard to iterate between the annotation process and mode training </li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li> Open Source: Doccano / CAVt, LabelStudio / etc </li>
                                <li> Commercial: Prodigy / Super Annotate / Kili Technology / etc </li>
                                <li> Outsourced </li>
                            </ul>
                        </td>
                    </tr>   

                    <tr>
                        <td className="align-middle">
                            Expert Collaboration
                        </td>
                        <td className="align-middle">
                            Collaboration between the client and the technical experts
                        </td>
                        <td className="text-center align-middle">
                            11.8
                        </td>
                        <td className="text-center align-middle">
                            4
                        </td>
                        <td>
                            <ul>
                                <li> Lack of professional knowledge </li>
                                <li> Hard to evaluate the outcome of the models </li>
                                <li> Data documentation </li>
                                <li> Regular interaction between client and technical experts </li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li> Dataiku / Palantir Foundry </li>
                                <li> Agile framework developed for data projects </li>
                                <li> Close interaction between client and technical experts </li>
                                <li> Documentation: DBDoc / CastorDoc </li>
                            </ul>
                        </td>
                    </tr> 

                </tbody>

            </table>


            <h2>
                Discussion
            </h2>

            <p>
                MLOps is a very hot topic and there are many solutions when it comes to model deployment, monitoring, etc. 
                Well known and popular solutions such as WandB and HuggingFace are often cited by the users. 
                The big cloud providers propose solutions such as SageMaker of AWS. 
                Many data scientists told us they found it difficult to master these tools. 
                It takes some time and effort to learn using them. 
                However new solutions make it easier to get smoothly through the deployment process. 
                In addition to that, people are often not interested in investing heavy ressources for proper MLOps tools if you can’t evaluate the business outcome of adopting them. 
                MLOps is a recurring problem and there are many solutions. 
                If they are not always good enough, we think the ecosystem is relatively rich and developing fast. 
                Therefore, these problems should become easier to solve with time.
            </p>

            <p>
                Labeling is core to most if not any Machine Learning project. 
                We find it actually surprising that no single solution exists to cover this wide problem such as Pytorch or Tensorflow to design Neural Networks. 
                The reason might be due to the many existing open source projects that are “good enough” for most use cases. 
                It is the case for Doccano or LabelStudio for example. 
                Other existing solutions such as Prodigy were often cited but are perceived as too expensive even though their lifelong license remains relatively cheap we think. 
                Other solutions such as Killy Technology and SuperAnnote differentiate themselves through a rich environment for collaboration and a strong SDK for active learning purposes. 
                Finally, we also found out that people tend to outsource the labeling process. 
                It is especially the case when the data is not sensitive and/or when no specific expert knowledge is required.  
            </p>

            <p>
                Data Management is a wide topic. 
                We are therefore not surprised that most of the problems fall into that category. 
                However it is surprising to find that most of the problems are usually manually solved or can't be addressed by the data scientists. 
                Most Data Management related problems take root in Data Engineering problems. 
                Data Scientists often lack the relevant skills to solve the problems related to data storage, accessibility or efficient curation tools. 
                The problem is especially painful when encountered at the dataset building level as it slows down the practitioners considerably. 
                We found some young companies addressing these issues in the image or video area such as AquariumLab and SceneBox. 
                Note however that they have not been cited across the user research. 
                We conclude here that there is some room here for innovation.
            </p>

            <p>
                Expert collaboration issues arise very often when data scientists don’t have the required domain knowledge to judge their own experiments or must wait for the feedback of their colleagues or clients to make a decision. 
                We find here that data documentation is a must have to make sure the data scientists can work autonomously. 
                To minimize the communication friction, we found that teams elaborate rigorous work frameworks to make sure no or the least possible friction is encountered through the project by adopting agile methods. 
                This is especially the case for consultants and freelancers. 
                Big players such as Dataiku and Palantir have built enterprise wide platforms where clients and tech players can easily interact and collaborate on projects.
            </p>

            <h2>
                Conclusion
            </h2>

            <p>
                We have conducted a survey among more than 30 data scientists to find out what are the most painful problems they face in their everyday life. 
                This survey highlights four main categories of problems. 
                By decreasing order they are: Data Management, MLOps, Labeling and Expert Collaboration. 
                While the size of the survey remains relatively small, we conclude that Data Management is probably one of the most unaddressed problem categories. 
                We did not conduct a thorough search on the topic but we found out that some young start-ups intend to propose solutions to these problems. 
                We therefore believe that Data Management solutions would provide fertile ground for future innovation.
            </p>

        </div>
    )
}
