export default function AccomplishmentItem(props) {
    return (
        <div className="articleItem group">
            
            <div className="my-1 flex flex-col justify-start items-start">
                
                <a href={ props.titleLink } target="_blank" rel="noopener noreferrer">
                    <div className="text-xl text-gray-300 font-semibold group-hover:text-white">
                        { props.title }
                    </div>
                </a>

            </div>

            <div className="my-1 flex flex-row justify-between items-start">
                
                <div className="text-lg text-gray-300 font-medium">
                    { props.university }
                </div>

            </div>

            <div className="my-1 flex flex-row justify-between items-start">
                
                <div className="italic text-sm text-gray-300 font-normal">
                    { props.period }
                </div>

            </div>

            <div className="my-1 flex flex-row justify-between items-start">

                <div className="text-sm text-gray-300 font-medium group-hover:text-white">
                    <a href={ props.certificateLink } target="_blank" rel="noopener noreferrer">
                        { props.certificate }
                    </a>
                </div>

                <div className="text-sm text-gray-300 font-medium">
                    { props.platform }
                </div>

            </div>

        </div>
    );
}