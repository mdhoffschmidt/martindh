import { Page } from "../../components/page";
import { AccomplishmentItem } from "../../components/accomplishmentItem";
import { ExperienceItem } from "../../components/experienceItem";


export default function ExperiencePage() {
    return (
        <Page>
                
            <h1>
                Experiences
            </h1>

            <h2>
                Professional
            </h2>

            <div className="flex flex-col justify-start items-start">

                <ExperienceItem
                    title="Entrepreneur in Residence"
                    company="Otium"
                    companyLink="https://www.otiumcapital.com"
                    period="Jun 2021 - now"
                    location="Paris, France"                    
                />

                <ExperienceItem
                    title="Co-founder, CTO"
                    company="Formativ"
                    companyLink="https://www.formativ.ai/"
                    period="Jun 2021 - Dec 2022"
                    location="Paris, France"                    
                />

                <ExperienceItem
                    title="Lead Data Scientist"
                    company="Illuin Technology"
                    companyLink="https://www.illuin.tech/"
                    period="Dec 2018 – May 2021"
                    location="Paris, France"
                    description="
                    As a Lead Data Scientist I was in charge of planing and organisating the Research & Development roadmap and more specificaly in Deep Learning for NLP tasks.
                    My responsibilies included also actively taking part to the recruitment processes to grow the Data Science team as well as Business Development.
                    "
                />

                <ExperienceItem
                    title="Co-founder"
                    company="Mnemex"
                    period="Jan 2018 – Nov 2018"
                    location="Lausanne, Switzerland"
                    description="
                    Mnemex is a project whose goal is to explore the use of Deep Learning and Deep Reinforcement Learning Algorithms to develop new innovative trading strategies:
                    Develop and manage an efficient database architecture to handle time series data efficiently
                    Apply Deep Learning techniques for classification and regression of financial data
                    Develop autonomous trading strategies using Deep Reinforcement Learning algorithms such as DQN and DDPG
                    "
                />

            </div>

            <h2>
                Academic
            </h2>

            <div className="flex flex-col justify-start items-start">

                <ExperienceItem
                    title="Research Scientist"
                    company="Ecole Polytechnique Fédérale de Lausanne"
                    companyLink="https://www.epfl.ch/labs/gem/"
                    period="Jan 2017 – Dec 2017"
                    location="Lausanne, Switzerland"
                    description="
                    Fuel Cells have a huge potential for energy production and storage applications. The GEM Group focuses on Research and Development of Solid Oxide Fuel Cells and Electrolysers and I had the chance to work with them on several very interesing topics
                    Research on the advanced modelling of a Solid Oxide Fuel Cell system Model and design heat exchangers for Solid Oxide Electrolyser applications Research on the implementation of Real Time Optimisation to a simulated Solid Oxide Fuel Cell system for optimal power tracking
                    "
                />

                <ExperienceItem
                    title="Master Thesis"
                    company="University of California Berkeley"
                    companyLink="https://www.berkeley.edu/"
                    period="May 2016 – Dec 2016"
                    location="Berkeley, USA"
                    description="
                    Master Thesis at the MPC Lab :
                    Title: On the implementation of an Active Learning Model Predictive Controller
                    Grade: 5.5 / 6
                    "
                />

                <ExperienceItem
                    title="Master Student"
                    company="The Swiss Federal Institute of Technology in Lausanne"
                    companyLink="https://www.epfl.ch/en/"
                    period="Sep 2014 – Sep 2017"
                    location="Lausanne, Switzerland"
                    description="
                    Master of Science in Mechanical Engineering.
                    Specialisation in Control systems and Optimization.
                    Minor in Energy Engineering.
                    Grade: 5.58 / 6.
                    "
                />

                <ExperienceItem
                    title="Bachelor Student"
                    company="École Polytechnique de Louvain-la-Neuve"
                    companyLink="https://uclouvain.be/en/faculties/epl"
                    period="Sep 2011 – Sep 2014"
                    location="Louvain-la-Neuve, Belgium"
                    description="
                    Bachelor of Science in Engineering.
                    Major in Mechanical Engineering.
                    Minor in Electrical Engineering.
                    Graduated Cum Laude.
                    "
                />

            </div>

            <h2>
                Accomplishment
            </h2>

            <div className="flex flex-col justify-start items-start">

                <AccomplishmentItem
                    title="Deep Learning Specialisation"
                    titleLink="https://www.coursera.org/specializations/deep-learning"
                    university="DeepLearning.ai"
                    period="Oct 2018"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/specialization/RGRTVYC3NFWK"
                />

                <AccomplishmentItem
                    title="Convolutional Neural Networks"
                    titleLink="https://www.coursera.org/learn/convolutional-neural-networks?specialization=deep-learning"
                    university="DeepLearning.ai"
                    period="Oct 2018"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/GYSPGWN2WR6P"
                />

                <AccomplishmentItem
                    title="Sequence Models"
                    titleLink="https://www.coursera.org/learn/nlp-sequence-models"
                    university="DeepLearning.ai"
                    period="Oct 2018"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/MTK2RPAHT6EM"
                />

                <AccomplishmentItem
                    title="Structuring Machine Learning Projects"
                    titleLink="https://www.coursera.org/learn/machine-learning-projects?specialization=deep-learning"
                    university="DeepLearning.ai"
                    period="Apr 2018"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/4FW8XLXM5QJZ"
                />  

                <AccomplishmentItem
                    title="Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization"
                    titleLink="https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning"
                    university="DeepLearning.ai"
                    period="Apr 2018"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/EEUVKVYGHVJB"
                />  

                <AccomplishmentItem
                    title="Neural Networks and Deep Learning"
                    titleLink="https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning"
                    university="DeepLearning.ai"
                    period="Oct 2017"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/N8UEWCEH22CT"
                />                

                <AccomplishmentItem
                    title="Neural Networks for Deep Learning"
                    titleLink="https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning"
                    university="University of Toronto"
                    period="Oct 2017"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/HNNZB6D3AZ24"
                />

                <AccomplishmentItem
                    title="Machine Learning"
                    titleLink="https://www.coursera.org/learn/machine-learning"
                    university="Stanford"
                    period="Nov 2016"
                    platform="Coursera"
                    certificate="Certificate"
                    certificateLink="https://www.coursera.org/account/accomplishments/verify/LC4UKZATTZDB"
                />

            </div>

        </Page>
    );
}
