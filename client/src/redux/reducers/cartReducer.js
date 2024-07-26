import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      return { ...state, cartItems: [...state.cartItems, item] };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    case actionTypes.BUY_PRODUCTS:
    case actionTypes.BUY_PRODUCTS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
