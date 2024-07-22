import axios from "axios";

export const authenticateSignUp = async (data) => {
  const URL = "http://localhost:8000";
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const authenticateLogin = async (data) => {
  const URL = "http://localhost:8000";
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    return error.response;
  }
};
