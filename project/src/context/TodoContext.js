import { createContext, useContext } from "react";

export const TodoContext = createContext({ //create the context
    todos : [],
    addTodo : (todo) => {}, // Add method
    updateTodo : (id,todo) => {}, // update the todo , id needed for update
    deleteTodo : (id) => {}, // delete need id
    toggleComplete : (id)=>{} // toggle needs id

})

export const useTodo = () => { // creating a hook 
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 