import React, { useEffect, useRef} from "react";
import css from "../Inicio/Inicio.module.css"
import foto from "../../IMG/FotoCV3.jpg"


export default function Inicio() {
      
    const aprendiendoRef = useRef(null);

    useEffect(() => {
       aprendiendoRef.current.classList.add(css.aparece);
     }, []);
   
    return (
        <section className={css.inicio} id="inicio">
            <div className={css.presentacion}>
                    <div className={css.img}>
                    <img
                        src={ foto}
                    alt="foto"
                    className={css.fotito}
          ></img>
                    </div>
                    <div className={css.h1}>
                        <h1 >Full Stack Developer </h1>
                    </div>
                    <div className={css.h4} ref={aprendiendoRef}>
                        <h4 className={css.aprendiendo} >Como desarrollador, mi pasión es crear soluciones tecnológicas que mejoren la vida de las personas y transformen el mundo digital. Estoy comprometido con la excelencia y siempre busco ofrecer soluciones innovadoras y efectivas a mis clientes. <br></br> ¡Bienvenidos a mi portafolio!</h4>
                    </div>
                    
                
            </div>

            <div className={css.icono}>
                <div className={css.animacion}>
                <iframe  className={css.js} src="https://embed.lottiefiles.com/animation/90466"></iframe>
                </div>

            </div>
           
            <div className={css.efecto}>
                pija
                
            </div>
            
                    <div className={css.olas}>
                        <svg className={css.waves} preserveAspectRatio='none' shapeRendering='auto' viewBox='0 24 150 28' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                            <defs>
                                <path d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' id='gentle-wave'/>
                            </defs>
                    <g className={ css.parallax}>
                                <use fill='#292727' x='48' xlinkHref='#gentle-wave' y='0'/>
                                <use fill='#4A4646' x='48' xlinkHref='#gentle-wave' y='3'/>
                                <use fill='#767474' x='48' xlinkHref='#gentle-wave' y='5'/>
                                <use fill='#FFFF' x='48' xlinkHref='#gentle-wave' y='7'/>
                        </g>
                        </svg>
                    </div>
            <div className={css.btn}>
                <a target="blank" href="https://drive.google.com/file/d/1YGz8ahNfhIM-11j8M-LWcr2SRh1hMMqr/view?usp=sharing">
                    <button className={css.boton}>Descargar CV</button>
                </a>
            
            </div>
        </section>
        
    )
}