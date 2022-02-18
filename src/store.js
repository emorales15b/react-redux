import { createStore } from "redux"

const inicialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 5,
            nombre: "Alvaro Felipe",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 6,
            nombre: "Alexys Lozada",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 7,
            nombre: "Harold Pajuelo",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 8,
            nombre: "Manu Rodriguez",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 9,
            nombre: "AlejoRodríguez",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 11,
            nombre: "Ricardo Otero",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 12,
            nombre: "Deivis Rivera",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        },
        {
            id: 13,
            nombre: "Percy Tuncar",
            foto: "https://img.icons8.com/color/480/cristiano-ronaldo.png"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = inicialState, action) => {
    
    if(action.type === 'AGREGAR_TITULAR'){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR" ){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE" ){
        return{
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)