import { createSlice } from '@reduxjs/toolkit'

const pagesReducer = createSlice({
    name: 'pagesReducer',
    initialState: 'main',

    reducers: {
        setPage: (state, action) => action.payload
    }
})

export default pagesReducer.reducer
export const { setPage } = pagesReducer.actions