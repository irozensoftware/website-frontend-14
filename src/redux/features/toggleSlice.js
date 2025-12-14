import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopCartDrawerStatus: false,
};

const toggleSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleShopCardDrawer: (state) => {
      state.shopCartDrawerStatus = !state.shopCartDrawerStatus;
    },
  },
});

export const { toggleShopCardDrawer } = toggleSlice.actions;
export default toggleSlice.reducer;
