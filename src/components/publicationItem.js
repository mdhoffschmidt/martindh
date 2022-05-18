import { useState } from "react";


export default function PublicationItem(props) {

    const [open, setOpen] = useState(false) ;

    let pdfLink = null;
    if (props.pdfLink) {
        pdfLink = <div className="px-4 border border-solid border-gray-200 group-hover:border-indigo-200 rounded-lg group-hover:bg-gradient-to-tr from-indigo-900 to-indigo-100 group-hover:text-white">
            <a href={ props.pdfLink } target="_blank" rel="noopener noreferrer">
                Paper
            </a>
        </div>
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
            className="my-2 pl-4 pr-8 py-4 flex flex-col rounded-lg hover:bg-gradient-to-br from-teal-50 to-indigo-50 group border border-gray-50" 
            onClick={() => setOpen(!open)}
        >

            <div className="my-2 flex flex-col justify-start items-start">

                <div>
                    { props.authors }
                </div>

                <div>
                    { props.date }
                </div>

            </div>

            <div className="my-2 flex flex-col justify-start items-start">
                
                <div className="text-xl text-gray-500 font-semibold group-hover:text-indigo-900">
                    { props.title }
                </div>
                
            </div>

            { description }

            <div className="my-1 flex flex-row justify-start items-center gap-2">
                { pdfLink }
            </div>

        </div>
    )
}