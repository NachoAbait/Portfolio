//ACCIONES
import { GET_PROYECTOS } from "../ACTIONS";

//ESTADO GLOBAL
const initialState = {
  proyectos: [],
};

//ROOT REDUCER
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
  }
}
