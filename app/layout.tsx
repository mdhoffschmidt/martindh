import "../styles/globals.css";


export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>
                    MartindH
                </title>
            </head>
            <body>
                { children }
            </body>
        </html>
    );
}
