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

            <div className="my-2 flex flex-col justify-start items-start">
                
                <div className="text-xl text-gray-300 font-semibold group-hover:text-white">
                    { props.title }
                </div>
                
            </div>

            <div className="my-2 flex flex-col justify-start items-start text-gray-300">

                <div>
                    { props.authors }
                </div>

                <div className="italic">
                    { props.date }
                </div>

            </div>

            { description }

            <div className="my-1 flex flex-row justify-start items-center gap-2">
                { pdfLink }
            </div>

        </div>
    )
}