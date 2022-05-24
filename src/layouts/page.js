import Navbar from "./navbar";
import Footer from "./footer";


export default function Page(props) {

    return (
        <div className="customBody">

            <header>
                <div className="divHeader">
                    <Navbar/>
                </div>                     
            </header>

            <main>
                <div className="divMain">
                    { props.main }
                </div>
            </main>

            <footer>
                <div className="divFooter">
                    <Footer/>
                </div>
            </footer>

        </div>
    )
}
