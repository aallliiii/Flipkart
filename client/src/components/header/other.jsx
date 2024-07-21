import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./other.module.css";
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
const Other = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleOnClick() {
    setDialogOpen(true);
  }
  return (
    <Box className={styles.container}>
      <Button
        variant="contained"
        className={styles.myButton}
        onClick={() => handleOnClick()}
      >
        Login
      </Button>
      <Typography className={styles.seller}>Become a Seller</Typography>
      <Typography className={styles.more}>More</Typography>
      <Box className={styles.cart}>
        <ShoppingCart />
        <Typography className={styles.cartText}>Cart</Typography>
      </Box>
      <LoginDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      ></LoginDialog>
    </Box>
  );
};

export default Other;
