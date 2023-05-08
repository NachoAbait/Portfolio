import React, { useEffect, useRef} from "react";
import css from "./Contacto.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode, faHtml5, faCss3Alt, faSquareJs, faReact, faGithub, faWhatsapp, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons"

export default function Contacto() {
const contactoRef = useRef(null);

  useEffect(() => {
    const altura = window.innerHeight / 1.3;

    function handleScroll() {
      const distancia = contactoRef.current.getBoundingClientRect().top;

      if (distancia <= altura) {
        contactoRef.current.classList.add(css.aparece);
      } else {
        contactoRef.current.classList.remove(css.aparece);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <section className={css.Contacto} id="contacto">

            <div className={css.titulo} id="hola" ref={contactoRef}>
                <h4> ----- Contacto -----</h4>
                <h1>CONTACTAME</h1>
            </div>
            <div className={css.grid}>
            <a target="_blank" href="https://www.linkedin.com/in/nacho-abait-480073256/">
                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faLinkedin} style={{ color: "#005eff", }} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>Linkdin</h1>
                    </div>
                </div>
            </a>
           
            <a target="_blank" href="https://github.com/NachoAbait">
                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faGithub} style={{ color: "#02060d", }} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>Git</h1>
                    </div>
                </div>
            </a>
                

                <a target="_blank" href="mailto:nachoabait@hotmail.com">
                    <div className={css.item}>
                        <div className={css.icono}>
                            <FontAwesomeIcon className={css.font} icon={faEnvelope} style={{ color: "#2d22c9", }} />
                        </div>
                        <div className={css.tecnologia}>
                            <h1>Correo</h1>
                        </div>
                    </div>
                </a>
                

                <a target="_blank" href="https://api.whatsapp.com/send?phone=2245500251&text=Hola">
                    <div className={css.item}>
                        <div className={css.icono}>
                            <FontAwesomeIcon className={css.font} icon={faWhatsapp} style={{ color: "#04ff00", }} />
                        </div>
                        <div className={css.tecnologia}>
                            <h1>WhatsApp</h1>
                        </div>
                    </div>
                </a>
                


            </div>
            <div className={css.olas}>
                        <svg className={css.waves} preserveAspectRatio='none' shapeRendering='auto' viewBox='0 24 150 28' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                            <defs>
                                <path d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' id='gentle-wave'/>
                            </defs>
                    <g className={ css.parallax}>
                                <use fill='#FFFF' x='48' xlinkHref='#gentle-wave' y='0'/>
                                <use fill='#767474' x='48' xlinkHref='#gentle-wave' y='3'/>
                                <use fill='#4A4646' x='48' xlinkHref='#gentle-wave' y='5'/>
                                <use fill='#292727' x='48' xlinkHref='#gentle-wave' y='7'/>
                        </g>
                        </svg>
                    </div>
        </section>
    )
}