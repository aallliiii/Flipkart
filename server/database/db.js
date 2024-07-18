import mongoose from "mongoose";
const Connection = async (Username, Password) => {
  const URL = `mongodb+srv://${Username}:${Password}@ecommerce-web.ujjx9dk.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce-web`;
  try {
    await mongoose.connect(URL, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error while connecting ${error}`);
  }
};

export default Connection;
