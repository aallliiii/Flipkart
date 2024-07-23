import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styles from "./Home.module.css";
import { getProducts } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Slide from "./Slide";
const Home = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar></Navbar>
      <Box className={styles.container}>
        <Banner></Banner>
        <Slide products={products}></Slide>
      </Box>
    </>
  );
};

export default Home;
