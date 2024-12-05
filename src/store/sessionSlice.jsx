import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", email: "", password: "" };
export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setvalue: (state, action) => {
            const [key, value] = action.payload;
            state[key] = value;
        },
        reset: () => initialState
    }
})
export const {
    setvalue,
    reset,
} = sessionSlice.actions