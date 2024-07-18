import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./other.module.css";
const Other = () => {
  return (
    <Box className={styles.container}>
      <Button variant="contained" className={styles.myButton}>
        Login
      </Button>
      <Typography className={styles.seller}>Become a Seller</Typography>
      <Typography className={styles.more}>More</Typography>
      <Box className={styles.cart}>
        <ShoppingCart />
        <Typography className={styles.cartText}>Cart</Typography>
      </Box>
    </Box>
  );
};

export default Other;
