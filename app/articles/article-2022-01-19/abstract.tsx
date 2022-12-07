import { ReactNode } from "react";


export default function Abstract(): ReactNode {
    return (
        <div className="text-inherit hover:no-underline">
            Adopting a Data Centric approach to a Machine Learning project will probably leave you wondering what steps will lead you there.
            Improving the data rather than the model seems quite obvious since everyone knows that the garbage in yields garbage out.
            The previous article discussed the different challenges that must be overcome to reach Data Excellence.
            The goal was to formalize what are the data challenges a Data Scientist might encounter and what impact they can have on a Machine Learning project.            
        </div>
    );
}
