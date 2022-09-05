export const Meta = {
    "date": new Date("2022-08-19"),
    "tags": ["NFT Marketplace", "Web3", "NFT"],
    "title": "Traffic Analysis on NFT Platforms",
}

export const Abstract = () => {
    return (
        <div>
            Blockchain users like the decentralized nature of the assets they hold.
            To exchange them, they rely however on centralized platforms.
            NFT users use platforms like <a href="https://opensea.io/"> OpenSea </a>, <a href="https://rarible.com/"> Rarible </a> or <a href="https://superrare.com/"> SuperRare </a>.
            We analyse here the web traffic of five of the most popular platforms.
            First, OpenSea is the clear leader in terms of traffic with 88% of it.
            Second, Twitter provides 75% of the social traffic of these platforms.
            Third, the users are mostly men, nearly 70%, and 80% are less than 45 years old.
            Many more numbers are availble in the present article that gathers all the details you need.
            Hopefully it will be useful to other builders.
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
                Who are the NFT users ? How old are they ?
                What social media do they use ?
                The present article attempts to give an answer to these questions.
                NFT users exchange their assets on platforms like <a href="https://opensea.io/"> OpenSea </a> or <a href="https://superrare.com/"> SuperRare </a>.
                These platforms can be monitored in terms of traffic to get insight about the user and answer the above mentionned questions.
            </p>

            <p>
                We use data provided <a href="https://www.similarweb.com/"> Similarweb </a> for five of the most popular NFT exchange platforms.
                The platforms considered are name, <a href="https://opensea.io/"> OpenSea </a>, <a href="https://rarible.com/"> Rarible </a>, <a href="https://superrare.com/"> SuperRare </a>, <a href="https://looksrare.org/"> Looksrare </a> and <a href="https://foundation.app/"> Foundation </a>.
            </p>

            <h2>
                1. Monthly traffic
            </h2>

            <p>
                The table belows gathers the monthly visits to the platforms for May, June and July.
                It shows that 160 million visits where performed during that period.
                OpenSea appears as the clear leader with a total of 140 million visits, i.e. 88% of it, followed by Foundation with 4% of the traffic.
            </p>

            <table style={{ "min-width": "50em" }}>
                
                <thead>
                    <tr>
                        <th colspan="2" className="text-center"> Platform </th>
                        <th> OpenSea </th>
                        <th> Rarible </th>
                        <th> SuperRare </th>
                        <th> Looksrare </th>
                        <th> Foundation </th>
                        <th> Total </th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td rowspan="6"> Traffic </td>
                        <td> May [million visits] </td>
                        <td> 60,41 </td>
                        <td> 1,87 </td>
                        <td> 1,15 </td>
                        <td> 2,59 </td>
                        <td> 2,27 </td>
                        <td> 68,29 </td>
                    </tr>

                    <tr>
                        <td> June [million visits] </td>
                        <td> 41,48 </td>
                        <td> 1,98 </td>
                        <td> 0,74 </td>
                        <td> 1,45 </td>
                        <td> 1,82 </td>
                        <td> 47,47 </td>
                    </tr>

                    <tr>
                        <td> July [million visits] </td>
                        <td> 39,10 </td>
                        <td> 1,56 </td>
                        <td> 0,56 </td>
                        <td> 1,16 </td>
                        <td> 1,95 </td>
                        <td> 44,33 </td>
                    </tr>

                    <tr>
                        <td> Average [million visits] </td>
                        <td> 47,00 </td> 
                        <td> 1,80 </td>
                        <td> 0,82 </td>
                        <td> 1,73 </td>
                        <td> 2,01 </td>
                        <td> 53,36 </td>
                    </tr>

                    <tr>
                        <td> Total [million visits] </td>
                        <td> 140,99 </td>
                        <td> 5,41 </td>
                        <td> 2,45 </td>
                        <td> 5,20 </td>
                        <td> 6,04 </td>
                        <td className="font-bold"> 160,08 </td>
                    </tr>

                    <tr>
                        <td className="font-bold"> Share </td>
                        <td > 88% </td>
                        <td> 3% </td>
                        <td> 2% </td>
                        <td> 3% </td>
                        <td> 4% </td>
                        <td> </td>
                    </tr>

                </tbody>

            </table>

            <h2>
                2. Mobile or Desktop
            </h2>

            <p>
                The users use mostly Desktop to visit the platforms, i.e. nearly 55% of the traffic.
                Mobile Web traffic isn't lagging far behind with 45% of it.
                On one hand, Looksrare is the platform that attracts most of its users on Desktops.
                On the other hand, Rarible and SuperRare attract most of their traffic from mobiles.
            </p>

            <table style={{ "min-width": "50em" }}>
                
                <thead>
                    <tr>
                        <th colspan="2" className="text-center"> Platform </th>
                        <th> OpenSea </th>
                        <th> Rarible </th>
                        <th> SuperRare </th>
                        <th> Looksrare </th>
                        <th> Foundation </th>
                        <th> Weighted Average </th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td rowspan="2"> Device </td>
                        <td className="font-bold"> Desktop [%] </td>
                        <td> 54,28 </td>
                        <td> 42,25 </td>
                        <td> 45,37 </td>
                        <td> 81,58 </td>
                        <td> 60,45 </td>
                        <td className="font-bold"> 54,86 </td>
                    </tr>

                    <tr>
                        <td> Mobile Web [%] </td>
                        <td> 45,72 </td>
                        <td> 57,75 </td>
                        <td> 54,73 </td>
                        <td> 18,42 </td>
                        <td> 39,55 </td>
                        <td> 45,15 </td>
                    </tr>

                </tbody>
            
            </table>
    


            <h2>
                3. Gender and age
            </h2>

            <p>
                The majority of users are men.
                It is especially the case for OpenSea with 70.17% of its users.
                SuperRare appears to be the platforms attracting the most of female users with 37,73% of its traffic followed by Rarible with 35.87% of it.
                Is there a correllation with mobile web traffic ?
                On average, 36,67% of the traffic on the platforms comes from users aged between 25 and 34 years.
                They are followed by users from 18 to 24 years old with 26.22% of the traffic.
                In total, 80% of traffic comes from users less than 45 years old.
            </p>

            <table style={{ "min-width": "50em" }}>
                    
                <thead>
                    <tr>
                        <th colspan="2" className="text-center"> Platform </th>
                        <th> OpenSea </th>
                        <th> Rarible </th>
                        <th> SuperRare </th>
                        <th> Looksrare </th>
                        <th> Foundation </th>
                        <th> Weighted Average </th>
                    </tr>
                </thead>
    
                <tbody>
   
                    <tr>
                        <td rowspan="2"> Gender </td>
                        <td className="font-bold"> Male [%] </td>
                        <td> 70,17 </td>
                        <td> 64,13 </td>
                        <td> 62,27 </td>
                        <td> 69,26 </td>
                        <td> 66,09 </td>
                        <td className="font-bold"> 69,66 </td>
                    </tr>

                    <tr>
                        <td> Female [%] </td>
                        <td> 29,83 </td>
                        <td> 35,87 </td>
                        <td> 37,73 </td>
                        <td> 30,74 </td>
                        <td> 33,91 </td>
                        <td> 30,34 </td>
                    </tr>


                    <tr>
                        <td rowspan="6"> Age </td>
                        <td> 18-24 [%] </td>
                        <td> 26,46 </td>
                        <td> 24,55 </td>
                        <td> 24,01 </td>
                        <td> 22,04 </td>
                        <td> 26,72 </td>
                        <td> 26,22 </td>
                    </tr>

                    <tr>
                        <td className="font-bold"> 25-34 [%] </td>
                        <td> 36,69 </td>
                        <td> 37,17 </td>
                        <td> 35,51 </td>
                        <td> 36,36 </td>
                        <td> 36,39 </td>
                        <td className="font-bold"> 36,67 </td>
                    </tr>

                    <tr>
                        <td> 35-44 [%] </td> 		
                        <td> 18,65 </td>
                        <td> 19,58 </td>
                        <td> 19,84 </td>
                        <td> 20,46 </td>
                        <td> 18,47 </td>
                        <td> 18,75 </td>
                    </tr>

                    <tr>
                        <td> 45-44 [%] </td>
                        <td> 9,52 </td>
                        <td> 9,78 </td>
                        <td> 10,70 </td>
                        <td> 11,08 </td>
                        <td> 9,61 </td>
                        <td> 9,60 </td>
                    </tr>

                    <tr>
                        <td> 55-64 [%] </td>
                        <td> 5,39 </td>
                        <td> 5,82 </td>
                        <td> 6,49 </td>
                        <td> 6,44 </td>
                        <td> 5,65 </td>
                        <td> 5,47 </td>
                    </tr>

                    <tr>
                        <td> 65 and more [%] </td>
                        <td> 3,29 </td>
                        <td> 3,09 </td>
                        <td> 3,46 </td>
                        <td> 3,63 </td>
                        <td> 3,15 </td>
                        <td> 3,29 </td>
                    </tr>

                </tbody>
            
            </table>
        
            <h2>
                4. Social networks
            </h2>

            <p>
                Most NFT users know that collections communicate mostly on Twitter.
                However, it's impressive to realise it provides on average 75% of the social traffic for the platformes.
                Youtube comes second with 12,4% of the social traffic and Facebook third with 4.3% of it.
                On one hand, SuperRare, Looksrare and Foundation benefit mostly from Twitter with 85% of their social traffic.
                In the other hand, Rarible is the platform that benefits the least from Twitter but seems better able to take advantage from Youtube better than its competitors.
            </p>

            <table style={{ "min-width": "50em" }}>
                    
                <thead>
                    <tr>
                        <th colspan="2" className="text-center"> Platform </th>
                        <th> OpenSea </th>
                        <th> Rarible </th>
                        <th> SuperRare </th>
                        <th> Looksrare </th>
                        <th> Foundation </th>
                        <th> Weighted Average </th>
                    </tr>
                </thead>
    
                <tbody>

                    <tr>
                        <td rowspan="7"> Social Traffic </td>
                        <td className="font-bold"> Twitter [%] </td>
                        <td> 73,63</td>
                        <td> 54,95 </td>
                        <td> 89,57 </td>
                        <td> 90,10 </td>
                        <td> 85,29 </td>
                        <td className="font-bold"> 74,22 </td>
                    </tr>

                    <tr>
                        <td> Youtube [%] </td>
                        <td> 12,83 </td>
                        <td> 21,54 </td>
                        <td> 2,54 </td>
                        <td> 5,87 </td>
                        <td> 4,03 </td>
                        <td> 12,41 </td>
                    </tr>

                    <tr>
                        <td> Facebook [%] </td>
                        <td> 4,52 </td>
                        <td> 4,44 </td>
                        <td> 2,12 </td>
                        <td> 1,16 </td>
                        <td> 3,02 </td>
                        <td> 4,31 </td>
                    </tr>

                    <tr>
                        <td> Instagram [%] </td>
                        <td> 3,60 </td>
                        <td> 10,20 </td>
                        <td> 3,29 </td>
                        <td> 1,10 </td>
                        <td> 4,59 </td>
                        <td> 3,77 </td>
                    </tr>

                    <tr>
                        <td> Reddit [%] </td>
                        <td> 1,34 </td>
                        <td> 4,13 </td>
                        <td> 1,77 </td>
                        <td> 0,91 </td>
                        <td>   </td>
                        <td> 1,38 </td>
                    </tr>

                    <tr>
                        <td> Whatsapp [%] </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> 1,18 </td>
                        <td> 0,04 </td>
                    </tr>

                    <tr>
                        <td> Other [%] </td>
                        <td> 4,08 </td>
                        <td> 4,74 </td>
                        <td> 0,71 </td>
                        <td> 0,86  </td>
                        <td> 1,89 </td>
                        <td> 3,86 </td>
                    </tr>

                </tbody>

            </table>

            <h2>
                Conclusion
            </h2>

            <p>
                The present article focused on analysing traffic usage on 5 of the most popular NFT platforms between May and July 2022.
                While many numbers where highlighted here are the following one you should remember.
                First, OpenSea is the clear leader in terms of traffic with 88% of it.
                Second, Twitter provides 75% of the social traffic to the platforms.
                Third, the users are mostly men, nearly 70%, and 80% are less than 45 years old.
                Fourth, Desktop based traffic is leading over Mobile Web by 10%, i.e. 55% vs 45% respectively.
                Finally, I hope these number will help you in your Web3 journey, let's see in December if the numbers have changed !
            </p>

        </div>
    )
}
