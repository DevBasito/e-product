import { createSlice } from '@reduxjs/toolkit'


export const cartItemSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: 0,
  },
  reducers: {
    cartPlus: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes 
      state.cartItems += 1
    },
    
    cartMinus: (state) => {
        if (state.cartItems  == 0) {
            state.cartItems = 0 
        } else {
            state.cartItems -= 1;
        }
    },

    // incrementByAmount: (state, action) => {
    //   state.cartItems += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { cartPlus, cartMinus } = cartItemSlice.actions

export default cartItemSlice.reducer