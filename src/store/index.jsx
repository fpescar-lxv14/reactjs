import { configureStore } from "@reduxjs/toolkit";
import { candidateSlice } from "./candidateSlice.jsx"
import { selectionSlice } from "./selectionSlice.jsx"

export const store = configureStore({
    reducer: {
        candidates: candidateSlice.reducer,
        selection: selectionSlice.reducer,
    }
})