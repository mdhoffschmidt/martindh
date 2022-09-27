
import { Link } from "react-router-dom"


export interface PropsNavbarTitle {
    title: string;
}


export const NavbarTitle = (props: PropsNavbarTitle) => {
    return (
        <Link to="/">
            <div className="
                py-1
                text-lg 
                textColor
                text-left 
                font-semibold 
                font-sans 
                rounded-lg 
                hover:text-black dark:hover:text-white
                "
            >
                { props.title }
            </div>
        </Link>
    )
}
