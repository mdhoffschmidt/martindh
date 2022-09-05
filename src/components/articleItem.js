import { useNavigate } from "react-router-dom";
import TagItem from "./tagItem";

export default function ArticleItem(props) {
    let navigate = useNavigate();
    return (
        <div onClick = {() => navigate(props.href)}>

            <div className="articleItem group">
                
                <h3 className="group-hover:text-black dark:group-hover:text-white">
                    { props.title }
                </h3>
                
                <h5 className="italic text-sm hover:no-underline">
                    { props.date }
                </h5>
                
                <p className="hover:no-underline">
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

        </div>
    );
}
