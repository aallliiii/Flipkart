import { Grid, Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import TotalBalance from "./TotalBalance";
import CartItems from "./CartItems";
import styles from "./Cart.module.css";
import { buyProducts } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const buyProductsClick = () => {
    dispatch(buyProducts());
  };
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length > 0 ? (
        <Grid container className={styles.mainContainer}>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box className={styles.heading}>
              <Typography>my cart ({cartItems.length})</Typography>
            </Box>
            {cartItems.map((cartItem) => (
              <CartItems item={cartItem} />
            ))}
            <Box className={styles.buttonBox}>
              <Button
                className={styles.buttonOrder}
                onClick={() => buyProductsClick()}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance items={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <h1
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#878787",
          }}
        >
          Your Cart Is Empty <br />
        </h1>
      )}
    </>
  );
};

export default Cart;
