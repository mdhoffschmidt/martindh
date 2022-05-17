import { Link } from "react-router-dom";

export default function ArticleItem(props) {

    return (
        <Link to={ props.href }>
            <div className="my-2 pl-4 pr-8 py-4 flex flex-col hover:bg-gradient-to-br from-teal-50 to-indigo-50 rounded-lg group">
                
                <div className="my-2 flex flex-col justify-start items-start">
                    
                    <div className="text-xl text-gray-500 font-semibold">
                        { props.title }
                    </div>
                    
                </div>

                <div className="my-2 flex flex-row justify-between items-start">
                    
                    <div className="italic text-sm text-gray-600 font-normal">
                        { props.date }
                    </div>

                </div>

                <div>
                    <p>
                        { props.abstract }
                    </p>
                </div>

                <div className="my-2 flex flex-row justify-start items-center">
                    { props.tags.map((item, index) => {
                        return (
                            <div key={index} className="px-2 py-1 border border-gray-100 rounded-lg text-sm text-gray-500 font-semibold group-hover:bg-gradient-to-tr from-indigo-900 to-indigo-50 group-hover:text-white"> 
                                {item} 
                            </div>
                        );
                    })}
                </div>

            </div>
        </Link>
    );
}
