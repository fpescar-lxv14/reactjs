import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice"
import { sessionSlice } from "./sessionSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        session: sessionSlice.reducer,
    }
})