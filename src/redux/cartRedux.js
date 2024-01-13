import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,

    loading: false,
    error: null,
  },
  reducers: {
    increaseQuantity: (state) => {
      state.quantity += 1;
    },
    decreseQuantity: (state) => {
      state.quantity -= 1;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { increaseQuantity, decreseQuantity,setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
