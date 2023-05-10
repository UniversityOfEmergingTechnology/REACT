import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

// reducer - pure function that takes the current state of the application and an action as input and returns a new state
// middleware - an array of middleware functions to apply to store's dispatch process
// devTools - boolean or object indicating whether to enable or disable redux devtools extension
// preloadedState - initial state of the store
export const store = configureStore({
    // actions are processed by the reducers which updates the state of the store
    reducer : {
        counter : CounterSlice
    }
})