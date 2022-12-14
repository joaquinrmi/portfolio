import "./Project.scss";
import React from "react";
import TechLabel, { Technology } from "../TechLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faDisplay, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export type Props = {
    title: string;
    description: string;
    deploy: string;
    repository: string;
    cover: string;
    technologies: Array<Technology>;
};

const Project: React.FunctionComponent<Props> = (props) =>
{
    return <div
        className="project"
        onLoad={(ev) =>
        {
            const target = ev.currentTarget as HTMLDivElement;
            if(!target) return;

            const container = target.querySelector(".cover-container") as HTMLDivElement;
            if(!container) return;

            container.classList.remove("error");
        }}
    >
        <h3 className="project-title">{props.title}</h3>

        <div className="cover-container error">
            <div>
                <img
                    src={props.cover}
                    alt={`Portada del proyecto '${props.title}'.`}
                />
            </div>

            <a href={props.repository} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>

        <div className="tech-labels-container">
            {props.technologies.map((tech) =>
            {
                return <TechLabel key={tech.name} technology={tech} />;
            })}
        </div>

        <div className="description-container">
            <div className="external">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faDisplay} />
                </div>

                <a href={props.deploy} className="deploy" target="_blank">
                    Ver aplicación desplegada<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </div>

            <div className="external">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faGithub} />
                </div>

                <a href={props.repository} className="deploy" target="_blank">
                    Visitar repositorio<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </div>

            <span className="description">
                {props.description}
            </span>
        </div>
    </div>;
};

export const JavaScript: Technology = {
    name: "JavaScript",
    background: "#EFD81D",
    text: "#000000",
};

export const TypeScript: Technology = {
    name: "TypeScript",
    background: "#3178C6",
    text: "#FFFFFF",
};

export const ReactJS: Technology = {
    name: "React",
    background: "#61DAFB",
    text: "#000000",
};

export const Node: Technology = {
    name: "Node.js",
    background: "#026E00",
    text: "#FFFFFF",
};

export const PostgreSQL: Technology = {
    name: "PostgreSQL",
    background: "#336791",
    text: "#FFFFFF",
};

export const Sass: Technology = {
    name: "Sass",
    background: "#C6538C",
    text: "#FFFFFF",
};

export const Express: Technology = {
    name: "Express",
    background: "#303030",
    text: "#FFFFFF",
};

export const Jest: Technology = {
    name: "Jest",
    background: "#9A405B",
    text: "#FFFFFF",
};

export default Project;