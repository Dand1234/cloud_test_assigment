import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { initValues } from "./initValues";

export const store = configureStore ({
    preloadedState:initValues,
    reducer: {
        user: userReducer
    }
})