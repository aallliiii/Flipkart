import { configureStore } from "@reduxjs/toolkit";
import {
  getProductDetailReducer,
  getProductsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
const store = configureStore({
  reducer: {
    products: getProductsReducer,
    productDetails: getProductDetailReducer,
    cart: cartReducer,
  },
});

export default store;
