import Navbar from "./navbar";
import Footer from "./footer";


function HorizontalDivider() {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-100" />
            </div>
        </div>
    )
}

export default function Page(props) {

    return (
        <div className="customBody">

            <header>
                <div className="divHeader">
                    <Navbar/>
                </div>                     
            </header>

            {/* <HorizontalDivider/> */}

            <main>
                <div className="divMain">
                    { props.main }
                </div>
            </main>

            {/* <HorizontalDivider/> */}

            <footer>
                <div className="divFooter">
                    <Footer/>
                </div>
            </footer>

        </div>
    )
}
