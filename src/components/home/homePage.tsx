import { Page } from "../commons/page";


const Home = () => {
    return (
        <div>

            <h1>
                About
            </h1>

            <p>
                I am currently working on a Web3 project with the mission to bring NFTs in the real world.
                The latest wave of innovation in the NFT space was driven by speculation.
                It's now time to make them useful to anyone holding them and drive mass adoption.
                I have been around the crypto space since 2017, watched it mature and I believe it's the right moment to join the movement of builders, again.
            </p>

            <p>
                I have co-founded and run Formativ as CTO in 2021.
                Our mission was to source ESG data in a transparent, traceable and systematic way to provide the highest data quality to our clients.
                Previous to that, I was Lead Data Sciencist at Illuin Technology, an AI start up based in Paris who's goal is to bridge the research & development world with real industrial use cases.
                Finally, my first experience as an entrepreneur dates back to 2017 when, being still a student, I started building bots on crypto-currency exchanges.
                In droped out from my PhD program in Hydrogen Fuel Cell research and created a crypto market making company.
            </p>

            <p>
                I graduated with a Master Degree in Mechanical Engineering from École Polytechnique Fédérale de Lausanne with a major in Control Systems and Optimisation and a minor in Energy Engineering.
                I accomplished my Master Thesis at UC Berkeley working on the implementation of Curiosity driven Agents applied to Autonomous Race Driving.
                It is there that I dit my first steps in Deep Learning, building Neural Network from scratch in C to make them work inside microcontrollers.
            </p>

        </div>
    )
}

export const HomePage = () => {
    return (
        <Page main={ <Home/> }/>
    );
}