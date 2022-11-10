import "./App.scss";
import React from "react";
import TechnologyDescription from "../components/TechnologyDescription";
import { faGithub, faLinkedinIn, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs, faReact, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconLink, { IconLinkStyle } from "../components/IconLink";
import Project, { Node, PostgreSQL, ReactJS, Sass, TypeScript } from "../components/Project";

const App: React.FunctionComponent = () =>
{
    return <>
        <section className="main-title">
            <nav>
                <ul>
                    <li>
                        <a href="#technologies">
                            Tecnologías
                            <div className="colorbar"></div>
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            Proyectos
                            <div className="colorbar"></div>
                        </a>
                    </li>

                    <li>
                        <a href="#contact">
                            Contacto
                            <div className="colorbar"></div>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="text-wrapper">
                <span className="title-greatings">
                    Hola, mi nombre es
                </span>

                <h1>Joaquín Ruaimi.</h1>

                <h2>Soy un <span className="black">desarrollador</span> web full stack.</h2>

                <div className="external-links">
                    <IconLink
                        icon={faLinkedinIn}
                        to="https://www.linkedin.com/in/joaquin-ruaimi-3381a1201/"
                        style={IconLinkStyle.White}
                    />

                    <IconLink
                        icon={faGithub}
                        to="https://github.com/joaquinrmi"
                        style={IconLinkStyle.White}
                    />

                    <IconLink
                        icon={faEnvelope}
                        to="mailto:joaquinruaimi@gmail.com"
                        style={IconLinkStyle.White}
                    />
                </div>
            </div>
        </section>

        <section id="technologies" className="technologies">
            <div className="text-wrapper">
                <h2>Tecnologías que uso</h2>

                <div className="column full">
                    <div className="row">
                        <TechnologyDescription
                            icon={faSquareJs}
                            title="TypeScript/JavaScript"
                            description="Typescript es un superset de JavaScript, el cual es un lenguaje utilizado para el desarrollo web."
                        />
                    </div>

                    <div className="row"></div>
                </div>

                <div className="column full">
                    <div className="row">
                        <h3>Front end</h3>

                        <TechnologyDescription
                            icon={faReact}
                            title="React"
                            description="React es una biblioteca Javascript de código abierto para desarrollar aplicaciones de una sola página."
                        />

                        <TechnologyDescription
                            icon={faHtml5}
                            title="HTML"
                            description="HTML es un lenguaje de marcado que define la estructura de las páginas web."
                        />

                        <TechnologyDescription
                            icon={faCss3}
                            title="CSS"
                            description="CSS es un lenguaje de diseño para definir y crear la presentación de un documento escrito en HTML."
                        />
                    </div>

                    <div className="row">
                        <h3>Back end</h3>

                        <TechnologyDescription
                            icon={faNodeJs}
                            title="Node.js"
                            description="Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto para back end."
                        />

                        <TechnologyDescription
                            icon={faDatabase}
                            title="PostgreSQL"
                            description="PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto."
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" className="projects">
            <div className="text-wrapper">
                <h2>Proyectos notables</h2>

                <div className="projects-container">
                    <Project
                        title="Sparrow"
                        description="Sparrow es una imitación de Twitter desarrollada desde cero con Node.js y React."
                        deploy="https://sparrow.onrender.com"
                        repository="https://github.com/joaquinrmi/sparrow-ts-server"
                        cover="https://res.cloudinary.com/dyisdzj91/image/upload/v1668058574/sparrow_profile_fwmk2z.png"
                        technologies={[
                            TypeScript,
                            Node,
                            ReactJS,
                            PostgreSQL,
                            Sass
                        ]}
                    />

                    <Project
                        title="Product Page"
                        description="Solución para el desafío de Frontend Mentor."
                        deploy="https://joaquinrmi.github.io/product-page"
                        repository="https://github.com/joaquinrmi/product-page"
                        cover="https://res.cloudinary.com/dyisdzj91/image/upload/v1668058801/product_page_xuimwr.png"
                        technologies={[
                            TypeScript,
                            ReactJS,
                            Sass
                        ]}
                    />
                </div>
            </div>
        </section>

        <section id="contact" className="contact">
            <div className="text-wrapper">
                <h2>Contacto</h2>

                <p>Sentite libre de contactarme si te interesa mi trabajo.</p>

                <div className="external-links">
                    <IconLink
                        icon={faLinkedinIn}
                        to="https://www.linkedin.com/in/joaquin-ruaimi-3381a1201/"
                        style={IconLinkStyle.Purple}
                    />

                    <IconLink
                        icon={faGithub}
                        to="https://github.com/joaquinrmi"
                        style={IconLinkStyle.Purple}
                    />

                    <IconLink
                        icon={faEnvelope}
                        to="mailto:joaquinruaimi@gmail.com"
                        style={IconLinkStyle.Purple}
                    />
                </div>

                <p>Icons by <a className="fontawesome-link" href="https://fontawesome.com/" target="_blank">Font Awesome</a>.</p>
            </div>
        </section>
    </>;
};

export default App;