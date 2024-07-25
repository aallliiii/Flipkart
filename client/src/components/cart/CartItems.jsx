import { Box, Typography, Button } from "@mui/material";
import styles from "./CartItem.module.css";
const CartItems = ({ item }) => {
  return (
    <Box className={styles.container} style={{ marginTop: 20, padding: 10 }}>
      <Box className={styles.leftContainer}>
        <img
          src={item.url}
          alt="product image"
          style={{ height: 150, width: 150 }}
        />
      </Box>
      <Box>
        <Typography>{item.title.shortTitle}</Typography>
        <Typography className={styles.smallText}>Seller: Ali</Typography>
        <Typography
          style={{ margin: "20px 0", display: "flex", alignItems: "center" }}
        >
          <Box style={{ fontWeight: 600, fontSize: 22 }}>
            Rs {item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box style={{ color: "#878787" }}>
            <strike>Rs {item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box style={{ color: "#399e3c" }}>{item.price.discount}</Box>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Button className={styles.removeButton}>Remove</Button>
      </Box>
    </Box>
  );
};

export default CartItems;
