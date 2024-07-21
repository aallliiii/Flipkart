import axios from "axios";

export const authenticateSignUp = async (data) => {
  const URL = "http://localhost:8000";
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(error.message);
  }
};
