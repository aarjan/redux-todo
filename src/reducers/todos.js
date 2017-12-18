/*
    Note that todos also accepts state—but it's an array! 
    Now todoApp just gives it the slice of the state to manage, 
    and todos knows how to update just that slice. 
    This is called reducer composition, and it's the fundamental pattern of building Redux apps.
*/
const todos = (state=[],action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id===action.id)
                ? {...todo,completed:!todo.completed} // cloning a todo with changed params
                // or use Object.Assign({},todo,{completed:!todo.completed})
                : todo
            )
        default:
            return state
    }
}

export default todos