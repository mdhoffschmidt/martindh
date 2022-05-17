export default function FooterItem(props) {
    return (
        <a href={ props.href } target="_blank" rel="noopener noreferrer">
            <div className="footerItem">
                { props.text }
            </div>
        </a>
    );
}
