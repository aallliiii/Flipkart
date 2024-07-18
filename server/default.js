import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";
const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data inserted successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default DefaultData;
