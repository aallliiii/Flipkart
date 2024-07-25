import { Box, Typography, styled } from "@mui/material";
import { navData } from "../constants/data";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const MyBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  }));
  return (
    <>
      <MyBox className={styles.navContainer}>
        {navData.map((data) => (
          <Box className={styles.navBar} key={data.url}>
            <img src={data.url} alt="my image" className={styles.navBarImage} />
            <Typography className={styles.textFont}>{data.text}</Typography>
          </Box>
        ))}
      </MyBox>
    </>
  );
};

export default Navbar;
