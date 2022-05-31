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
            
            <div className="flex flex-col justify-start items-start">
                
                <a href={ props.companyLink } target="_blank" rel="noopener noreferrer">
                    <h3 className="group-hover:text-black dark:group-hover:text-white group-hover:font-semibold">
                        { props.company }
                    </h3>
                </a>

                <h4>
                    { props.title }
                </h4>

            </div>

            <div className="my-2 flex flex-row justify-between items-start">
                
                <h5 className="italic font-medium">
                    { props.period }
                </h5>

                <h5 className="font-medium">
                    { props.location }
                </h5>

            </div>

            { description }

        </div>
    );
}
