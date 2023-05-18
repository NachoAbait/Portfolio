
import css from "./Proyectos.module.css"
import React, { useEffect, useState , useRef} from "react"
import { useDispatch, useSelector } from "react-redux"

//ACTIONS
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
                    <img src="https://static.vecteezy.com/system/resources/previews/002/872/600/non_2x/cute-dog-in-box-with-a-poster-adopt-me-animal-cartoon-concept-isolated-can-used-for-t-shirt-greeting-card-invitation-card-or-mascot-flat-cartoon-style-free-vector.jpg" className={css.foto}/>
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
                  <div className={css.containerResumenSPA}>  
                <p className={css.resumen}>
                  ¡Descubre nuestra increíble app de recetas! Con más de 5000 recetas y +20 tipos de dietas, encontrarás una amplia variedad de opciones saludables.<br></br> Además, puedes crear tus propias recetas y utilizar filtros combinados para personalizar tus búsquedas.
                </p>
                  </div>
              <div className={css.containerGit}>
              <a target="blank" href="https://github.com/NachoAbait/SPA-Food">
                      <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                    </a> 
                    <a target="blank" href="https://prueba-seven-rho.vercel.app/">
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
                  <div className={css.containerResumenSPA}>  
                    <p className={css.resumen}>
                    ¡Bienvenido a nuestra increíble app de colecciones de juegos! Con una selección de más de 30.000 juegos, encontrarás una amplia variedad de opciones para explorar y descubrir.<br></br>
                    Nuestra app te ofrece una colección curada de juegos emocionantes de diferentes géneros y estilos. Desde clásicos atemporales hasta los últimos lanzamientos, encontrarás resúmenes detallados y reseñas de cada juego para ayudarte a tomar decisiones informadas.
                    </p>
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
                  <div className={css.containerResumenPorfolio}>  
                <p className={css.resumen}>
                    Este portfolio es una muestra de mi experiencia y habilidades como desarrollador, donde podrás encontrar una selección de mis mejores proyectos, así como una lista de mis habilidades técnicas. <br></br> Me apasiona crear soluciones tecnológicas innovadoras y efectivas que satisfagan las necesidades de mis clientes, y estoy comprometido en ofrecer un servicio excepcional en cada proyecto.
                    </p>
                  </div>
              <div className={css.containerGit}>
                  <a target="blank" href="https://github.com/NachoAbait/Portfolio">
                      <FontAwesomeIcon icon={faGithub} fade className={css.iconoEnlace} />
                    </a>  
                       
                  </div>
                </div>   
          </div>
          
          
            </div>
        </section>
    )
}