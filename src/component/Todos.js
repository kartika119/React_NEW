import React from 'react';

const Todos=({todos,deleteTodo})=>{
    if(todos.length==0)
    return(
        <p>No todos for today!</p>
    )
    else{
    return(
    <div>
    <ul className="collection">
            {
                todos.map(todo=>{
                   return(
                       
                         <li key={todo.id} className="collection-items">
                        <div className="todo">
                        {todo.todo}
                        <span onClick={(id)=>{deleteTodo(todo.id)}}>X</span>
                        </div>
                    </li> 
                   )  
                })
            }
        </ul>
    </div>
    )
        }

}

export default Todos;