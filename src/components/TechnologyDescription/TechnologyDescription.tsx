import "./TechnologyDescription.scss";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Props = {
    icon: IconProp;
    title: string;
    description: string;
};

const TechnologyDescription: React.FunctionComponent<Props> = (props) =>
{
    return <div className="technology-description column">
        <div className="tech-left">
            <FontAwesomeIcon icon={props.icon} />
        </div>

        <div className="tech-right">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>;
};

export default TechnologyDescription;