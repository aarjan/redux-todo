const visibiltyFilter = (state='SHOW_ALL',action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibiltyFilter

/*
    Note that each of these reducers is managing its own part of the global state. 
    The state parameter is different for every reducer, and corresponds to the part of the state it manages.
 */