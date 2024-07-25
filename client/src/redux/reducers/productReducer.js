import * as actionTypes from "../constants/productConstants";
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.GET_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
