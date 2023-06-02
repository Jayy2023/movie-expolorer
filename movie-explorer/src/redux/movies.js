import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    results: [],
    hasMore: false,
    totalResults: 0,
    page: 0,
    totalPages: 0,
    isFetching: false,
};
export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        getPopularMovies: (state) => {
            return {
                ...state,
                isFetching: true,
            }
        }
    }
})