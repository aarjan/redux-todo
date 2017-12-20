A basic Todo app has a UI like
1. An input box, with a button to add a new Todo
2. A list of todos
3. A set of filter options. On Selecting the filter, the todos list is interactively changed.

So, here are the possible UI components:
1. Add Todo - adds Todo
2. Todo List    - Encapsulates a list of todo
3. Todo     - A single Todo object
4. Filter List  - Encapsulates a list of Filters
5. Filter type  - A Filter Object
6. App  - Encapsulates the whole UI components

A Todo can have its own state.
Each Todo has following properties:
    1.  ID      - integer
    2.  Text    - string
    3.  Completed   - boolean
Since, there can be multiple Todos, let's move the state upper to TodoList.


Since, a list of Todo changes based on the completed factor, 
we can use Filter component to filter the todo list.

A Filter type component has a following attribute
    1. Visibility Type ; SHOW_ALL/ACTIVE/COMPLETE

Since there can be only one Filter at a time, let's put the state to the Filter type component.

So there are  two _states_ of the todo app at a given time: 
1.  A list of todos
2.  Visibility Filter


## Redux

Working with mulitple states of different components can be tedious to handle.
Because, changes made on the state/attributes of one Component may not reflect on another state/Component.

Redux solves this problem, using the concept of one store. 

### Store

Redux Store holds the application state. It has the following state:
1. A list of todos
2. Visibilty Filter

It is same as above, but on Redux, it is controlled by one an only Store.
As a whole it has a form like:
{
    [
        {
            id: [number]
            text: [string]
            completed: [true/false]
        }...
    ]
    visibilityFilter: [ SHOW_ALL / ACTIVE / COMPLETED ]
}

Store can be updated by dispatch() functions.
dispatch() takes an action as an argument.

### Action
Action is a simple JS object. 
Action must have a _type_ parameter,  along with extra payload to update the state.

In our TodoApp, we define three actions:
1. Add Todo
2. Toggle Todo
3. Set Visibility Filter

### Reducer
Reducer functions updates the state of the app based on the action specified.
It takes two params, _state_ & _action_
Since, our application state has two core elements, _todo list_ and _filter_,
we use two reducer functions:

1.  todos(state=[],action)
    - Since, the _state_ passed can have additional nested elements, we can work on individual state elements using switch() function based on the action specified.

2.  filter(state='SHOW_ALL',action)

We pass default state values incase the state is not defined.
Since each reducer works on its own state element, we pass only the part of that state.
So that, each reducer is isolated of the behaviour of others, and can't modify other state elements.

### Components
The components of our Todo app can be divided into Presentable and Container componenets:

#### Presentable Components 
They are basically the dumb components that provides the UI for the application.
We have following Pres. components:
1. __App__   - A root component
2. __TodoList__ - A parent component that displays a list of Todos
3. __Todo__  - Displays an individual Todo
4. __Footer__    - A parent component that holds a list of FilterLink
5. __Link__  - Displays an individual Filter option

#### Container Components
They are basically the smart components where all the business logics are processed.
Container components can be used to provide necessary props for __state changes__ and handle __dispatch actions__ to the wrapping _Presentable Components_.  

A container basically has two helper functions:  
-   mapStateToProps
    - provides props to the wrapped component based on the _Application State_
- mapDispatchToProps
    - provides dispatch callbacks as props to the wrapped component
  
We have follwing Container components:
1. __VisibleTodo__   
    -   Provides the _visible Todos_ based on the type of __Visibility Filter__
    -   Provides _dispatch_ callbacks for __onToggle action__ of each todo's
    -   Provides props to __TodoList__ component
  
2. __FilterLink__
    -   It is called within the Footer component.
    -   A __filter__ prop along with additional __children__ html elements are passed to it by Footer.
    -   So, we can access the props by adding a second param __own props__ in our helper functions.
    -   Provides __active__ that checks if the ___filter__ provided is same as state's __visibility filter__.
    -   Provides _dispatch_ callbacks for __Filter Link__ clicked.
    -   Provides props to __Link__ component

3. __Add Todo__
    - Has both functional and dump parts
    - Handles callback to __add Todo__
    
#### The process as a whole
A component may have a _callback_ to update the store/state of the app.
When the _dispatch_ callback is executed, a _reducer_ is called based on the action specified.
The _reducer_ then returns the updated state to the store.
Since we are using _container components_ to pass the _dispatch_ actions to the UI component, 
the underlying _UI component_ wrapped by the _container component_ is re-rendered.
