
import { Link } from "react-router-dom"


export default function NavbarLink(props) {
    return (
        <Link to={ props.href }>
            <div className="navItem">
                { props.text }
            </div>
        </Link>
    )
}
