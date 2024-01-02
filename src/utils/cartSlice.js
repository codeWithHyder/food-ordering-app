import { createSlice } from "@reduxjs/toolkit";


const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },

        removeItem:(state,action)=>{
            const itemToRemove= action.payload.index;
            state.items = state.items.filter((item,index)=> index !== itemToRemove);
        },

        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export const {addItem, removeItem, clearCart}= cartSlice.actions;
export default cartSlice.reducer;