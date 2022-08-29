export const Meta = {
    "date": new Date("2022-07-29"),
    "tags": ["Crypto Currencies", "Web3", "NFT"],
    "title": "How many users are there really in the NFT space",
}

export const Abstract = () => {
    return (
        <div>
        
        </div>
    );
}

export const Article = () => {
    return (
        <div>

            <h1> 
                { Meta.title }
            </h1>

            <p>
                <a href="https://www.mckinsey.com/business-functions/growth-marketing-and-sales/our-insights/value-creation-in-the-metaverse">
                    Last June, McKinsey released a report predicting that $5 trillion can potentially be generated from the Metaverse by 2030.
                </a>
                And the NFT technology has a central role the play in the Metaverse.
                Why ? 
                The Non Fungible Token is made alive thanks to a Smart Contract and yiels something unique, sometimes scarce in the virtual world.
            </p>

            <p>
                However, two years ago, almost nobody had barely heard of NFTs.
                Back then, Crypto Punks were almost unknown and Bored Apes didn't even existed yet.
                But today, every major brand has a plan to release the collectibles in the Metaverse.
                It is for instance the case of Coca Cola or Lacoste.
                And meanwhile, Facebook got rebranded as Meta.
            </p>

            <p>
                The question the present article tries to answer : how many are really using NFTs today and who are there ?
                To answer these questions, we will first have a look at the number of users in the crypto space.
                Second, it will give us a better overview of the share of wallets actually using NFTs and we will discuss some user estimations.
                Finally, we will see briefly what the future looks like for the growth of the NFT space.
            </p>

            <h2>
                1. The number of crypto users
            </h2>

            <p>
                The most straightforward way to have a an upper bound on the number of users for a specific blockchain is to watch at the total number of addresses used to perform transactions.
                Thanks to Dune Analytics it is easy to find these numbers for the Ethereum, Solana et Polygon.
                These are indeed the most widely used blockchains for NFTs and they are supported by OpenSea.
                Ethereum has the biggest number of addresses with more than <a href="https://dune.com/queries/651474/1210762"> 210 million of wallets </a>, followed by Solana with 13+ million and Polygon has 1.4 million.
                The table below gathers the numbers with the sources.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>
                            Blockchain
                        </th>
                        <th>
                            Number of wallets [millions]
                        </th>
                        <th>
                            Dune Dashboard
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Ethereum
                        </td>
                        <td>
                            210
                        </td>
                        <td>
                            <a href="https://dune.com/hildobby/Ethereum-Overview">
                                Hildobby, Ethereum-Overview
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Solana
                        </td>
                        <td>
                            13
                        </td>
                        <td>
                            <a href="https://dune.com/danning.sui/Solana-User-Base">
                                Danning.sui, Solana-User-Base
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Polygon
                        </td>
                        <td>
                            1,4
                        </td>
                        <td>
                            <a href="https://dune.com/datanut/Polygon-MATIC">
                                Datanut, Polygon-Matic
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                According to <a href="https://a16zcrypto.com/state-of-crypto-report-a16z-2022/"> a16z </a>, the number of active Ethereum users in May 2022 is estimated to range from 7 to 50 million.
                There are 7 million adresses transacting monthly 50 million transaction every year.
                And there are approximately 25 million adresses with a balance of at least 0.01 ETH.
            </p>

            <p>
                The number of addresses provides an upper bound on the number of real users.
                Indeed, in the best case scenario each user has a only a single wallet.
                This is of course not the case. 
                Users in fact have several wallets for security reasons.
                So, how many real users are there really ?
                It is hard to say from wallet analysis only.
                But keep in mind that it provides a theoretical upper bound limit on the number of users.
            </p>

            <p>
                If we focus our analysis on Ethereum, the most widely used wallet is MetaMask.
                Last year, August 2021, <a href="https://consensys.net/blog/press-release/metamask-surpasses-10-million-maus-making-it-the-worlds-leading-non-custodial-crypto-wallet/"> Consensys claimed that MetaMask surpassed 10 million monthly active users. </a>
                In contrast there were about 500,000 monthly active users back in July 2020, i.e. a 1,800% growth.
                Today, that number would be as high as <a href="https://www.shellypalmer.com/2022/03/metamask-tops-30-million-users/"> 21 million active users </a>.
            </p>

            <p>
                The number of MetaMask users is close to middle of the range mentionned by <a href="https://a16zcrypto.com/state-of-crypto-report-a16z-2022/"> a16z </a>.
                While MetaMask is very popular it has not 100% market share.
                And therefore we can estimate consider that Ethereum could have about 25 million active users.
                Of course this number must be taken into consideration carrefuly as it is just an estimate and if you see any inconsistensies here please contact me.
            </p>

            <h2>
                2. How many NFT users
            </h2>

            <p>
                To have an estimate of the number of real NFT users, let's apply the same methodology.
                First, how many adresses have ever owned a NFT.
                Second, let's see how we can estimate the number of real users in the NFT Space.
                For the sake of simplicity we will stick to Ethereum.
            </p>

            <p>
                There are <a href="https://dune.com/queries/201622/376266"> 5.59 million </a> wallets that have ever owned a NFT according to Dune Analytics.
                More specificaly, wallets that have owned an ETH ERC-721 or ERC-1155 token on the Ethereum Blockchain.
                It represents 2.6% of the total number of adresses on the Ethereum blockchain or 10% of the 50 million wallets that transact at least once a year.
                Note that back 1th of January this year that number was about 2.8 million addresses.
                Since then, the number of adresses grew by a factor of 2.
                So, the maximum number of NFT users on Ethereum is 5.59 million (given every address kept its NFT and every address represent a single user).
            </p>

            <p>
                According to the <a href="https://www.ft.com/content/e95f5ac2-0476-41f4-abd4-8a99faa7737d"> Financial Times </a>, there are 360,000 addresses owning at least one NFT in 2021.
                Note that the Whales, 9% of the entire group, hold 80% of the market value.
                And that means therefore that in 2021, there were maximum 360,000 real users owning at least one NFT, i.e. 360,000 active users.
                If we consider the same growth ratio from end 2021 to July 2022, it means there would be an upper bound of 720,000 active NFT users on the Ethereum blockchain only.
            </p>

            <p>
                Finally, it is likely that adding NFT active users from the Polygon and Solana spaces, that number would go up by several tens if not hundred of thousands of users.               
            </p>

            <h2>
                3. Who are the active NFT users
            </h2>

            <p> 
                Let's first start with geographies.
                The State of Web3 <a href="https://go.chainalysis.com/2022-web3-report.html">ChainAnalysis report</a> is a good source to start from.
                The analysis of the web traffic on the popular marketplaces shows that users comes mainly from Central and Southern Asia (25%), North America (23%) and Western Europe(19%).
                They are followed by Latin America (10%), Eastern Asia (9%) and Eastern Europe (5%).
            </p>

            <p>
                Second, to better understand who they are we can watch at the OpenSea web traffic statistics given by <a href="https://www.similarweb.com/fr/website/opensea.io/#overview"> Similarweb</a>.
                Altough there many more marketplaces, the OpenSea numbers should be close to the real ones as it is by far the largest marketplace.
                There, we observe that most of the users are men with 71% of the traffic whereas women account for 29%.
                In addition to that, by age, 36% of the users are between 25 and 34 years old. 
                Second comes users betweeen 18 and 24 years old with 26% of the traffic.
                And third comes users aged between 35-44 years old with 18% of it.
            </p>

            <p>
                Third, the State of Web3 <a href="https://go.chainalysis.com/2022-web3-report.html"> ChainAnalysis report </a> gives an analysis about the wallet age of NFT holders.
                They found that tusers carrying their first NFT transaction are generaly younger than users using other services such as DEX, Bridges or Lending contracts.
                They further state that : "NFTs grew because they attracted people who, while they may not have yet owned any cryptocurrency, cared about art and entertainment. Web3 operators should follow that example and build protocols that address broader market needs".
                Will NFT be the vector enabling crypto mass adoption ?
            </p>

            <h2>
                4. Future of NFT users
            </h2>

            <table>

                <thead>
                    <tr> 
                        <th className="text-left"> Indicators </th>
                        <th> 31th December 2021 </th>
                        <th> 31 July 2022 </th>
                        <th> 2030 </th>
                    </tr>
                </thead>

                <tbody>
                    
                    <tr> 
                        <td className="text-left"> Total number of user addresses </td> 
                        <td> 129 million (<a href="https://dune.com/queries/1103912/1884830"> Dune </a>) </td>
                        <td> 145 million (<a href="https://dune.com/queries/1103912/1884830"> Dune </a>) </td> 
                        <td> (<a href="https://a16zcrypto.com/state-of-crypto-report-a16z-2022/"> a16z </a>) </td>
                    </tr>

                    <tr> 
                        <td className="text-left"> Estimated number of active addresses </td> 
                        <td> 25 million(<a href="https://a16zcrypto.com/state-of-crypto-report-a16z-2022/"> a16z </a>) </td>
                        <td> 29 million (estimated) </td>
                        <td> 1 billion (<a href="https://a16zcrypto.com/state-of-crypto-report-a16z-2022/"> a16z </a>) </td>
                    </tr>

                    {/* <tr>
                        <td className="text-left"> Monthly MetaMask users </td>
                        <td> 21 million </td>
                        <td> </td>
                        <td> </td>
                    </tr> */}

                    <tr> 
                        <td className="text-left"> Number of addresses that bought or sold a NFT </td> 
                        <td> 2.8 million </td> 
                        <td> 5.6 million </td>
                        <td> 
                            <div> 50 million [1] </div>
                            <div> 100 million [2] </div> 
                        </td>
                    </tr>

                    <tr> 
                        <td className="text-left"> NFT traders over total users </td> 
                        <td> 2.2% </td> 
                        <td> 3.9% </td>
                        <td> 
                            <div> 5.0% [1] </div>
                            <div> 10% [2] </div>
                        </td>
                    </tr>

                    <tr> 
                        <td className="text-left"> Number of addresses holding at least one NFT </td>
                        <td> 360,000 (chainanalysis) </td> 
                        <td> </td>
                        <td> 
                            <div> 25 million [1] </div>
                            <div> 50 million [2] </div>
                        </td>
                    </tr>

                    <tr> 
                        <td className="text-left"> NFT holders over active users </td> 
                        <td> 1.4% </td> 
                        <td> </td>
                        <td> 
                            <div> 2.5% [3] </div>
                            <div> 5.0% [4] </div>
                        </td>
                    </tr>


                </tbody>

            </table>



{/* Pool d’utilisateurs qui utilisent des NFTs aujourd'hui : < 1,000,000
Dénoté Pool A pour la suite
Pool d’utilisateurs potentiels immédiats
Dénoté Pool B pour la suite
Il s’agit d’utilisateurs actif dans le monde crypto qui ont un wallet et par conséquent ne doivent pas être éduqués dans l’immédiat
Il en y a environ 20 million aujourd’hui (min 7- et max 50 million selon A16Z)
Comment est-ce que le Pool B va évoluer ? [source A16Z]
2024 : 100 million d’utilisateur actifs (x5 par rapport à aujourd’hui)
2030 : 1 milliard d’utilisateurs actifs (x50 par rapport à aujourd'hui)
Comment est-ce que le Pool b va évoluer ?
Le Pool A représente 5% de Pool B aujourd'hui.
Début 2021 ce chiffre était 1.3% [source]
En restant conservateur donc on peut estimer le nombre d’utilisateurs à 5 million d’ici 2024 et 50 million d’ici 2030
Est-ce que le pool A sera forcement nourri du pool B ou est-ce qu’il peut y avoir de nouveaux dans le pool A sans passer par le pool B?
Qui sont les utilisateurs du Pool A ?
OpenSea [Source similarweb]:
répartition par genre : femmes (28%) / hommes (72%)
répartition par âge : 18-24 (26%) / 25-34 (36%) / 35-44 (18% ) / 45+ (20%)
Comme OpenSea représente 70% du marché des NFTs, faire l’hypothèse que ces statistiques sont représentatives du Pool A dans son ensemble n’est pas absurde */}


        </div>
    );
}
