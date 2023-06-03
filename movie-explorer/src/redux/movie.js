import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    recommendations: {
        results: [],
        hasMore: false,
        totalResults: 0,
        page: 0,
        totalPages: 0,
        isFetching: false
    }
}
const movieSlice = createSlice({
   name: 'movieSlice',
   initialState,
   reducers: {
    getMovie: (state) =>{
        return {
            ...state,
            isFetching: true
        }
    },
    fetchedMovie: () =>{},
    resetState: (state) =>{
        return initialState;
    },
    
   } 
})