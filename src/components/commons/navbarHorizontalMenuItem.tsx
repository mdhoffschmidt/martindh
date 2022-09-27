
import { Link } from "react-router-dom"

export interface PropsNavbarLink {
    href: string;
    text: string;
}

export const NavbarHorizontalMenuItem = (props: PropsNavbarLink) => {
    return (
        <Link to={ props.href }>
            <div className="
                px-4 
                py-1 
                text-base
                textColor
                text-left
                font-medium
                font-sans
                hover:text-black dark:hover:text-white
                "
            >
                { props.text }
            </div>
        </Link>
    )
}
