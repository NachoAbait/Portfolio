import React from "react";
import css from "./TarjetaProyecto.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faNode, faHtml5, faCss3Alt, faSquareJs, faReact, faGithub , } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"


export default function TarjetaProyecto({nombre, resumen, img, tecnologias, enlaces}) {

    return (
    
        <div className={css.Tarjeta}>
                <div className={css.containerFoto}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjA9NiUux2YAr1qbu5GJDMEq0bMy5gLxllytHpMs&s" className={css.foto}/>
                </div>
                <div className={css.containerNombre}>
                    <h1 className={css.nombre}>
                        Adopt.Me
                    </h1>
                </div>
                <div className={css.containerResumen}>  
                    <p className={css.resumen}>
                        Mi equipo y yo, desarrollamos esta app con el objetivo de que adoptar y dar en adopcion a mascotas sea mas facil para los usuarios, mostrandoles mascotas que buscan familia cerca de su hubicacion utilizando geolocalizacion. Ademas, nos expandimos brindando servicios como contratar paseadores, un ecommerce, y un apartado para ayudar a las personas que han extraviado su mascota.
                    </p>
                </div>
                <div className={css.containerTecnologias}>
                    <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff9500" }} className={css.icono} /> 
                    <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#1968f0"}} className={css.icono} /> 
                    <FontAwesomeIcon icon={faSquareJs} style={{ color: "#eeff00" }} className={css.icono} /> 
                    <FontAwesomeIcon icon={faReact} style={{ color: "#0df8f4" }} className={css.icono} /> 
                    <FontAwesomeIcon icon={faNode} style={{ color: "#1adb3a" }} className={css.icono} /> 
                </div>
            <br />
                <div className={css.containerGit}>
                    <a href="">
                        <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                    </a>
                    <a href={enlaces}>
                        <FontAwesomeIcon icon={faLink} fade className={css.iconoEnlace} />
                    </a>
                    
                </div>
        </div>
    )
}