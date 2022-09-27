import { NavbarHorizontalMenuItem } from "./navbarHorizontalMenuItem";


export const NavbarHorizontalMenu = () => {
    return (

        <div className="
            hidden 
            lg:flex
            lg:flex-row
            lg:justify-between
            lg:items-center
            lg:gap-4
            lg:flex-wrap
            "
        >

            <NavbarHorizontalMenuItem 
                href="/"
                text="About"
            />

            <NavbarHorizontalMenuItem 
                href="/articles"
                text="Articles"
            />

            <NavbarHorizontalMenuItem
                href="/experiences"
                text="Experiences"
            />
            
            <NavbarHorizontalMenuItem 
                href="/publications"
                text="Publications"
            />

            <NavbarHorizontalMenuItem
                href="/contact"
                text="Contact"
            />

        </div>
    );
}