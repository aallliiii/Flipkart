import { Box, Typography } from "@mui/material";
import { navData } from "../constants/data";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <Box className={styles.navContainer}>
        {navData.map((data) => (
          <Box className={styles.navBar}>
            <img src={data.url} alt="my image" className={styles.navBarImage} />
            <Typography className={styles.textFont}>{data.text}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Navbar;
