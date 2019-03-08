// a reducer takes in two things:
// 1. Action (info about what happened)
// 2. Copy of the current state

// redux composition es tomar parte del state que deseas actualizar
function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            // return the new state with the new commet
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            return [
                // from the start to the one we want to delete
                ...state.slice(0,action.i),
                //after the deleted one, to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            // take te current state
            ...state,
            // overwrite this post with a new one
           [action.postId]: postComments(state[action.postId], action) 
        }
    }
    return state;
}

export default comments;