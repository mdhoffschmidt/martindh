import { useState } from "react";


export default function ExperienceItem(props) {

    const [open, setOpen] = useState(false) ;

    let description = null;
    if (props.description && open) {
        description = <div className="my-2">
            <p>
                { props.description }
            </p>
        </div>
    }

    return (
        <div className="articleItem group" onClick={() => setOpen(!open)}>
            
            <div className="my-2 flex flex-col justify-start items-start">
                
                <a href={ props.companyLink } target="_blank" rel="noopener noreferrer">
                    <div className="text-lg text-gray-300 font-medium group-hover:text-white group-hover:font-semibold">
                        { props.company }
                    </div>
                </a>

                <div className="text-lg text-gray-300 font-semibold">
                    { props.title }
                </div>

            </div>

            <div className="my-2 flex flex-row justify-between items-start">
                
                <div className="italic text-sm text-gray-300 font-medium">
                    { props.period }
                </div>

                <div className="text-sm text-gray-300 font-medium">
                    { props.location }
                </div>

            </div>

            { description }

        </div>
    );
}
