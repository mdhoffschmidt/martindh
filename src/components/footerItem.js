export default function FooterItem(props) {
    return (
        <a href={ props.href } target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row justify-start items-center group">
                <div className="footerItem">
                    { props.icon }
                </div>
                <div className="footerItem">
                    { props.text }
                </div>
            </div>
        </a>
    );
}
