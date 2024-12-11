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
    async(url) => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            return data.results;
        } catch (err) { return err }
    }
)
export const candidateSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
        rejectCandidate: (state, action) => {
            state.results = state.results.filter(item => item.login.uuid !== action.payload)
        }
    },
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
        .addCase(fetchOne.fulfilled, (state, action) => {
            state.results = [...state.results, ...action.payload]            
        })
})
export const {
    rejectCandidate,
} = candidateSlice.actions