import { configureStore } from "@reduxjs/toolkit";
import mapSliceReducer from "./slices/mapSlice";
import regionsSliceReducer from "./slices/regionsSlice";
import warehouseSliceReducer from "./slices/warehouseSlice";
import menuSliceReducer from "./slices/menuSlice";
import newsSliceReducer from "./slices/newsSlice";
import newsSearchReducer from "./slices/newsSearchSlice";
import singleWarehouseReducer from "./slices/warehouseSlice/singleWarehouseSlice";

export const store = configureStore({
  reducer: {
    map: mapSliceReducer,
    regions: regionsSliceReducer,
    warehouses: warehouseSliceReducer,
    singleWarehouse: singleWarehouseReducer,
    menu: menuSliceReducer,
    news: newsSliceReducer,
    newsSearch: newsSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
