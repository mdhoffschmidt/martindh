import { ReactNode } from "react";


export const Title = ( props: { children: ReactNode } ) => {
    return (
        <h1 className="text-4xl text-gray-800 font-semibold pb-8">
            { props.children }
        </h1>
    );
}
