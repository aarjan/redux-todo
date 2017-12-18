import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

/*
    Provider makes the store available to all the container components in the application.
    We need to wrap to root component here.
*/
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
