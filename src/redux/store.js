import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

export const store = configureStore ({
    preloadedState:{},
    reducer: {
        user: userReducer
    }
})