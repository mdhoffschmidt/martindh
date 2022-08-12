import { Link } from "react-router-dom";
import TagItem from "./tagItem";

export default function ArticleItem(props) {
    return (
        <Link to={ props.href }>
            <div className="articleItem group">
                
                <h3 className="group-hover:text-black dark:group-hover:text-white">
                    { props.title }
                </h3>
                
                <h5 className="italic text-sm">
                    { props.date }
                </h5>
                
                <p>
                    { props.abstract }
                </p>
                
                <div className="my-2 flex flex-row justify-start items-center">
                    { props.tags.map((item, index) => {
                        return (
                            <TagItem key={index} text={ item} />
                        );
                    })}
                </div>

            </div>
        </Link>
    );
}
