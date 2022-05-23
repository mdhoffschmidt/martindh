
import NavbarLink from "../components/navbarItem";
import NavbarTitle from "../components/navbarTitle";

export default function Navbar() {
    return (
        <nav className="h-24 flex flex-row justify-between items-center">
            
            <NavbarTitle title="Martin dH" />

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
                    href="/experiences"
                    text="Experiences"
                />
                
                <NavbarLink 
                    href="/publications"
                    text="Publications"
                />


                <NavbarLink
                    href="/contact"
                    text="Contact"
                />

            </div>

        </nav>
    );
}
