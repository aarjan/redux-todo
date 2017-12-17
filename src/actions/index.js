let nextTodoid = 0

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoid++,
        text
    }
}

export const setVisiblityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type:'TOGGLE_TODO',
        id
    }    
}