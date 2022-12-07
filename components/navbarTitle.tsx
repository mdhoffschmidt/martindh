
import Link from "next/link";


export const NavbarTitle = (props: { title: string }) => {
    return (
        <Link href="/">
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
    );
}
