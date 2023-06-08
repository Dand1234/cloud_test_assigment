import { createSlice } from "@reduxjs/toolkit";
import { initValues } from "./initValues";

export const userSlice = createSlice({
    name: 'user',
    initialState: initValues,
    reducers:{
        setUser: (_, action) => {
            return action.payload
          }
    }
})

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer