export default function TagItem(props) {
    if (props.href) {
        return (
            <a href={ props.href } target="_blank" rel="noopener noreferrer">
                <div className="px-2 py-1 border border-gray-100 rounded-lg text-sm text-gray-500 font-semibold group-hover:bg-indigo-900 group-hover:text-white">
                    { props.text }
                </div>
            </a>
        );
    } else {
        return (
            <div className="px-2 py-1 border border-gray-100 rounded-lg text-sm text-gray-500 font-semibold group-hover:bg-indigo-900 group-hover:text-white">
                { props.text }
            </div>
        );
    }
}
