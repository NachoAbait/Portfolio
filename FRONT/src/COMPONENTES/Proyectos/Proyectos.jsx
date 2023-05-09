
import css from "./Proyectos.module.css"
import React, { useEffect, useState , useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
//COMPONENTES
import TarjetaProyecto from "../TarjetaProyecto/TarjetaProyecto";
//ACTIONS
import getProyecto from "../../ACTIONS/getProyecto"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faNode, faHtml5, faCss3Alt, faSquareJs, faReact, faGithub , } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export default function Proyectos() {

    //----------------------ANIMACION-------------------------------
    
    const proyectosRef = useRef(null);

    useEffect(() => {
      const altura = window.innerHeight / 1.3;
  
      function handleScroll() {
        const distancia = proyectosRef.current.getBoundingClientRect().top;
  
        if (distancia <= altura) {
          proyectosRef.current.classList.add(css.aparece);
        } else {
          proyectosRef.current.classList.remove(css.aparece);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    //-------------------------------------------------------------------------------------
    const proyRef = useRef(null);

    useEffect(() => {
      const altura = window.innerHeight / 1.3;
  
      function handleScroll() {
        const distancia = proyRef.current.getBoundingClientRect().top;
  
        if (distancia <= altura) {
          proyRef.current.classList.add(css.apareceProy);
        } else {
          proyRef.current.classList.remove(css.apareceProy);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    //-------------------------------------------------------------------------------------


    return (
        <section className={css.Proyectos} id="proyectos">
            <div className={css.titulo} ref={proyectosRef}>
                <h4> ----- Proyectos -----</h4>
                <h1>EXPERIENCIA</h1>
            </div>
        
            <div className={css.container} ref={proyRef}>
          
              <div className={css.Tarjeta}>
                <div className={`${css.cara} ${css.front}`}>
                  <div className={css.containerFoto}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjA9NiUux2YAr1qbu5GJDMEq0bMy5gLxllytHpMs&s" className={css.foto}/>
                  </div>
                  <div className={css.containerNombre}>
                    <h1 className={css.nombre}>
                      Adopt.Me
                    </h1>
                  </div>
                  <div className={css.containerTecnologias}>
                      <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff9500" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#1968f0"}} className={css.icono} /> 
                      <FontAwesomeIcon icon={faSquareJs} style={{ color: "#eeff00" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faReact} style={{ color: "#0df8f4" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faNode} style={{ color: "#1adb3a" }} className={css.icono} />      
                  </div>
                </div>    

                <div className={`${css.cara} ${css.back}`}>
                  <div className={css.containerResumen}>  
                    <p className={css.resumen}>
                      Nuestro equipo se ha dedicado a desarrollar una aplicación que simplifica la adopción y el cuidado de mascotas. Gracias a la geolocalización, la aplicación ayuda a los usuarios a encontrar mascotas que necesitan un hogar en su área de residencia. <br></br>Además, hemos expandido nuestros servicios para incluir contratación de paseadores, un ecommerce y un apartado para ayudar a personas que han perdido a sus mascotas.
                      Al proporcionar estos servicios adicionales, nuestra aplicación no solo ayuda a los usuarios a encontrar una mascota, sino que también ofrece una solución completa para su cuidado.<br></br>Estos servicios adicionales también nos permiten generar ingresos adicionales y crecer nuestro negocio a largo plazo.
                    </p>
                  </div>
                  <div className={css.containerGit}>
                    <a target="blank" href="https://www.adoptme.com.ar/">
                      <FontAwesomeIcon icon={faLink} fade className={css.iconoEnlace} />
                    </a>     
                  </div>
                </div>   
              </div>

              <div className={css.Tarjeta}>
                <div className={`${css.cara} ${css.front}`}>
                  <div className={css.containerFoto}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/111/155/small/italian-food-ingredients-frame-free-photo.jpg" className={css.foto}/>
                  </div>
                  <div className={css.containerNombre}>
                    <h1 className={css.nombre}>
                      SPA Food
                    </h1>
                  </div>
                  <div className={css.containerTecnologias}>
                      <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff9500" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#1968f0"}} className={css.icono} /> 
                      <FontAwesomeIcon icon={faSquareJs} style={{ color: "#eeff00" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faReact} style={{ color: "#0df8f4" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faNode} style={{ color: "#1adb3a" }} className={css.icono} />      
                  </div>
                </div>    

                <div className={`${css.cara} ${css.back}`}>
                  <div className={css.containerResumen}>  
                    <p className={css.resumen}>
                      Nuestro equipo se ha dedicado a desarrollar una aplicación que simplifica la adopción y el cuidado de mascotas. Gracias a la geolocalización, la aplicación ayuda a los usuarios a encontrar mascotas que necesitan un hogar en su área de residencia. <br></br>Además, hemos expandido nuestros servicios para incluir contratación de paseadores, un ecommerce y un apartado para ayudar a personas que han perdido a sus mascotas.
                      Al proporcionar estos servicios adicionales, nuestra aplicación no solo ayuda a los usuarios a encontrar una mascota, sino que también ofrece una solución completa para su cuidado.<br></br>Estos servicios adicionales también nos permiten generar ingresos adicionales y crecer nuestro negocio a largo plazo.
                    </p>
                  </div>
              <div className={css.containerGit}>
              <a target="blank" href="">
                      <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                    </a> 
                    <a target="blank" href="https://www.adoptme.com.ar/">
                      <FontAwesomeIcon icon={faLink} fade className={css.iconoEnlace} />
                    </a>     
                  </div>
                </div>   
          </div>
          
          <div className={css.Tarjeta}>
                <div className={`${css.cara} ${css.front}`}>
                  <div className={css.containerFoto}>
                    <img src="https://img.freepik.com/vector-gratis/controles-videojuegos-estilo-neon-pared-ladrillo_24908-58916.jpg" className={css.foto}/>
                  </div>
                  <div className={css.containerNombre}>
                    <h1 className={css.nombre}>
                      SPA Juegos
                    </h1>
                  </div>
                  <div className={css.containerTecnologias}>
                      <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff9500" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#1968f0"}} className={css.icono} /> 
                      <FontAwesomeIcon icon={faSquareJs} style={{ color: "#eeff00" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faReact} style={{ color: "#0df8f4" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faNode} style={{ color: "#1adb3a" }} className={css.icono} />      
                  </div>
                </div>    

                <div className={`${css.cara} ${css.back}`}>
                  <div className={css.containerResumen}>  
                    <p className={css.resumen}>
                      Nuestro equipo se ha dedicado a desarrollar una aplicación que simplifica la adopción y el cuidado de mascotas. Gracias a la geolocalización, la aplicación ayuda a los usuarios a encontrar mascotas que necesitan un hogar en su área de residencia. <br></br>Además, hemos expandido nuestros servicios para incluir contratación de paseadores, un ecommerce y un apartado para ayudar a personas que han perdido a sus mascotas.
                      Al proporcionar estos servicios adicionales, nuestra aplicación no solo ayuda a los usuarios a encontrar una mascota, sino que también ofrece una solución completa para su cuidado.<br></br>Estos servicios adicionales también nos permiten generar ingresos adicionales y crecer nuestro negocio a largo plazo.
                    </p>
                  </div>
              <div className={css.containerGit}>
              <a target="blank" href="">
                      <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                    </a> 
                    <a target="blank" href="https://www.adoptme.com.ar/">
                      <FontAwesomeIcon icon={faLink} fade className={css.iconoEnlace} />
                    </a>     
                  </div>
                </div>   
          </div>
          
          <div className={css.Tarjeta}>
                <div className={`${css.cara} ${css.front}`}>
                  <div className={css.containerFoto}>
                    <img src="https://img.freepik.com/free-vector/portfolio-management-previous-projects-samples-works-catalog-skills-presentation-successful-graphic-designer-web-developer-cartoon-character_335657-1586.jpg?w=2000" className={css.foto}/>
                  </div>
                  <div className={css.containerNombre}>
                    <h1 className={css.nombre}>
                      Portfolio
                    </h1>
                  </div>
                  <div className={css.containerTecnologias}>
                      <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff9500" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#1968f0"}} className={css.icono} /> 
                      <FontAwesomeIcon icon={faSquareJs} style={{ color: "#eeff00" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faReact} style={{ color: "#0df8f4" }} className={css.icono} /> 
                      <FontAwesomeIcon icon={faNode} style={{ color: "#1adb3a" }} className={css.icono} />      
                  </div>
                </div>    

                <div className={`${css.cara} ${css.back}`}>
                  <div className={css.containerResumen}>  
                    <p className={css.resumen}>
                      Nuestro equipo se ha dedicado a desarrollar una aplicación que simplifica la adopción y el cuidado de mascotas. Gracias a la geolocalización, la aplicación ayuda a los usuarios a encontrar mascotas que necesitan un hogar en su área de residencia. <br></br>Además, hemos expandido nuestros servicios para incluir contratación de paseadores, un ecommerce y un apartado para ayudar a personas que han perdido a sus mascotas.
                      Al proporcionar estos servicios adicionales, nuestra aplicación no solo ayuda a los usuarios a encontrar una mascota, sino que también ofrece una solución completa para su cuidado.<br></br>Estos servicios adicionales también nos permiten generar ingresos adicionales y crecer nuestro negocio a largo plazo.
                    </p>
                  </div>
              <div className={css.containerGit}>
                  <a target="blank" href="">
                      <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                    </a>  
                    <a target="blank" href="https://www.adoptme.com.ar/">
                      <FontAwesomeIcon icon={faLink} fade className={css.iconoEnlace} />
                    </a>     
                  </div>
                </div>   
          </div>
          
          
            </div>
        </section>
    )
}