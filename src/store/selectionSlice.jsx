import { createSlice } from "@reduxjs/toolkit"

export const selectionSlice = createSlice({
    name: "selection",
    initialState: [],
    reducers: {
        select: (state, action) => {
            const exists = state.find(item => item.login.uuid === action.payload.login.uuid)
            if (!exists) return [...state, action.payload]
        },
        reject: (state, action) => state.filter(item => item.login.uuid !== action.payload),
    }
})
export const {
    select,
    reject,
} = selectionSlice.actions