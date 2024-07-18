import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box className={styles.container}>
        <Banner></Banner>
      </Box>
    </>
  );
};

export default Home;
