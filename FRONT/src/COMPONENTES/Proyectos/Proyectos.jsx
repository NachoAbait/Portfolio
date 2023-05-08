
import css from "./Proyectos.module.css"
import React, { useEffect, useState , useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
//COMPONENTES
import TarjetaProyecto from "../TarjetaProyecto/TarjetaProyecto";
//ACTIONS
import getProyecto from "../../ACTIONS/getProyecto"

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



    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(getProyecto())
    }, [dispatch])
    
    const proyectos = useSelector((state) => state.proyectos) 
  
    console.log("PROYECTOS", proyectos)

    return (
        <section className={css.Proyectos} id="proyectos">
            <div className={css.titulo} ref={proyectosRef}>
                <h4> ----- Proyectos -----</h4>
                <h1>EXPERIENCIA</h1>
            </div>
            <div className={css.container}>
            {proyectos ? proyectos.map((i) => {
                    return (<TarjetaProyecto nombre={i.nombre} img={i.img} resumen={i.resumen} git={i.git} tecnologias={i.tecnologias} enlaces={i.enlaces} />)
                    
                }) : null }  
            </div>
        </section>
    )
}