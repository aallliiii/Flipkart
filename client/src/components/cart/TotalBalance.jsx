import styles from "./TotalBalance.module.css";
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
const TotalBalance = ({ items }) => {
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();

  const totalAmount = () => {
    let price = 0;
    let discount = 0;

    items.map((item) => {
      price = price + item.price.mrp;
      discount = discount + item.price.cost;
    });

    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [items]);
  return (
    <Box width={400}>
      <Box>
        <Typography className={styles.heading}>PRICE DETAILS</Typography>
      </Box>
      <Box className={styles.containerBox}>
        <Typography style={{ display: "flex" }} className={styles.writing}>
          Price ({items?.length})
          <Box style={{ marginLeft: "auto" }}>Rs {price}</Box>
        </Typography>
        <Typography style={{ display: "flex" }} className={styles.writing}>
          Discount <Box style={{ marginLeft: "auto" }}>-Rs {discount}</Box>
        </Typography>
        <Typography style={{ display: "flex" }} className={styles.writing}>
          Delivery Charges{" "}
          <Box style={{ marginLeft: "auto" }}>Free Delivery</Box>
        </Typography>
        <Typography style={{ display: "flex" }} variant="h5">
          Total Amount{" "}
          <Box style={{ marginLeft: "auto" }}>{price - discount}</Box>
        </Typography>
        <Typography style={{ marginTop: 20, fontSize: 18, color: "#878787 " }}>
          Happy Shopping
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalBalance;
