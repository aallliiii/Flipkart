import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch) => {
  const URL = "http://localhost:8000";

  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_FAIL, payload: error.message });
  }
};

export const removerFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
