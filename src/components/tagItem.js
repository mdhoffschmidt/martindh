export default function TagItem(props) {
    if (props.href) {
        return (
            <a href={ props.href } target="_blank" rel="noopener noreferrer">
                <div className="
                    mx-1
                    px-2
                    py-1
                    text-sm
                    text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white
                    font-semibold
                    group-hover:bg-white dark:group-hover:bg-zinc-900
                    border
                    border-zinc-300 dark:border-gray-300
                    rounded-lg             
                    "
                >
                    { props.text }
                </div>
            </a>
        );
    } else {
        return (
            <div className="
                mx-1
                px-2
                py-1
                text-sm
                text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white
                font-semibold
                group-hover:bg-white dark:group-hover:bg-zinc-900
                border
                border-zinc-300 dark:border-gray-300
                rounded-lg
                "
            >
                { props.text }
            </div>
        );
    }
}
