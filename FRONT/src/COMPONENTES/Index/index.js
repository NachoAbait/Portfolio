import React from "react";
import css from "./index.module.css";
import Nacho from "../Nacho/Nacho";

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
              <h2>Nacho</h2>
            </li>

            <li>
              <h3>Sobre mi</h3>
            </li>
            <li>
              <h3>Proyectos</h3>
            </li>
            <li>
              <h3>Educaciòn</h3>
            </li>
            <li>
              <h3>Skills</h3>
            </li>
            <li>
              <h3>Contacto</h3>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.principal}>
        <Nacho></Nacho>
      </div>
    </div>
  );
}
