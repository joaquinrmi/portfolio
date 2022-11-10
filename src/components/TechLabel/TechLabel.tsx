import "./TechLabel.scss";
import React from "react";

export type Props = {
    technology: Technology;
};

const TechLabel: React.FunctionComponent<Props> = (props) =>
{
    return <div
        className="tech-label"
        style={{
            color: props.technology.text,
            backgroundColor: props.technology.background
        }}
    >
        {props.technology.name}
    </div>;
};

export type Technology = {
    name: string;
    background: string;
    text: string;
};

export default TechLabel;