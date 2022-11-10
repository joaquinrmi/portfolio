import "./IconLink.scss";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Props = {
    icon: IconProp;
    to: string;
    style: IconLinkStyle,
};

export enum IconLinkStyle
{
    White = "white",
    Purple = "purple"
}

const IconLink: React.FunctionComponent<Props> = (props) =>
{
    return <a
        className={`icon-link ${props.style}`}
        href={props.to}
        target="_blank"
    >
        <FontAwesomeIcon icon={props.icon} />
    </a>;
};

export default IconLink;