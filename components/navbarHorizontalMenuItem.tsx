
import Link from "next/link";


export const NavbarHorizontalMenuItem = (props: { href: string, text: string }) => {
    return (
        <Link href={ props.href }>
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
    );
}
