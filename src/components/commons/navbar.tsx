
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { DarkModeButton } from "./navBarDarkModeButton";
import { NavbarHorizontalMenu } from "./navbarHorizontalMenu";
import { NavbarTitle } from "./navbarTitle";
import { NavbarVerticalMenu } from "./navbarVerticalMenu";


export const Navbar = () => {

    return (
        <Disclosure as="nav">
            {
                ({ open }) => (
                    <>
                        <div className="
                            flex 
                            flex-row
                            justify-between
                            items-center
                            "
                        >

                            <NavbarTitle title="Martin dH" />

                            <NavbarHorizontalMenu />

                            <div className="flex gap-4">
                            
                                <DarkModeButton/>

                                <Disclosure.Button className="flex lg:hidden">
                                    {
                                        (open) ? (
                                            <XIcon className="block h-6 w-6 text-gray-700 dark:text-gray-300" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6 text-gray-700 dark:text-gray-300" aria-hidden="true" />
                                        )
                                    }
                                </Disclosure.Button>
                                
                            </div>

                        </div>
                        
                        <NavbarVerticalMenu />
                    </>
                )
            }

        </Disclosure>
    );
}
