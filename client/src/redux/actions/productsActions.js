import axios from "axios";
import * as actionTypes from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  const URL = "http://localhost:8000";
  try {
    let { data } = await axios.get(`${URL}/products`);
    console.log(data);

    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    console.log(error.message);
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  const URL = "http://localhost:8000";
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });

    let { data } = await axios.get(`${URL}/product/${id}`);
    console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};
