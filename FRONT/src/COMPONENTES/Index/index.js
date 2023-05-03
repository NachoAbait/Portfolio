import React from "react";
import css from "./index.module.css";
import { Link } from "react-scroll";

//COMPONENTES
import Nacho from "../Nacho/Nacho";
import SobreMi from "../Sobre mi/SobreMi";
import Proyectos from "../Proyectos/Proyectos";
import Educacion from "../Educacion/Educacion";
import Skills from "../Skills/Skills";
import Contacto from "../Contacto/Contacto";

export default function Index() {
  return (
    <div className={css.container}>
      <div className={css.barraLateral}>
        <div className={css.foto}>
          <img
            src="https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"
            alt="foto"
            className={css.fotito}
          ></img>
        </div>

        <div className={css.menu}>
          <ul className={css.lista}>
            <li>
              <Link
                activeClass="active"
                to="nacho"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h2>Nacho</h2>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="sobre-mi"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h3>Sobre mi</h3>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="proyectos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h3>Proyectos</h3>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="educacion"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h3>Educacion</h3>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h3>Skills</h3>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h3>Contacto</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.principal}>
        <Nacho />
        <SobreMi />
        <Proyectos />
        <Educacion />
        <Skills />
        <Contacto />
      </div>
    </div>
  );
}
