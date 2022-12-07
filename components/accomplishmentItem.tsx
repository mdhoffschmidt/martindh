export interface PropsAccomplishmentItem {
    certificate: string;
    certificateLink: string;
    period: string;
    platform: string;
    title: string;
    titleLink: string;
    university: string;
}

export const AccomplishmentItem = (props: PropsAccomplishmentItem) => {
    return (
        <div className="
            w-full
            my-4
            pl-4 pr-8 py-4
            flex flex-col
            bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700
            transition ease-in-out duration-100 hover:scale-105
            rounded-lg
            group
            "
        >
                
            <a href={ props.titleLink } target="_blank" rel="noopener noreferrer">
                <h3 className="group-hover:text-black dark:group-hover:text-white">
                    { props.title }
                </h3>
            </a>

            <h4 className="font-medium">
                { props.university }
            </h4>
                
            <h5 className="italic">
                { props.period }
            </h5>

            <div className="my-1 flex flex-row justify-between items-start">

                <h5 className="group-hover:text-black dark:group-hover:text-white">
                    <a href={ props.certificateLink } target="_blank" rel="noopener noreferrer">
                        { props.certificate }
                    </a>
                </h5>

                <h5>
                    { props.platform }
                </h5>

            </div>

        </div>
    );
}
