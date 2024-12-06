import { createSlice } from "@reduxjs/toolkit"
import initialState from "./todos.example.json"
export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (s,a) => { 
            s.todos = [...s.todos, a.payload] 
        },
        removeTodo: (s,a) => { 
            s.todos = s.todos.filter((item) => item.id != a.payload
        )},
        editTodo: (s,a) => {
            const {id, ...todo} = a.payload
            s.todos = s.todos.map(item => item.id === id? {...item,...todo } : item)
        },
        filterTodos: (s,a) => {
            s.filtered = s.todos.filter((item) => item.completed == a.payload
        )},
        resetFilter: (s) => { s.filtered = [] } ,
        setCurrent: (s,a) => { s.current = a.payload }
    }
})
export const {
    addTodo,
    removeTodo,
    editTodo,
    filterTodos,
    resetFilter,
    setCurrent,
} = todosSlice.actions