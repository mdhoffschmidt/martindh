import { ReactElement } from "react-markdown/lib/react-markdown";
import { useNavigate } from "react-router-dom";
import { TagItem } from "../commons/tagItem";


export interface PropsArticleItem {
    abstract: ReactElement;
    date: string;
    href: string;
    title: string;
    tags: Array<string>;
}

export const ArticleItem = (props: PropsArticleItem) => {
    let navigate = useNavigate();
    return (
        <div onClick = {() => navigate(props.href)}>

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
                
                <h3 className="group-hover:text-black dark:group-hover:text-white">
                    { props.title }
                </h3>
                
                <h5 className="italic text-sm hover:no-underline">
                    { props.date.toString() }
                </h5>
                
                <div className="hover:no-underline">
                    { props.abstract }
                </div>
                
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
