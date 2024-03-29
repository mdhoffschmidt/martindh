import { ReactElement } from "react-markdown/lib/react-markdown";


export const FooterItem = (props: { href: string, icon: ReactElement, text?: string }) => {
    return (
        <a href={ props.href } target="_blank" rel="noopener noreferrer">
            
            <div className="flex flex-row justify-start items-center group">
                
                <div className="
                    px-4 
                    py-1     
                    text-sm 
                    text-left
                    font-medium
                    font-sans
                    hover:text-black dark:hover:text-white
                    "
                >
                    { props.icon }
                </div>
                
                <div className="
                    px-4 
                    py-1                    
                    text-sm
                    text-left
                    font-medium
                    font-sans
                    hover:text-black dark:hover:text-white
                    "
                >
                    { props.text }
                </div>

            </div>

        </a>
    );
}
