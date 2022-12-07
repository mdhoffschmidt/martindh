import { FooterItem } from "./footerItem";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";


export const Footer = () => {
    return (
        <div className="flex flex-row justify-between items-center">

            <div className="text-sm text-left font-medium font-sans hover:text-black dark:hover:text-white">
                Martin dH © 2022
            </div>

            <div className="flex flex-row justify-between items-center">

                <FooterItem 
                    href="https://www.linkedin.com/in/martin-dhoffschmidt/"
                    icon={ <BsLinkedin className="text-lg"/> }
                />

                <FooterItem 
                    href="https://github.com/mdhoffschmidt"
                    icon={ <BsGithub className="text-lg" /> }                    
                />

                <FooterItem 
                    href="https://twitter.com/mdhoffschmidt"
                    icon={ <BsTwitter className="text-lg" /> }                    
                />

            </div>

        </div>
    );
}