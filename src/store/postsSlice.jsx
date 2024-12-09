import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async() => {
    try{
        const response = await fetch(import.meta.env.VITE_URL || 'https://jsonplaceholder.typicode.com/phots?albumId=1');
        const data = await response.json()
        return data
    }
    catch(err) { return err }
})

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    extraReducers: (builder) => 
        builder
        .addCase(getPosts.pending, (state) => { 
            state.loading = true 
        })
        .addCase(getPosts.fulfilled, (s,a) => {
            s.loading = false;
            s.data = a.payload;
        })
        .addCase(getPosts.rejected, (s,a) => {
            s.loading = false;
            s.error = a.payload;
        })
})