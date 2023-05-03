import React from "react";
import css from "./Nacho.module.css"

export default function Nacho(){

    return (
        <div className={css.nacho}>

            <div className={css.container}>
                 <h1 className={css.nombre}>NACHO ABAIT</h1>

                <h2 className={css.bienvenidos}>
                    BIENVENIDX A MI PORTFOLIO COMO FULLSTACK DEVELOPER JR.
                </h2>

                <h4>
                    Si quieres ponerte en contacto conmigo escribeme a nachoabait@hotmail.com
                </h4>

                <button className={css.boton}>Descargar CV</button>

            </div>
           
        </div>
    )
}