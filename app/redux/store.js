import { configureStore } from "@reduxjs/toolkit";
import products from "./features/product";
import wishList from "./features/wishlist";

export const store = configureStore({
    reducer: {
        products,
        wishList
    },
    devTools : process.env.NODE_ENV !== 'production'
})

export const RootState = store.getState;
export const AppDispatch = store.dispatch;