import { Disclosure } from '@headlessui/react'
import { NavbarVerticalMenuItem } from './navbarVerticalMenuItem';


export const NavbarVerticalMenu = () => {
    return (
        <Disclosure.Panel 
            className="lg:hidden pt:4"
        >

            <div className="flex flex-col items-strech">

                <NavbarVerticalMenuItem 
                    name="About"
                    href="/"
                />

                <NavbarVerticalMenuItem 
                    name="Articles"
                    href="/articles"
                />

                <NavbarVerticalMenuItem
                    name="Experiences"
                    href="/experiences"
                />
                
                <NavbarVerticalMenuItem 
                    name="Publications"
                    href="/publications"
                />

                <NavbarVerticalMenuItem
                    name="Contact"
                    href="/contact"
                />

            </div>

        </Disclosure.Panel>
    );
}
