import { Page } from "../commons/page";


export default function Contact() {
    return (
        <div>

            <h1>
                Contact
            </h1>

            <p>
                You can reach me at : <span className="font-mono"> martin@dhoffschmidt.com </span>
            </p>

        </div>
    )
}

export const ContactPage = () => {
    return (
        <Page main={ <Contact /> }/>
    );
}
