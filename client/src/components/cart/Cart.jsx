import { Grid, Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import TotalBalance from "./TotalBalance";
import CartItems from "./CartItems";
import styles from "./Cart.module.css";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems ? (
        <Grid container className={styles.mainContainer}>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box className={styles.heading}>
              <Typography>my cart ({cartItems.length})</Typography>
            </Box>
            {cartItems.map((cartItem) => (
              <CartItems item={cartItem} />
            ))}
            <Box className={styles.buttonBox}>
              <Button className={styles.buttonOrder}>Place Order</Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance items={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default Cart;
