import { configureStore } from "@reduxjs/toolkit";
import { candidateSlice } from "./candidateSlice.jsx"

export const store = configureStore({
    reducer: {
        candidates: candidateSlice.reducer
    }
})