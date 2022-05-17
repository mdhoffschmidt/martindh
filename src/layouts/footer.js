import FooterItem from "../components/footerItem";

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
                    text="LinkedIn"
                />

                <FooterItem 
                    href="https://github.com/mdhoffschmidt"
                    text="Github"
                />

                <FooterItem 
                    href="https://twitter.com/mdhoffschmidt"
                    text="Twitter"
                />

            </div>

        </div>
    );
}