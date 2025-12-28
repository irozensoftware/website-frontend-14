import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wish_products: []
};
// Create a slice of the Redux store for cart functionality
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlit: (state, action) => {
      const existingProduct = state.wish_products.find(
        (product) => product.id == action.payload.id
      );
      if (!existingProduct) {
        state.wish_products.push(action.payload);
      }
    },
    removeFromWishlitCart: (state, action) => {
      state.wish_products = state.wish_products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearWishlitCart: (state) => {
      state.removeFromCart = [];
    },
  },
});

export const { clearWishlitCartm, addToWishlit, removeFromWishlitCart } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
