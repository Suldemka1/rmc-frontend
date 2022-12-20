import { configureStore } from "@reduxjs/toolkit";
import mapSliceReducer from "./slices/mapSlice";
import authSliceReducer from "./slices/authSlice";
import regionsSliceReducer from './slices/regionsSlice'
import warehouseSliceReducer from "./slices/warehouseSlice";
import menuSliceReducer from "./slices/menuSlice";
import newsSliceReducer from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    map: mapSliceReducer,
    auth: authSliceReducer,
    regions: regionsSliceReducer,
    warehouses: warehouseSliceReducer,
    menu: menuSliceReducer,
    news: newsSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
