import { useState } from "react";


export interface PropsExperienceItem {
    company: string;
    companyLink?: string;
    description?: string;
    location: string;
    period: string;
    title: string;
}

export const ExperienceItem = (props: PropsExperienceItem) => {

    const [open, setOpen] = useState(false);

    let description = null;
    if (props.description && open) {
        description = <div className="my-2">
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
