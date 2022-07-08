
import NavbarLink from "../components/navbarItem";
import NavbarTitle from "../components/navbarTitle";
import DarkModeButton from "../components/darkModeButton";
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom"


function HorizontalMenuItems() {
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
    );
}


function VerticalMenuItem(props) {
    return (
        <Disclosure.Button
            as={ Link }
            key={ props.name }
            to={ props.href }
            className="px-3 py-1 text-lg text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            // className={classNames(
            //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            //     'block px-3 py-2 rounded-md text-base font-medium'
            // )}
            // aria-current={item.current ? 'page' : undefined}
        >
            { props.name }
        </Disclosure.Button>  
    );
}

function VerticalMenuItems() {
    return (
        <Disclosure.Panel 
            className="lg:hidden pt:4"
        >

            <div className="flex flex-col items-strech">

                <VerticalMenuItem 
                    name="About"
                    href="/"
                />

                <VerticalMenuItem 
                    name="Articles"
                    href="/articles"
                />

                <VerticalMenuItem
                    name="Experiences"
                    href="/experiences"
                />
                
                <VerticalMenuItem 
                    name="Publications"
                    href="/publications"
                />

                <VerticalMenuItem
                    name="Contact"
                    href="/contact"
                />

            </div>

        </Disclosure.Panel>
    );
}


export default function Navbar() {

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

                            <HorizontalMenuItems/>

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
                        
                        <VerticalMenuItems />
                    </>
                )
            }

        </Disclosure>
    );
}
