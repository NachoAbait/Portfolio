import React, { useEffect, useRef} from "react";
import css from "./Skills.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode, faHtml5, faCss3Alt, faSquareJs, faReact, faGithub, } from "@fortawesome/free-brands-svg-icons"



export default function Skills() {
    const skillsRef = useRef(null);

    useEffect(() => {
      const altura = window.innerHeight / 1.3;
  
      function handleScroll() {
        const distancia = skillsRef.current.getBoundingClientRect().top;
  
        if (distancia <= altura) {
          skillsRef.current.classList.add(css.aparece);
        } else {
          skillsRef.current.classList.remove(css.aparece);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
   

    return (
            
             <section className={css.Skills} id="skills">
            <div className={css.titulo} ref={skillsRef}>
                <h4>Skills & Habilidades -------</h4>
                <h1>CONOCIMIENTOS</h1>
            </div>
            <div className={css.grid}>
                
                    <div className={css.item}>
                        <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={ faHtml5} style={{color: "#eb7100",}} />
                        </div>
                        <div className={css.tecnologia}>
                            <h1>HTML</h1>
                        </div>
                    </div>
                
                

                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faCss3Alt} style={{color: "#005eff",}} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>CSS</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faSquareJs} style={{ color: "#fbff05", }} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>JavaScript</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faReact} style={{ color: "#00fbff", }} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>React Js</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faNode} style={{ color: "#14e006", }} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>Node Js</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                    <svg className={css.express} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
                    </div>
                    <div className={css.tecnologia}>
                        <h1>Express</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/><path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664-1.553.742-3.213 1.27-4.962 1.568-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693-.648-12.945 2.837-22.203 10.356-27.514 11.861-8.378 29.832-3.451 36.384-1.214 4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529 5.37-6.459 10.479-11.844 10.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z"/><path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287-14.47-18.488-39.519-9.745-39.937-9.518l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"/><path fill="#fff" d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503.024-.881.754-1.577 1.64-1.55.881.024 1.575.758 1.55 1.639-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01.066-.878.828-1.539 1.71-1.472.878.066 1.537.832 1.472 1.71-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466c-.785 0-1.498-.145-2.116-.35-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062.815.333 1.207 1.265.873 2.081-.333.815-1.265 1.206-2.08.874-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517 5.305-6.382 10.178-11.476 10.227-11.526.61-.636 1.62-.657 2.256-.047.636.61.658 1.62.048 2.255-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zM100.75 77.021c-.307 0-.617-.088-.891-.272-.73-.493-.924-1.484-.431-2.215 14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849-.333-.736-.06-1.606.631-2.025.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zM101.51 87.231c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716-1.911-5.822-11.011-24.034-32.604-24.388-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586.023.881-.672 1.614-1.553 1.637-.881.028-1.613-.672-1.637-1.553-.02-.727-.354-17.909 9.554-27.916 4.637-4.683 10.741-6.995 18.142-6.874 13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577-.199-.131-.378-.267-.54-.401-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zM51.252 92.125c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009-.762.851-1.311 1.548-1.794 2.162-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zM56.299 79.822c-.774 0-1.454-.565-1.575-1.354-.04-.265-.066-.531-.08-.799-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354.134.871-.464 1.685-1.335 1.819l-.244.02zm-13.835-37.562l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zM52.094 41.583c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zM54.912 44.409l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81-.28-.04-.556-.059-.821-.059-.812 0-1.243.183-1.345.282zM96.228 40.432c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zM93.409 42.992c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zM98.317 72.822c-.305 0-.613-.088-.886-.27-.732-.49-.929-1.481-.438-2.213 3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31-.048-.88.627-1.631 1.507-1.679.883-.047 1.632.627 1.679 1.507.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411-.308.459-.813.708-1.328.708z"/><path stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M4.335 19.029" fill="none"/></svg>
                    </div>
                    <div className={css.tecnologia}>
                        <h1>PostgreSQL</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#94795D" d="M87.259 100.139c.169-.325.331-.612.469-.909.087-.19.221-.228.41-.223 1.133.032 2.266.067 3.4.078.963.01 1.928-.008 2.892-.019 1.086-.013 2.172-.07 3.257-.039 1.445.042 2.853.325 4.16.968 1.561.769 2.742 1.94 3.547 3.483.514.985.812 2.03.931 3.14.172 1.608.059 3.179-.451 4.717-.632 1.906-1.832 3.365-3.499 4.458-1.283.841-2.69 1.338-4.198 1.622-1.596.301-3.197.204-4.798.209-1.756.007-3.511-.031-5.267-.051-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652.378-.061.77-.203 1.087-.413.184-.122.26-.44.332-.685.062-.214.065-.449.067-.675.025-3.425.051-6.849.065-10.272.003-.865-.017-1.732-.065-2.596-.034-.605-.357-1.019-1.077-1.162-.56-.111-1.124-.197-1.687-.296l-.189-.059zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042-.292-1.613-.998-3.018-2.238-4.119-2.005-1.779-4.419-2.053-6.949-1.841-.576.048-.7.245-.709.837-.014.84-.028 1.68-.029 2.52-.004 2.664-.004 5.328 0 7.992.001.758.009 1.516.031 2.272.024.774.305 1.429 1.063 1.729 1.195.473 2.452.529 3.706.336 2.003-.307 3.404-1.474 4.344-3.223.744-1.388.954-2.903 1.016-4.461zM108.204 117.503c-.024-.415.146-.758.356-1.073.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755.038-.262.074-.527.077-.792.025-2.097.049-4.194.059-6.291.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269.112-.271.219-.552.377-.796.059-.09.258-.125.392-.122.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759 1.149.612 1.792 1.559 1.976 2.849.192 1.355-.219 2.497-1.209 3.404-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466 1.188.487 2.133 1.248 2.633 2.463.395.959.395 1.959.161 2.953-.364 1.556-1.389 2.591-2.722 3.374-1.251.735-2.605 1.163-4.047 1.235-1.33.067-2.666.042-3.999.057l-.772.004c-1.284-.029-2.569-.062-3.854-.096l-.117-.032zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974.008.426-.007.864.085 1.274.138.613.418 1.166 1.106 1.342.929.239 1.878.287 2.818.124 1.177-.205 2.116-.795 2.631-1.916.382-.833.439-1.716.308-2.618-.174-1.188-.805-2.05-1.854-2.615-.688-.371-1.422-.598-2.204-.628-.876-.033-1.753-.035-2.629-.062-.246-.007-.28.118-.279.32.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085 1.032-.103 1.759-.622 2.138-1.609.193-.501.185-1.017.19-1.538.015-1.357-.777-2.469-2.066-2.929-.995-.355-2.021-.361-3.053-.333-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319l1.601.071z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#50382B" d="M10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07-.05-.281-.034-.576-.021-.867.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988.031-.667.062-1.335.065-2.002.009-1.642-.001-3.282.006-4.924.001-.384-.132-.67-.49-.826-.426-.188-.854-.372-1.285-.546-.204-.082-.469-.127-.445-.401.024-.279.281-.352.523-.407 1.002-.229 2.005-.452 3.004-.696.322-.079.63-.212 1.015-.346.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307.048.037.209-.03.289-.092.854-.65 1.758-1.211 2.789-1.538 1.597-.507 2.968-.037 3.928 1.34.338.485.339.485.808.146.805-.585 1.647-1.101 2.589-1.441 2.068-.747 4.055.201 4.774 2.284.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001-1.344.012-2.688.019-4.031.05-.234.006-.295-.052-.307-.271-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028.015-1.878.054-3.761-.041-5.635-.099-1.944-1.642-2.979-3.526-2.481-.615.162-1.172.446-1.69.814-.175.125-.208.269-.194.488.053.828.086 1.657.093 2.486.012 1.451-.006 2.902 0 4.354.002.588.203.813.784.949l.863.199.16.036c.012.276.023.552.01.828-.008.173-.142.188-.292.185-.839-.021-1.679-.049-2.518-.047-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758.114-2.01.196-4.021.007-6.03-.037-.39-.164-.786-.326-1.145-.515-1.138-1.674-1.613-3.011-1.271-.635.162-1.208.453-1.75.82-.256.174-.378.404-.378.695 0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939.344.078.692.131 1.082.203z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F382B" d="M71.001 105.285c.155.754.152 1.432-.402 1.946-.55.511-1.246.339-1.925.225.063.358.133.662.167.97.247 2.289-.738 3.988-2.861 4.959-.802.366-1.653.502-2.522.572-.432.034-.81.364-.851.719-.042.36.184.73.636.838.533.127 1.089.163 1.636.226 1.174.134 2.361.195 3.521.405 1.754.316 2.733 1.847 2.424 3.609-.275 1.568-1.183 2.709-2.449 3.584-2.133 1.478-4.473 1.91-6.965 1.156-1.425-.432-2.43-1.369-2.777-2.885-.174-.759.011-1.446.582-1.961.679-.61 1.418-1.154 2.129-1.73l.23-.231-.264-.185c-.725-.344-1.305-.815-1.53-1.633-.077-.277.003-.459.238-.601.4-.241.798-.486 1.193-.735.186-.116.37-.236.543-.37.236-.18.215-.314-.067-.418-.656-.242-1.239-.593-1.691-1.133-.755-.901-.969-1.974-.907-3.107.097-1.77 1.058-2.936 2.62-3.686 1.857-.891 3.72-.947 5.613-.135.7.3 1.438.364 2.189.312.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993-.916.934-.911 2.229.003 3.167.694.711 1.56 1.044 2.523 1.144 1.125.116 2.233.069 3.255-.494 1.09-.603 1.632-1.723 1.387-2.851-.203-.931-.889-1.357-1.724-1.602-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158.223.982.65 1.845 1.627 2.282 1.147.515 2.612.294 3.114-1.316.344-1.103.302-2.198-.113-3.274-.185-.48-.483-.886-.91-1.184-.996-.695-2.793-.787-3.525.749-.238.499-.331 1.03-.351 1.585z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F372B" d="M47.35 105.038c.037.171.111.365.113.56.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636 1.942-.585 3.882.478 4.515 2.456.24.752.335 1.525.344 2.311.02 1.746.032 3.492.05 5.238.006.627.078.739.671.92.336.103.683.175 1.03.229.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754-1.678-.003-3.355.007-5.033.021-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484.282-.042.562-.107.837-.179.283-.073.419-.282.457-.562.019-.142.044-.284.043-.426-.024-1.908.007-3.818-.097-5.723-.084-1.541-1.26-2.459-2.807-2.354-.759.053-1.445.306-2.071.743-.413.289-.496.706-.494 1.155.008 1.784.025 3.568.044 5.353.004.391.015.782.052 1.17.039.424.188.595.604.687.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819-1.735-.007-3.47.004-5.204.023-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064.033-2.271.045-4.541.068-6.812.003-.326-.12-.579-.424-.714-.426-.188-.856-.367-1.287-.544-.238-.098-.51-.16-.519-.489-.006-.232.242-.437.581-.506.681-.138 1.368-.253 2.041-.422.67-.167 1.328-.391 2.062-.611z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F382B" d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123-1.9 1.633-4.864 2.188-7.287.967-1.034-.521-1.794-1.32-2.289-2.357-.759-1.595-.949-3.272-.553-4.99.392-1.699 1.421-2.93 2.961-3.727 1.584-.819 3.252-1.139 5.011-.709 2.225.543 3.824 2.357 4.142 4.667.057.405.079.815.098 1.026zm-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6-.073-1.246-.353-2.433-1.075-3.476-.685-.988-1.618-1.571-2.832-1.656-1.359-.096-2.501.664-2.902 2.052-.602 2.084-.398 4.115.66 6.024.461.832 1.144 1.446 2.059 1.769 1.793.631 3.383-.186 3.85-2.022.172-.678.222-1.387.328-2.081z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F372B" d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152-1.007 1.31-2.391 2.01-3.965 2.305-1.861.348-3.609.032-5.104-1.217-.71-.594-1.195-1.355-1.515-2.221-.525-1.42-.656-2.875-.333-4.358.345-1.587 1.241-2.8 2.63-3.614 1.606-.939 3.339-1.358 5.19-.936 2.38.544 3.754 2.095 4.262 4.443.102.474.116.964.171 1.446zm-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886-.617-.861-1.443-1.401-2.502-1.552-1.726-.246-2.854.778-3.228 2.169-.488 1.817-.335 3.612.42 5.335.471 1.074 1.215 1.911 2.358 2.317 1.782.633 3.396-.205 3.847-2.034.166-.669.216-1.367.319-2.053z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009-2.543.4-5.083.814-7.624 1.226-2.627.426-5.256.835-7.878 1.289-.929.16-2.079-.031-2.454 1.253l-.18.061.127-7.678-.129-18.526 1.224-.21c2.001-.327 4.002-.66 6.006-.979 2.39-.379 4.782-.749 7.174-1.119 1.056-.162 2.113-.313 3.169-.471z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339-6.658-6.28-11.529-13.673-13.928-22.586-.661-2.452-1.101-4.945-1.243-7.479-.1-1.774-.243-3.563-.117-5.328.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537 1.344 3.956 2.677 7.916 4.004 11.879 4.169 12.451 8.333 24.905 12.509 37.354.082.243.293.442.445.661l-.664 2.268z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M82.362 33.544c-1.057.157-2.114.309-3.169.471-2.392.37-4.784.74-7.174 1.119-2.003.318-4.004.651-6.006.979l-1.224.21-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856-.033-1.627-.068-3.255-.141-4.88-.04-.873-.181-1.742-.237-2.615-.033-.502.011-1.008.022-1.512.624 1.209 1.235 2.427 1.876 3.627 1.013 1.897 2.628 3.295 4.083 4.82 5.746 6.031 9.825 13.039 12.368 20.957z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253 2.622-.454 5.251-.863 7.878-1.289 2.541-.411 5.081-.825 7.624-1.226.301-.047.615-.008.923-.009-.475 1.696-.849 3.429-1.452 5.078-.685 1.87-1.513 3.696-2.392 5.486-1.314 2.675-2.951 5.171-4.853 7.458-1.466 1.762-3.1 3.393-4.737 5.002-.906.889-1.972 1.614-2.966 2.414l-.258-.176-.927-.792-.959-2.104c-.661-2.462-1.007-4.968-1.065-7.516l.018-.428.131-1.854c.043-.633.101-1.265.128-1.898.096-2.276.182-4.554.273-6.832z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392-2.101-6.271-4.176-12.551-6.274-18.824-1.693-5.062-3.401-10.121-5.118-15.176-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672 1.73 5.12 3.457 10.241 5.169 15.367 2.228 6.67 4.441 13.343 6.667 20.014.089.266.235.512.375.811l.512-.596c-.043 2.56-.085 5.118-.127 7.678z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M48.076 25.458c.161.209.391.395.471.631 1.717 5.055 3.425 10.113 5.118 15.176 2.098 6.273 4.173 12.553 6.274 18.824 1.27 3.79 2.569 7.57 3.867 11.392l.584-.221-.131 1.854-.119.427c-.203 2.029-.374 4.062-.622 6.087-.124 1.015-.389 2.011-.59 3.015-.151-.219-.363-.418-.445-.661-4.177-12.449-8.34-24.903-12.509-37.354-1.327-3.963-2.661-7.923-4.004-11.879-.068-.201-.26-.359-.394-.537l2.5-6.754z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811-2.226-6.671-4.439-13.344-6.667-20.014-1.712-5.126-3.439-10.247-5.169-15.367-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586 1.284 3.76 2.556 7.523 3.822 11.289 1.182 3.518 2.346 7.04 3.542 10.552.08.235.359.401.545.601l.01.798.129 18.526z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M64.779 35.525c-.187-.199-.465-.365-.545-.601-1.195-3.512-2.36-7.034-3.542-10.552-1.266-3.766-2.538-7.529-3.822-11.289-.075-.219-.283-.392-.429-.586 1.504-1.473 2.961-2.999 4.526-4.404 1.391-1.248 2.509-2.586 2.561-4.559l.11-.393.396.998c-.01.504-.055 1.01-.022 1.512.057.873.198 1.742.237 2.615.073 1.625.108 3.253.141 4.88.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.929 82.642c.201-1.004.466-2 .59-3.015.248-2.024.419-4.058.622-6.087l.051-.008.05.009c.058 2.548.404 5.054 1.065 7.516-.135.178-.324.335-.396.535-.555 1.566-1.079 3.145-1.637 4.71-.076.214-.29.381-.439.568l-.571-1.96.665-2.268z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.835 86.871c.149-.188.363-.354.439-.568.558-1.565 1.082-3.144 1.637-4.71.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552l-.532-3.045z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477-.641 1.836-1.252 3.682-1.898 5.517-.082.232-.309.415-.468.621l-.255-3.177z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.621 93.091c.16-.206.387-.389.468-.621.646-1.835 1.258-3.681 1.898-5.517.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716-.121-.158-.337-.311-.347-.475-.038-.642-.011-1.289-.008-1.934z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78-.931 2.387-1.078-.379z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.055 95.88l.931-2.387.192 2.824-1.123-.437z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176-.805 1.426z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.242 73.542l-.05-.009-.051.008.119-.427-.018.428z"/></svg>
                    </div>
                    <div className={css.tecnologia}>
                        <h1>MongoDB</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"/></svg>
                    </div>
                    <div className={css.tecnologia}>
                        <h1>Bootstrap</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                        <svg className={ css.seq} xmlns="http://www.w3.org/2000/svg" id="sequelize" viewBox="0 0 128 128"><defs></defs><title>Artboard 12</title><g id="original"><path class="cls-1" d="M101.84,41.72V86L64.18,108.32l-.34.31V125.2l.34.32,53-30.64V33.12l-.5-.12-15,8.36.08.36"/><path class="cls-2" d="M26.4,86.4l37.78,21.92v17.2L10.78,94.76V33.24l.55-.08,14.91,8.67.16.5V86.4"/><path class="cls-3" d="M26.4,42.32,10.78,33.24,64.06,2.48l53.16,30.64-15.38,8.6L64.06,20.16,26.4,42.32"/><path class="cls-1" d="M63.53,81.33l-.41-.42V64.27l.41-.21.1-.41L77.9,55.33l.44.1V72.58l-14.8,8.76"/><path class="cls-2" d="M48.48,73.11V55.3l.41,0,14.51,8.45.12.33V81.33L48.48,73.11"/><path class="cls-3" d="M63.29,46.54,48.48,55.3l15.05,8.76,14.8-8.64L63.29,46.54"/><path class="cls-1" d="M45.11,92.19l-.41-.42V75.13l.41-.21.1-.41,14.27-8.32.44.1V83.43l-14.8,8.76"/><path class="cls-2" d="M30.06,84V66.16l.41,0L45,74.59l.12.33V92.19L30.06,84"/><path class="cls-3" d="M44.86,57.4l-14.8,8.76,15.05,8.76,14.8-8.64L44.86,57.4"/><path class="cls-1" d="M83.27,92.6l-.41-.42V75.54l.41-.21.1-.41L97.64,66.6l.44.1V83.84L83.27,92.6"/><path class="cls-2" d="M68.22,84.38V66.57l.41,0L83.15,75l.12.33V92.6L68.22,84.38"/><path class="cls-3" d="M83,57.81l-14.8,8.76,15.05,8.76,14.8-8.64L83,57.81"/><path class="cls-1" d="M64.85,103.46l-.41-.42V86.4l.41-.21.1-.41,14.27-8.32.44.1V94.7l-14.8,8.76"/><path class="cls-2" d="M49.8,95.23V77.43l.41,0,14.51,8.45.12.33v17.27L49.8,95.23"/><path class="cls-3" d="M64.6,68.67,49.8,77.43l15.05,8.76,14.8-8.64L64.6,68.67"/><path class="cls-1" d="M63.53,57.73l-.41-.42V40.67l.41-.21.1-.41L77.9,31.72l.44.1V49l-14.8,8.76"/><path class="cls-2" d="M48.48,49.5V31.7l.41,0,14.51,8.45.12.33V57.73L48.48,49.5"/><path class="cls-3" d="M63.29,22.94,48.48,31.7l15.05,8.76,14.8-8.64L63.29,22.94"/><path class="cls-1" d="M45.11,68.59l-.41-.42V51.53l.41-.21.1-.41,14.27-8.32.44.1V59.83l-14.8,8.76"/><path class="cls-2" d="M30.06,60.36V42.55l.41,0L45,51l.12.33V68.59L30.06,60.36"/><path class="cls-3" d="M44.86,33.8l-14.8,8.76,15.05,8.76,14.8-8.64L44.86,33.8"/><path class="cls-1" d="M83.27,69l-.41-.42V51.94l.41-.21.1-.41L97.64,43l.44.1V60.24L83.27,69"/><path class="cls-2" d="M68.22,60.77V43l.41,0,14.51,8.45.12.33V69L68.22,60.77"/><path class="cls-3" d="M83,34.21,68.22,43l15.05,8.76,14.8-8.64L83,34.21"/><path class="cls-1" d="M64.85,79.85l-.41-.42V62.79l.41-.21.1-.41,14.27-8.32.44.1V71.09l-14.8,8.76"/><path class="cls-2" d="M49.8,71.63V53.82l.41,0,14.51,8.45.12.33V79.85L49.8,71.63"/><path class="cls-3" d="M64.6,45.06,49.8,53.82l15.05,8.76,14.8-8.64L64.6,45.06"/></g></svg>                    </div>
                    <div className={css.tecnologia}>
                        <h1>Sequelize</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                        <FontAwesomeIcon className={css.font} icon={faGithub} style={{ color: "#02060d", }} />
                    </div>
                    <div className={css.tecnologia}>
                        <h1>GIT</h1>
                    </div>
                </div>
                
                <div className={css.item}>
                    <div className={css.icono}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="Line"><path d="M21.53,10.46a5,5,0,0,0-2.2-1.26,4,4,0,1,0-6.8-4.15A4.75,4.75,0,0,0,12,5a4.75,4.75,0,0,0-.53,0A4,4,0,1,0,4.67,9.2a5.08,5.08,0,0,0-2.21,1.27A5,5,0,0,0,1,14a3,3,0,0,0,3,3H5.07A8.26,8.26,0,0,0,5,18a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3,8.26,8.26,0,0,0-.07-1H20a3,3,0,0,0,3-3A5,5,0,0,0,21.53,10.46ZM16,5a2,2,0,0,1,0,4,4,4,0,0,0-1.6-3.18A2,2,0,0,1,16,5ZM14,9a2,2,0,1,1-2-2A2,2,0,0,1,14,9ZM8,5a2,2,0,0,1,1.6.82A4,4,0,0,0,8,9,2,2,0,0,1,8,5ZM4,15a1,1,0,0,1-1-1,3,3,0,0,1,3-3H8.56a4.54,4.54,0,0,0,.48.67A7.05,7.05,0,0,0,5.68,15Zm12,4H8a1,1,0,0,1-1-1,5,5,0,0,1,10,0A1,1,0,0,1,16,19Zm4-4H18.32A7.05,7.05,0,0,0,15,11.67a4.54,4.54,0,0,0,.48-.67H18a3,3,0,0,1,3,3A1,1,0,0,1,20,15Z"/></g></svg>
                    </div>
                    <div className={css.tecnologia}>
                        <h1>SCRUM</h1>
                    </div>
                </div>
                
            </div>
            <div className={css.extras}>
                
            </div>
           
       </section>
        
           
    
        
    )
}