import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import pagesReducer from './pagesReducer'
import educationReducer from './educationReducer'
import jobsReducer from './jobsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    page: pagesReducer,
    education: educationReducer,
    jobs: jobsReducer
})

export const store = configureStore({
    reducer: rootReducer
})