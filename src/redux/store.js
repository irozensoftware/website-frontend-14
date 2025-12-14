import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./features/cartSlice";
import toggleSlice from "./features/toggleSlice";
const persistConfig = {
  key: "root",
  storage,
};
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  carts: persistedCartReducer,
  toggle_status: toggleSlice,
};
const isClient = typeof window !== "undefined";
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register", "rehydrate"],
        ignoredPaths: ["meta.arg.originalArgs"],
      },
    }).concat(baseApi.middleware),
});
export const persistor = isClient ? persistStore(store) : null;
