import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./features/cartSlice";
import wishlistSlice from "./features/wishlistSlice";
import toggleSlice from "./features/toggleSlice";

// ✅ separate persist configs
const cartPersistConfig = {
  key: "cart",
  storage,
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
};

// ✅ persisted reducers
const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartReducer
);

const persistedWishlistReducer = persistReducer(
  wishlistPersistConfig,
  wishlistSlice
);

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  carts: persistedCartReducer,
  wishlist: persistedWishlistReducer,
  toggle_status: toggleSlice,
};

const isClient = typeof window !== "undefined";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["meta.arg.originalArgs"],
      },
    }).concat(baseApi.middleware),
});

export const persistor = isClient ? persistStore(store) : null;
