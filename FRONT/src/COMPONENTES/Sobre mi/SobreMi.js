import React from "react";
import css from "./SobreMi.module.css";

export default function SobreMi() {
  return (
    <div className={css.sobreMi} id="sobre-mi">
      <div className={css.container}>
        <h1 className={css.titulo}>SOBRE MI</h1>
        <h2 className={css.texto}>
          Soy nacho, tengo 23 años, comence a incursionar en la programacion por
          el 2020, hasta que en 2022 al darme cuenta que era lo que me
          apasionaba, decidi pegar el salto para dedicarme exclusivamente a
          esto, graduandome de Henry como Full Stack Developer. Fue un camino
          duro, pero las ganas y motivacion sumado a trabajo en equipo y a
          buenos compañeros hicieron todo mas fácil. Soy una persona responsable
          y carismatica, que le gusta trabajar en equipo y aprender cosas
          nuevas. Siempre predispuesto a realizar mis labores. En busca de
          puestos desafiantes para seguir aprendiendo constantemente.
        </h2>
        <br></br>
        <br></br>
        <h2>🔭Actualmente estoy en busca de trabajo. </h2>
        <h2>🌱 Siempre dispuesto a nuevos desafios para seguir aprendiendo</h2>
        <h2>
          ❓ Puedes contactarme por <a href="https://www.linkedin.com/in/nacho-abait-480073256/" target="_blank">LinkedIn</a>  o vía mail a nachoabait@hotmail.com
        </h2>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className={css.linea}>
          _________________________________________________________________________________________________________________________________________________
        </h2>
      </div>
    </div>
  );
}
