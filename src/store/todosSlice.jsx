import { createSlice } from "@reduxjs/toolkit"
import initialState from "./todos.example.json"
export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (s,a) => { 
            s.todos = [...s[todos], a.payload] 
        },
        removeTodo: (s,a) => { 
            s.todos = s.todos.filter((item) => item.id != a.payload
        )},
        editTodo: (s,a) => {
            const { index, ...todo} = a.payload
            s.todos[index] = todo
        },
        filterTodos: (s,a) => {
            s.filtered = s.todos.filter((item) => item.completed != a.payload
        )},
        resetFilter: (s) => s.filtered = []
    }
})
export const {
    addTodo,
    removeTodo,
    editTodo,
    filterTodos,
    resetFilter,
} = todosSlice.actions