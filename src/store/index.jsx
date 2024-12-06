import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice"
import { sessionSlice } from "./sessionSlice"
import { todosSlice } from "./todosSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        session: sessionSlice.reducer,
        todos: todosSlice.reducer,
    }
})