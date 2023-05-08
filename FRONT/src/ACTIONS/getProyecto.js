import axios from "axios";
import { GET_PROYECTOS } from ".";

export default function getProyectos() {
  return async function (dispatch) {
    const proyectos = await axios.get("http://localhost:3001/proyectos");
    console.log(proyectos)
    return dispatch({ type: GET_PROYECTOS, payload: proyectos.data });
  };

}
