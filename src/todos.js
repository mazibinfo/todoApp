import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id)} }>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You do not have any todo's. YaY!!!!!!</p>
    );

    return(
        <div className="todo collection">
            { todoList }
        </div>
    )    
}

export default Todos;