import FooterItem from "../components/footerItem";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";


export default function Footer() {
    return (
        <div className="h-24 flex flex-row justify-between items-center bottom-0">

            <div className="footerCopyright">
                Martin dH © 2022
            </div>

            <div className="flex flex-grow">

            </div>

            <div className="flex flex-row justify-between items-center gap-4">

                <FooterItem 
                    href="https://www.linkedin.com/in/martin-dhoffschmidt/"
                    icon={ <BsLinkedin className="text-lg"/> }
                    text={ null }
                />

                <FooterItem 
                    href="https://github.com/mdhoffschmidt"
                    icon={ <BsGithub className="text-lg" /> }
                    text={ null }
                />

                <FooterItem 
                    href="https://twitter.com/mdhoffschmidt"
                    icon={ <BsTwitter className="text-lg" /> }
                    text={ null }
                />

            </div>

        </div>
    );
}