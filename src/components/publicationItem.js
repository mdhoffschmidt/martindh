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
            className="my-2 pl-4 pr-8 py-4 flex flex-col rounded-lg hover:bg-gradient-to-br from-indigo-50 to-transparent group border border-gray-50" 
            onClick={() => setOpen(!open)}
        >

            <div className="my-2 flex flex-col justify-start items-start">
                
                <div className="text-xl text-gray-500 font-semibold group-hover:text-indigo-900">
                    { props.title }
                </div>
                
            </div>

            <div className="my-2 flex flex-col justify-start items-start">

                <div>
                    { props.authors }
                </div>

                <div>
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