import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    intitalState: 0,
    reducers: {
        increment: (state,action) => { 
            state.number += action.payload 
        },
        decrement: (state,action) => { 
            state.number -= action.payload
        },
        setnumber: (state,action) => { 
            state.number = action.payload
        }
    }
})
export const {
    increment,
    decrement,
    setnumber
} = counterSlice.actions