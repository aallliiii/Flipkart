import axios from "axios";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../constants/productConstants";
export const getProducts = () => async (dispatch) => {
  const URL = "http://localhost:8000";
  try {
    let { data } = await axios.get(`${URL}/products`);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL });
    console.log(error.message);
  }
};
