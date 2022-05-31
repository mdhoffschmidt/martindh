import { useState } from "react";
import TagItem from "./tagItem";


export default function PublicationItem(props) {

    const [open, setOpen] = useState(false) ;

    let pdfLink = null;
    if (props.pdfLink) {
        pdfLink = <TagItem href={ props.pdfLink } text={ "Paper" } /> 
    }

    let description = null;
    if (open) {
        description = <div className="my-1">
            <p>
                { props.description }
            </p>
        </div>
    }
    
    return (
        <div 
            className="articleItem group" 
            onClick={() => setOpen(!open)}
        >
    
            <h3 className="group-hover:text-black dark:group-hover:text-white">
                { props.title }
            </h3>

            <div className="my-2 flex flex-col justify-start items-start gap-2">

                <h5>
                    { props.authors }
                </h5>

                <h5 className="italic">
                    { props.date }
                </h5>

            </div>

            { description }

            <div className="my-1 flex flex-row justify-start items-center gap-2">
                { pdfLink }
            </div>

        </div>
    )
}