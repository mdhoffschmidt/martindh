
import { Link } from "react-router-dom"


export default function NavbarTitle(props) {
    return (
        <Link to="/">
            <div className="navTitle">
                { props.title }
            </div>
        </Link>
    )
}
