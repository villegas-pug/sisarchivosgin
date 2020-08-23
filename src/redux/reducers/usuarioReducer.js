import {
   OBTENER_USUARIO_CARGANDO,
   OBTENER_USUARIO_EXITO,
   OBTENER_USUARIO_ERROR
} from '../actions/usuarioAccion'

const initialState = {
   data: [],
   loading: false,
   error: null
}

export default (state = initialState, { type, payload }) => {
   switch (type) {
      case OBTENER_USUARIO_CARGANDO:
         return { ...state, data: [], loading: true, error: null }
         break
      case OBTENER_USUARIO_EXITO:
         return { ...state, loading: false, data: payload }
         break
      case OBTENER_USUARIO_ERROR:
         return { ...state, loading: false, error: payload }
      default:
         return state
   }
}