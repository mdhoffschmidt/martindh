export const Meta = {
    "date": new Date("2022-08-19"),
    "tags": ["NFT Marketplace", "Web3", "NFT"],
    "title": "Traffic Analysis on NFT Platforms",
}

export const Abstract = () => {
    return (
        <div>
            Web3 users like the decentralized nature of their assets.
            However, bying or exchanging them relies on centralized platforms.
            It is the case for instance for NFT users that exchange their assets through platform like OpenSea, Rarible or SuperRare.
            We analyse here the web traffic on five of the most popular platforms to understand what device user use, their gender and age and what social platforms they usualy use.
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
                We look at free data provided by Similarweb from five of the most popular NFT exchange platforms.
                The platforms considered are the following :
            </p>

            <ol>
                <li> OpenSea </li>
                <li> Rarible </li>
                <li> SuperRare </li>
                <li> Looksrare </li>
                <li> Foundation </li>
            </ol>

            <h2>
                1. Monthly Traffic and total visits
            </h2>

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
                        <td className="font-bold"> Share [%] </td>
                        <td > 88 </td>
                        <td> 3 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> </td>
                    </tr>

                </tbody>

            </table>

            <p>
                The total number of visits from May to July for the five platforms equals 160 million. 
                An impressive 88% share of the visits are done on OpenSea.
                Note further that since May, the number of monthly visits has decreased.
            </p>

            <h2>
                2. Mobile or Desktop
            </h2>

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
    
            <p>
                The users use mostly Desktop to visit the platforms.
                But Mobile Web traffic isn't lagging far behind Desktop and account on average for 45% of the visits.
                Note that Looksrare seems to benefit mostly from Desktop visits.
            </p>

            <h2>
                3. Gender and Age
            </h2>

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
    
            <p>
                SuperRare is the platforms that attracts mosts female users, i.e. 37,73%, while OpenSea attracts mostly men, 70.17%.
                On average, 36,67% of the traffic on the platform is done by users between 25 and 34 years old followed by users aged between 18 to 24 account for 26.22 % of the users.
            </p>
    
            <h2>
                4. Social networks
            </h2>

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

            <p>
                The clear leader in social network traffic is Twitter with nearly 75% of the shares.
                It is followed by Youtube with 12,4% and Facebook with 4.3%. 
                On one hand, SuperRare, Looksrare and Foundation benefit mostly from Twitter with more than 85% of their social network traffic comming from that platform.
                In the other ahdn, Rarible is the platform that benefits the least from Twitter but seems better able to take advantage from Youtube than its competitors.
            </p>

            <h2>
                Conclusion
            </h2>

            <p>
                The present study shows that between May and July 2022 OpenSea is the clear leader in terms of traffic.
                Indeed, they capture 88% of the traffic.
                Twitter is the social network that brings most of the users on the platforms, i.e. nearly 75% of it.
                The users are mostly men aged between 25 and 34 years old.
                Desktop based traffic is leading over Mobile Web by 10%.
                Let's see in December if the numbers have changed !
            </p>

        </div>
    )
}
