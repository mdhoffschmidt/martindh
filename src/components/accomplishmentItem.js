export default function AccomplishmentItem(props) {
    return (
        <div className="articleItem group">
                
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