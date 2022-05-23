import FooterItem from "../components/footerItem";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";


export default function Footer() {
    return (
        <div className="h-24 flex flex-row justify-between items-center bottom-0">

            <div className="footerCopyright">
                ©martindh
            </div>

            <div className="flex flex-grow">

            </div>

            <div className="flex flex-row justify-between items-center gap-4">

                <FooterItem 
                    href="https://www.linkedin.com/in/martin-dhoffschmidt/"
                    text={ null }
                    icon={ <BsLinkedin className="text-lg text-gray-300 group-hover:text-white"/> }
                />

                <FooterItem 
                    href="https://github.com/mdhoffschmidt"
                    text={ null }
                    icon={ <BsGithub className="text-lg text-gray-300 group-hover:text-white" /> }
                />

                <FooterItem 
                    href="https://twitter.com/mdhoffschmidt"
                    text={ null }
                    icon={ <BsTwitter className="text-lg text-gray-300 group-hover:text-white" /> }
                />

            </div>

        </div>
    );
}