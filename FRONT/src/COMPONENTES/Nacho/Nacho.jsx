import React from "react";
import css from "./Nacho.module.css";

export default function Nacho() {
  return (
    <div className={css.nacho} id="nacho" >
      <div className={css.container}>
        <span className={css.nombre}>NACHO</span>
        <span className={css.apellido}>ABAIT</span>

        <br></br>
        <br></br>
        <h2 className={css.bienvenidos}>
          BIENVENIDX A MI PORTFOLIO COMO FULLSTACK DEVELOPER JR.
        </h2>

        <h4 className={css.contacto}>
          Si quieres ponerte en contacto conmigo escribeme a
          nachoabait@hotmail.com
        </h4>

        <br></br>
        <br></br>
        <button className={css.boton}>Descargar CV</button>

        <br></br>
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
