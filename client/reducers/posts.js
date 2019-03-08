// a reducer takes in two things:
// 1. Action (info about what happened)
// 2. Copy of the current state
// TODOS LOS REDUCES SE EJECUTAN Y LOS TIENES QUE CONDICIONAR PARA QUE SEPA QUE ESTADO DEVOLVERTE
function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index; 
            // le ponemos el slice a ambos lados porque queremos que nos retorne todo el array de principio a fin pero en medio alteramos el de I
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ]
        break;
        default:
            return state;
    }
}

export default posts;