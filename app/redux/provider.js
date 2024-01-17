"use client";

import { Provider } from "@/node_modules/react-redux/dist/react-redux";
import { store } from "./store";

export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}