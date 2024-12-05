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
        reset: () => initialState,
        saveSession: (state) => localStorage.setItem("session", JSON.stringify(state)),
        loadSession: (state) => state = {...state, ...localStorage.getItem("session")}
    }
})
export const {
    setvalue,
    reset,
    loadSession,
    saveSession,
} = sessionSlice.actions