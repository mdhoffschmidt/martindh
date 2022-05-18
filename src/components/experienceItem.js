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
        <div className="my-2 pl-4 pr-8 py-4 flex flex-col border border-gray-50 hover:bg-gradient-to-br from-indigo-50 to-transparent rounded-lg group" onClick={() => setOpen(!open)}>
            
            <div className="my-2 flex flex-col justify-start items-start">
                
                <div className="text-xl text-gray-500 font-semibold">
                    { props.title }
                </div>
                
                <a href={ props.companyLink } target="_blank" rel="noopener noreferrer">
                    <div className="text-lg text-gray-600 font-medium group-hover:text-indigo-900 group-hover:font-semibold">
                        { props.company }
                    </div>
                </a>

            </div>

            <div className="my-2 flex flex-row justify-between items-start">
                
                <div className="italic text-sm text-gray-500 font-medium">
                    { props.period }
                </div>

                <div className="text-sm text-gray-600 font-medium">
                    { props.location }
                </div>

            </div>

            { description }

        </div>
    );
}
