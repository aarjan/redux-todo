import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos,onTodoClick}) => (
    <ul>
        {todos.map((todo,index) => (
            // assigning a clone of todo '{...todo}' using spread operator, instead of actual one
            // passing all the elements of 'todo' instead of passing it as a one todo Object
            <Todo key={index} {...todo} onClick={()=> onTodoClick(index)}/> 
        ))}    
    </ul>
)

TodoList.propTypes = {
    todos:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick:PropTypes.func.isRequired
}

export default TodoList