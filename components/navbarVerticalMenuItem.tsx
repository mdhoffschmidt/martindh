import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";


export interface PropsNavbarVerticalMenu {
    href: string;
    name: string;
}

export const NavbarVerticalMenuItem = (props: PropsNavbarVerticalMenu) => {
    return (        
        <Disclosure.Button
            as={ Link }
            key={ props.name }
            to={ props.href }
            className="px-3 py-1 text-lg text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
            { props.name }
        </Disclosure.Button>  
    );
}