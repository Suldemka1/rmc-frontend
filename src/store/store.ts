import {configureStore} from "@reduxjs/toolkit";
import mapSliceReducer from './slices/mapSlice'
import authSliceReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        map: mapSliceReducer,
        auth: authSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch