import styles from "./TotalBalance.module.css";
import { Box, Typography, Button } from "@mui/material";
const TotalBalance = ({ items }) => {
  return (
    <Box>
      <Box>
        <Typography className={styles.heading}>PRICE DETAILS</Typography>
      </Box>
      <Box className={styles.containerBox}>
        <Typography style={{ display: "flex" }} className={styles.writing}>
          Price ({items?.length})<Box style={{ marginLeft: 30 }}>Rs 100</Box>
        </Typography>
        <Typography style={{ display: "flex" }} className={styles.writing}>
          Discount <Box style={{ marginLeft: 30 }}>-Rs 100</Box>
        </Typography>
        <Typography style={{ display: "flex" }} className={styles.writing}>
          Delivery Charges <Box style={{ marginLeft: 30 }}>Free Delivery</Box>
        </Typography>
        <Typography style={{ display: "flex" }}>
          Total Amount <Box style={{ marginLeft: 30 }}>Rs 100</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalBalance;
