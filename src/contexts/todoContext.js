import { useContext, createContext } from "react";

 const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo:" todo text",
            completed: false

        }
    ],
    addTodo:(todo) => {},
    updateTodo:(id, todo) => {},
    deleteTodo:(id) => {},
    toggleTodo:(id) => {},

 })


 export const useTodo = () => {
    return useContext(TodoContext)
 }

 export const TodoProvider = TodoContext.Provider