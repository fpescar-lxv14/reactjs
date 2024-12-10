import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    results: [],
    error: {},
}
export const getCandidates = createAsyncThunk(
    'candidates/fetch', 
    async(url) => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            return data.results;
        } catch (err) { return err }
    }
)
export const fetchOne = createAsyncThunk(
    'candidates/getOne', 
    async({url,index}) => request({url, index})
)
export const candidateSlice = createSlice({
    name: "candidates",
    initialState,
    extraReducers: (builder) => 
        builder
        .addCase(getCandidates.pending, (state) => {
            state.loading = true;
        })
        .addCase(getCandidates.fulfilled, (state, action) => {
            state.loading = false;
            state.results = action.payload
        })
        .addCase(getCandidates.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(fetchOne.pending, (state, action) => {
            const { index, loading } = action.payload
            state.results[index] = loading;
        })
        .addCase(fetchOne.fulfilled, (state, action) => {
            const { index, ...data } = action.payload;
            state.results[index] = data
        })
})