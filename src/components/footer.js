function FooterLink(props) {
    return (
        <a href={ props.href } target="_blank" rel="noopener noreferrer">
            <div className="footerItem">
                { props.text }
            </div>
        </a>
    );
}

export default function Footer() {
    return (
        <div className="h-24 flex flex-row justify-between items-center bottom-0">

            <div className="footerCopyright">
                ©martindh
            </div>

            <div className="flex flex-grow">

            </div>

            <div className="flex flex-row justify-between items-center gap-4">

                <FooterLink 
                    href="https://www.linkedin.com/in/martin-dhoffschmidt/"
                    text="LinkedIn"
                />

                <FooterLink 
                    href="https://github.com/mdhoffschmidt"
                    text="Github"
                />

                <FooterLink 
                    href="https://twitter.com/mdhoffschmidt"
                    text="Twitter"
                />

            </div>

        </div>
    );
}