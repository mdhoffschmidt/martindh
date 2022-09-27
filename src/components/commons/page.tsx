import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ReactElement } from "react-markdown/lib/react-markdown";


export interface PropsPage {
    main: ReactElement;
}


export const Page = (props: PropsPage) => {

    return (
        <div className="
            bg-white dark:bg-gradient-to-b from-black to-zinc-900
            flex
            flex-col
            min-h-screen
            "
        >

            <header className="min-w-full py-8 px-8 mx-4">
                <div className="mx-auto max-w-screen-sm md:max-w-screen-md">
                    <Navbar/>
                </div>
            </header>

            <main className="min-w-full flex-grow mx-4">
                <div className="mx-auto max-w-screen-sm md:max-w-screen-md my-4 md:my-16">
                    { props.main }
                </div>
            </main>

            <footer className="min-w-full bg-white dark:bg-zinc-900 mx-4">
                <div className="mx-auto mb-10 max-w-screen-sm md:max-w-screen-md">
                    <Footer />
                </div>
            </footer>

        </div>
    );
}
