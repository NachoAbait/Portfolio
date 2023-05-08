import React from "react";
import css from "./TarjetaProyecto.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faNode, faHtml5, faCss3Alt, faSquareJs, faReact, faGithub , } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"


export default function TarjetaProyecto({ nombre, resumen, img, tecnologias, enlaces }) {

    const iconos = {
        "html": [faHtml5,"#ff9500"],
        "css": [faCss3Alt,"#1968f0"],
        "js": [faSquareJs,"#eeff00"],
        "react": [faReact, "#0df8f4"],
        "node": [faNode, "#1adb3a"],
        "git": faGithub,
        "link":faLink
    }
    

    return (
    
        <div className={css.Tarjeta}>
                <div className={css.containerFoto}>
                <img src={img} className={css.foto}/>
                </div>
                <div className={css.containerNombre}>
                <h1 className={css.nombre}>{nombre}</h1>
                </div>
                <div className={css.containerResumen}>  
                <p className={css.resumen}>{resumen}</p>
                </div>
            
                <div className={css.containerTecnologias}>
                {tecnologias.map((tec) => {
                     return( (iconos[tec] ? <FontAwesomeIcon icon={iconos[tec][0]} style={{ color: iconos[tec][1] }} className={css.icono} /> : null
                ))
                }
                   
               )}
                </div>
            
            <br />
                <div className={css.containerGit}>
                <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                <FontAwesomeIcon icon={faLink} fade className={css.iconoEnlace} />
                </div>
        </div>
    )
}