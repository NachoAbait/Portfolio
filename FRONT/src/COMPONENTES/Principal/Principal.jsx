import React from "react";
import css from "./Principal.module.css"
import Inicio from "../Inicio/Inicio.jsx";
import Skills from "../Skills/Skills"
import Proyectos from "../Proyectos/Proyectos"
import Contacto from "../Contacto/Contacto";
import { Link } from "react-scroll";

export default function Principal() {
   
    return (
        <div className={css.principal}>
                <div className={css.header}>
                    <div className={css.nombre}>
                        <h1>Ignacio Abait</h1>
                    </div>
                    <div className={css.nav}>
                    <ul className={css.lista}>
                        <div className={css.uno}>
                             <li>
                            <Link
                                activeClass="active"
                                to="inicio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <div ><h2 className={css.h2}>Inicio</h2></div>
                            </Link>
                            </li>
                        </div>
                        <div className={css.uno}>
                            <li>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <div ><h2 className={css.h2}>Skills</h2></div>
                            </Link>
                            </li>
                        </div>
                        <div className={css.uno}>
                              <li>
                            <Link
                                activeClass="active"
                                to="proyectos"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                            <div><h2 className={css.h2}>Proyectos</h2></div>
                            </Link>
                            </li>
                        </div>
                        <div className={css.uno}>
                            <li>
                            <Link
                                activeClass="active"
                                to="contacto"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                            <div ><h2 className={css.h2}>Contacto</h2></div>
                            </Link>
                            </li>
                        </div>
                            
                        </ul>
                    </div>
                </div>
            <Inicio></Inicio>
            <Skills ></Skills>
            <Proyectos></Proyectos>
            <Contacto></Contacto>

        </div>
    )
}