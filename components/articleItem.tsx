"use client"

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { TagItem } from "./tagItem";


export interface PropsArticleItem {
    abstract: ReactNode|string;
    date: string;
    href: string;
    title: string;
    tags: Array<string>;
}

export const ArticleItem = (props: PropsArticleItem) => {
    const router = useRouter();
    return (
        <button onClick={ () => router.push(props.href) } className="w-full">

            <div className="
                w-full
                my-4
                pl-4 pr-8 py-4
                flex flex-col
                bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700
                transition ease-in-out duration-100 hover:scale-[1.02]
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
                
                <div className="hover:no-underline font-light text-left py-1 text-md">
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

        </button>
    );
}
