import React, { useEffect, useRef} from "react";
import css from "../Inicio/Inicio.module.css"


export default function Inicio() {
      
   const aprendiendoRef = useRef(null);

   useEffect(() => {
     const altura = window.innerHeight / 1.3;
 
     function handleScroll() {
       const distancia = aprendiendoRef.current.getBoundingClientRect().top;
 
       if (distancia <= altura) {
        aprendiendoRef.current.classList.add(css.aparece);
       } else {
        aprendiendoRef.current.classList.remove(css.aparece);
       }
     }
 
     window.addEventListener("scroll", handleScroll);
 
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
   
    return (
        <section className={css.inicio} id="inicio">
            <div className={css.presentacion}>
                    <div className={css.img}>
                    <img
                    src="https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"
                    alt="foto"
                    className={css.fotito}
          ></img>
                    </div>
                    <div className={css.h1}>
                        <h1 >Full Stack Developer </h1>
                    </div>
                    <div className={css.h4} ref={aprendiendoRef}>
                        <h4 className={css.aprendiendo} >Aprendiendo  dia a dia para cambiar la vida de miles de usuarios de todo el mundo</h4>
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
            <button className={css.boton}>Descargar CV</button>
            </div>
        </section>
        
    )
}