import { ReactNode } from "react";


export default function Abstract(): ReactNode {
    return (
        <div className="text-inherit hover:no-underline">
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
