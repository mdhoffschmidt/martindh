// import file from "./markdown.md";
import { Page } from "../../../components/page";
// import useMarkdownFile from "../../../hooks/useMarkdownFile";


export default function PageForArticle () {
    // const [ markdownComponent ] = useMarkdownFile(file);
    return (
        <Page>

            <h1>
                An overview of the NFT Market
            </h1>

            <p>
                Today I am at the NFT NYC conference, the biggest conference this year on NFTs.
                As the market is turning bearish, tt's an opportunity to reflect on the fundamentals of the market.            
            </p>

            <p>
                In the present articles I am trying to answer the following questions :
            </p>

            <ul>
                <li>
                    Where can you buy NFTs ? What are the most famous Platforms ? What are their rate takes ?
                </li>
                <li>
                    What can you buy ? How many collections are there, what’s their size , what are the most famous ones ?
                </li>
                <li>
                    Who is actually buying NFTs and how many of them ?
                </li>
            </ul>

            <p>
                The article is structured as follows :
            </p>

            <ol>
                <li>
                    Introduction on the market
                </li>
                <li>
                    Marketplaces
                </li>
                <li>
                    Collections
                </li>
                <li>                
                    Users and Wallets
                </li>
                <li>
                    Conclusion
                </li>
                <li>
                    Sources
                </li>
            </ol>

            <h2>
                1. Introduction
            </h2>

            <p>
                The first NFT was created in 2014 and the first NFT collection that started taking off was CryptoKitties on 2017. 
                Since then, the NFT market as grown a lot with thousands of collections, several marketplaces and hundred of thousands of transactions per day. 
                Below we will dive into the numbers. 
                To give the reader some basic number on the ecosystem here are some basic ones :
            </p>

            <ul>
                <li>
                    The total NFT secondary sales volume is equal to 23 million ethereums, i.e. around $68 billion (as of 8th of july)
                </li>
                <li>
                    The dominant marketplace to trade NFT si OpenSea, is a market dominance of about 70%
                </li>
                <li>
                    The total number of NFT trades is about 32 million trades
                </li>
            </ul>

            <h2>
                2. Marketplaces
            </h2>

            <p>
                The most popular market places are the following :
            </p>

            <table>
                <thead>
                    <tr>
                        <th>
                            MarketPlace
                        </th>
                        <th>
                            Creation (year)
                        </th>
                        <th>
                            Fees [%]
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            OpenSea
                        </td>
                        <td>
                            2017
                        </td>
                        <td>
                            2.5
                        </td>
                    </tr>
                    <tr>
                        <td>
                            LooksRare
                        </td>
                        <td>
                            2021
                        </td>
                        <td>
                            2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SuperRare
                        </td>
                        <td>
                            2018
                        </td>
                        <td>
                            3
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Foundation
                        </td>
                        <td>
                            2020
                        </td>
                        <td>
                            5
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Rarible
                        </td>
                        <td>
                            2020
                        </td>
                        <td>
                            2.5
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Larvalabs
                        </td>
                        <td>
                            2017
                        </td>
                        <td>
                            0
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                OpenSea is the dominant and the first NFT marketplace. It was created end of 2017 and owns today more than 70% of the marketshare. Then comes SuperRare created in 2018 followed by Rarible and Foundation in 2020 as well as LooksRare in 2021. All of them are commercial marketplace and they take take a fee on each transaction. Nota that LarvaLabs has it own non commercial market place to exchange crypto punks and meebits. Dune Analytics makes it easy for data analysts to look at the transactions of these marketplaces. The following table some numbers about the total trading volume, total transaction count and average volume per transaction of each of them.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>
                            MarketPlace
                        </th>
                        <th>
                            Total Trading Volume [million $]
                        </th>
                        <th>
                            Total Transaction Count [million]
                        </th>
                        <th>
                            Average transaction in [$]
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            Opensea
                        </td>
                        <td>
                            37 700
                        </td>
                        <td>
                            31.8    
                        </td>
                        <td>
                            1200  
                        </td>
                    </tr>

                    <tr>
                        <td>
                            LooksRare
                        </td>
                        <td>
                            26200
                        </td>
                        <td>
                            261.2
                        </td>
                        <td>
                            100  
                        </td>
                    </tr>

                    <tr>
                        <td>
                            LarvaLabs
                        </td>
                        <td>
                            2300
                        </td>
                        <td>
                            0.02
                        </td>
                        <td>
                            115000  
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Rarible
                        </td>
                        <td>
                            285.9
                        </td>
                        <td>
                            0.2981
                        </td>
                        <td>
                            960  
                        </td>
                    </tr>

                    <tr>
                        <td>
                            SuperRare
                        </td>
                        <td>
                            236.3
                        </td>
                        <td>
                            0.0274
                        </td>
                        <td>
                            8624  
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Foundation
                        </td>
                        <td>
                            174.4
                        </td>
                        <td>
                            0.0765
                        </td>
                        <td>
                            2278  
                        </td>
                    </tr>

                </tbody>

            </table>

            <p>
                The numbers clearly show that OpenSea is the leader both in terms of trading volume and number of transactions. However, Larvlabs has the highest average transaction. Almost 100 times higher than OpenSea. This is because Larvalabs allows the trading of only CryptoPunks and Meebits, which are bot in the top 10 of the most popular collections.
            </p>

            <h2>
                3. Collections
            </h2>

            <p>
                According to IntoTheBlock, there are more 120 thousands collections. Dune Analytics monitors and tracks about 30000 of them according their github repository. The table below tracks the most famous collections in terms of total transaction volume. In otherwords, the total volume is the sum of all the transactions that happenned of a specific collection since it was launched. The numbers below track the total volume per collection on the 6 above mentionned exchanges.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Collections</th>
                        <th>Total Volume [ETH]</th>
                        <th>Total Volume ($)</th>
                        <th>Supply</th>
                        <th>Owners</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Meebits</td>
                        <td>3112250</td>
                        <td>$8,979,437,346</td>
                        <td>20,000</td>
                        <td>6,594</td>
                    </tr>
                    <tr>
                        <td>Terraforms</td>
                        <td>2287737</td>
                        <td>$6,386,375,298</td>
                        <td>9,909</td>
                        <td>2,127</td>
                    </tr>
                    <tr>
                        <td>Terraforms</td>
                        <td>1790223</td>
                        <td>$5,208,278,961</td>
                        <td>9,909</td>
                        <td>2,127</td>
                    </tr>
                    <tr>
                        <td>CryptoPunks</td>
                        <td>836124</td>
                        <td>$2,341,449,720</td>
                        <td>10,000</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>dotdotdots</td>
                        <td>568277</td>
                        <td>$1,510,580,830</td>
                        <td>4,870</td>
                        <td>2,688</td>
                    </tr>
                    <tr>
                        <td>Bored Ape Yacht Club</td>
                        <td>485808</td>
                        <td>$1,540,330,800</td>
                        <td>10,000</td>
                        <td>6,451</td>
                    </tr>
                    <tr>
                        <td>Mutant Ape Yacht Club</td>
                        <td>415908</td>
                        <td>$1,317,629,491</td>
                        <td>19,423</td>
                        <td>13,161</td>
                    </tr>
                    <tr>
                        <td>dotdotdot</td>
                        <td>399244</td>
                        <td>$1,199,973,988</td>
                        <td>4.870</td>
                        <td>2,688</td>
                    </tr>
                    <tr>
                        <td>Art Blocks (Combined)</td>
                        <td>329488</td>
                        <td>$1,049,679,338</td>
                        <td>176,918</td>
                        <td>33,234</td>
                    </tr>
                    <tr>
                        <td>OtherDeed</td>
                        <td>299385</td>
                        <td>$793,640,112</td>
                        <td>100,000</td>
                        <td>34,343</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Numbers as of 26th June 2022.
            </p>

            <p>
                The tables gathers famouns collections you have probably heard about like Terraforms and Bored Ape Yacht Club. One notice that meebits is the clear leader with a total exchanged volume nearing $9 billion. (Note also that there are two Terraforms raws in the [query](https://dune.com/queries/108104/219433)).
            </p>

            <p>
                Overall, there are about 400 collections that have been traded above $6 million (or 5000 ETH) and there are about 3600 collections that have traded above $120,000 (or 100 ETH). If you consider that there are more than 120,000 collections, they respecively account for 3% and 0.25% of the collections. In other words, there are only a handfull of collections that are successful. 
            </p>
            
            <p>
                If you want to have a closer look at the market share of the top collections, the following table shows the total market share for the top 5, 10, 15, and 25 collections according to the total exchanged volume. One notices that half of the total NFT Market volume is made by only 25 collections and more than a third by 5 collections only.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>
                            Top collection
                        </th>
                        <th>
                            Share of total exchanged volume
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            top 5
                        </td>
                        <td>
                            36.9%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            top 10
                        </td>
                        <td>
                            45.1%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            top 15
                        </td>
                        <td>
                            49.8%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            top 25
                        </td>
                        <td>
                            53.6%
                        </td>
                    </tr>
                </tbody>
            </table>


            <p>
                Numbers as of 26th June 2022.
            </p>

            <h2>
                4. Users
            </h2>

            <p>
                One user can have many wallets. As it is easy on MetaMask to manage several wallets, users tend to have many to minimize risks in case of hacking. For that reason, users often distribute their collections among various wallets. It is therefore hard to know exactly the user’s collection and how many of them are actually collecting NFTs. However, it is still possible to look at the assets detained by the wallets and their transactions. Finally, the most commonly used blockchains to mint and transact NFTs are Ethereum, Polygon and Solana. Let’s first see how many wallets are actually owning and trading NFTS. And second, let’s see their activies. 
            </p>

            <p>
                First, looking at the Ethereum blockchain only, one notices that there are about 5 million wallets that have ever owned an NFT, i.e. a ERC-721 or ERC-1155 token. ([Source](https://dune.com/queries/201622/376266)). By means of comparison, [IntoTheBlock](https://app.intotheblock.com/insights/nft) reports that there currently over 4 million addresses that owns at least one NFT, i.e. 5% of the allet. (However it is not clear if they are talking about the Ethereum blockchain only). When we look at [OpenSea](https://dune.com/rchen8/opensea) only, the total number of traders for the Ethereum, Polygon and Solana blockchain gives the following breakdown :
            </p>

            <ul>
                <li>
                    Total OpenSea traders over time on Ethereum 1.8M+ (<a href="https://dune.com/queries/2877/5680"> Source </a>)
                </li>
                <li>
                    Total OpenSea traders over time on Pologyon 1.3M+ (<a href="https://dune.com/queries/130852/257620"> Source </a>)
                </li>
                <li>
                    Total OpenSea tradrs over time on Solana : 60k+ (<a href="https://dune.com/queries/581807/1087500"> Source </a>))
                </li>
            </ul>

            <p>
                Note that they are the registered users who have made at least one transaction. 
            </p>

            <p>
                Second, when we look at all the <a href="https://dune.com/queries/577006/1078866"> 6 platforms supported by Dune </a> we see that the number of monthly traders in June 2022 is about 300,000 traders. 
                Monthly traders are the wallets that have done at least on buy or sell transaction, all distincts. 
                Their number peaked at half a million traders in January 2022 and a year ago in June 2021 their were about 50,000.
                On a year to year basis, it means a 600% activity increase in terms of unique adresses trading. 
            </p>

            <p>
                On the monthly trade count, this June was about 3 million trades while there were about 5 million trades at the peak in april. 
                June last year there were about 220 thousands trades. 
                It means that on a year to year basis the number of trades as increased by more than a factor 10.
            </p>

            <p>
                If you consider the montly traders from January 2021 to June 2022, by June 2023 there should be 1 million monthly traders and 2 million by 2025 about (if you project the numbers linearly). 
                On the trade count side, there should be 7.5 million monthly trade by next year and about 14 million by June 2025 (again if you project the numbers linearly).
            </p>

            <h2>
                5. Conclusion
            </h2>

            <p>
                Today, the market is rather bearish. 
                The Bitcoin and Ethereum prices have dropped significantly. 
                This situation has also cooled down the NFT market. 
                It will take some time before the NFT market meets again the same eufforia that characterized the market a few months ago. 
                However let’s highlight that what once before was a niche market in the crypto space has now become one of the hot spaces and there is yet room to increase. 
                Indeed, there a only about 5% of the wallets that hold at least one NFT and there is no reason that number should not increase. 
            </p>

            <p>
                Collectibles have been the main use case of the current 2021 and 2022 NFT hype. 
                Indeed, the average transaction volume is above thousands of dollars and even higher for top collections such as Meebits and Cryptopunks. 
                However, one observes more and more marketing NFTs such as Poaps. 
                These use cases have emerged thanks to decreasing transaction costs while more and more NFTs are minted on the Polygon blockchain.
            </p>

            <p>
                Many collections exist, more than 120 thousands. 
                That number is only going to increase in the future. 
                First because creators will progressively realize that they have a high incentive to distrubute their content in the form of NFT because the Web3 platform have a much lower take rate than the Web2 platform. 
                Second, from a technological point of view, NFTs are very portable and meet some level of interface standardization (altough many will tell the contrary). 
                For that reason, it is very easy for developpers in develop tools like CRM, BI analyics, node code collection generation platforms, etc. that will make easy the creator and user experience in the Web3. 
            </p>

            <p>
                In conclusion, we have seen the collectible NFT hype emerge over the past two year, the next one will be on utility and marketing tokens for a much broader audience.
            </p>

            <h2>
                6. Sources
            </h2>

            <p>
                The numbers are taken from the following sources :
            </p>

            <ul>
                <li>
                    <a href="https://dune.com/hildobby/NFTs"> Dune Analytics:@hildobby/NFTs </a>
                </li>
                <li>
                    <a href="https://dune.com/thomas_m/NFT-stats"> Dune Analytics:@thomas_m/NFT Market Overview </a>
                </li>
                <li>
                    <a href="https://dune.com/sealaunch/NFT"> Dune Analytics:@Sealaunch/NFT Market Overview </a>
                </li>
                <li>
                    <a href="https://app.intotheblock.com/insights/nft"> IntoTheBlock insight on NFTs </a>
                </li>                        
            </ul>

        </Page>
    );
}
