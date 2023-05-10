import { createSlice } from "@reduxjs/toolkit";

// a slice is a portion of redux store that holds a specific piece of state and its associated reducer functions


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // this function just modifies the current state by pushing the payload data to the end of the array
        add : (state,action) => {
            state.push(action.payload)
        },
        // return a new state by filtering the existing state array and removing any items with an id that matches the payload value
        remove:(state,action) =>{
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const {add ,remove} = CartSlice.actions;
export default CartSlice.reducer;