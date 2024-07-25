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
        <Slide products={products} title="Flash Sale" isTimer={true}></Slide>
        <Slide products={products} title="Just For You" isTimer={false}></Slide>
        <Slide products={products} title="Gadget Store" isTimer={false}></Slide>
        <Slide
          products={products}
          title="Gaming accessories"
          isTimer={false}
        ></Slide>
        <Slide products={products} title="Deals in PCs" isTimer={false}></Slide>
        <Slide
          products={products}
          title="Home décor under Rs 5000"
          isTimer={false}
        ></Slide>
        <Slide
          products={products}
          title="Shop activity trackers and smartwatches"
        ></Slide>
      </Box>
    </>
  );
};

export default Home;
