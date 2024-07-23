import { configureStore } from "@reduxjs/toolkit";
import { getProductsReducer } from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    products: getProductsReducer,
  },
});

export default store;
