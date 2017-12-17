const visibiltyFilter = (state='SHOW_ALL',action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibiltyFilter

// why 'SHOW_ALL' or, a part of the state is only passed to intial state ? 