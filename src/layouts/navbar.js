
import NavbarLink from "../components/navbarItem";
import NavbarTitle from "../components/navbarTitle";

export default function Navbar() {
    return (
        <nav className="h-24 flex flex-row justify-between items-center">
            
            <NavbarTitle title="MartindH" />

            <div className="flex flex-row justify between items-center gap-4">

                <NavbarLink 
                    href="/" 
                    text="About" 
                />

                <NavbarLink 
                    href="/articles" 
                    text="Articles" 
                />

                <NavbarLink 
                    href="/publications" 
                    text="Publications" 
                />

                <NavbarLink
                    href="/experiences"
                    text="Experiences"
                />

                <NavbarLink
                    href="/contact"
                    text="Contact"
                />

            </div>

        </nav>
    );
}
