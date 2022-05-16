function NavLink(props) {
    return (
        <a href={ props.href }>
            <div className="navItem">
                { props.text }
            </div>
        </a>
    )
}

export default function Navbar() {
    return (
        <nav className="h-24 flex flex-row justify-between items-center">
            
            <a href="/">
                <div className="navTitle">
                    Martin dH
                </div>
            </a>

            <div className="flex flex-row justify between items-center gap-4">

                <NavLink 
                    href="/" 
                    text="About" 
                />

                <NavLink 
                    href="/articles" 
                    text="Articles" 
                />

                <NavLink 
                    href="/publications" 
                    text="Publications" 
                />

                <NavLink
                    href="/experiences"
                    text="Experiences"
                />

                <NavLink
                    href="/contact"
                    text="Contact"
                />

            </div>

        </nav>
    );
}
