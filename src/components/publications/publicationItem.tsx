import { useState } from "react";
import { TagItem } from "../commons/tagItem";


export interface PropsPublicationItem {
    authors: string;
    date: string;
    description?: string;
    pdfLink?: string;
    title: string;
}

export const PublicationItem = (props: PropsPublicationItem) => {

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
            className="
                w-full
                my-4
                pl-4 pr-8 py-4
                flex flex-col
                bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700
                transition ease-in-out duration-100 hover:scale-105
                rounded-lg
                group
            " 
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