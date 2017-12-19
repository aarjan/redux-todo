import React  from "react";
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
                >
                {/* Setting the value of input in local variable 'input' */}
                    <input  
                        ref = {node => {input = node}}
                    />
                    <button type="submit"> AddTodo </button>
                </form>
        </div>
    )
}

// Inject just dispatch and don't listen to store
AddTodo = connect()(AddTodo)

export default AddTodo

// For more understanding of connect function
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
// https://redux.js.org/docs/basics/UsageWithReact.html