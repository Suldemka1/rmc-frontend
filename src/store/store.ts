import { configureStore } from "@reduxjs/toolkit";
import mapSliceReducer from "./slices/mapSlice";
import authSliceReducer from "./slices/authSlice";
import warehouseSliceReducer from "./slices/warehouseSlice";

export const store = configureStore({
  reducer: {
    map: mapSliceReducer,
    auth: authSliceReducer,
    warehouses: warehouseSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
