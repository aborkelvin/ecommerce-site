import { createSlice } from "@reduxjs/toolkit";

// Get initial wishlist from localstorage for those not logged in and from database for those logged in

//const wishListString = localStorage.getItem('wishList');
//const wishList = wishListString ? JSON.parse(wishListString) : [];

const initialState = [] //wishList;


const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addProductToWishList: (state, action) => {
            state.push(action.payload);
            //alert('Product added to wishlist');
        }
    }
})

export const { addProductToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;