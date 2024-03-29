import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../lib/data";

let initialState = products;


const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;