import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
};
// Create a slice of the Redux store for cart functionality
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantities += 1;
      } else {
        state.products.push({
          ...action.payload,
          quantities: action.payload.quantities || 1,
        });
      }
      updateCartState(state);
    },
    updatedQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        if (action.payload.type === "set") {
          product.quantities = parseInt(action.payload.value);
        } else if (action.payload.type === "increment") {
          product.quantities += 1;
        } else if (
          action.payload.type === "decrement" &&
          product.quantities > 1
        ) {
          product.quantities -= 1;
        }
        updateCartState(state);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      updateCartState(state);
    },
    clearCart: (state) => {
      state.products = [];
      updateCartState(state);
    },
  },
});

// Function to update the state of the cart
const updateCartState = (state) => {
  state.selectedItems = state.products.reduce(
    (total, product) => total + product.quantities,
    0
  );
  state.totalPrice = state.products.reduce(
    (total, product) =>
      total + parseFloat(product?.base_price) * parseInt(product?.quantities),
    0
  );
};
export const { addToCart, updatedQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
