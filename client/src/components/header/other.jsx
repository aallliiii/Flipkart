import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./other.module.css";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "../Profile";
const Other = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  function handleOnClick() {
    setDialogOpen(true);
  }
  return (
    <Box className={styles.container}>
      {account === "" ? (
        <Button
          variant="contained"
          className={styles.myButton}
          onClick={() => handleOnClick()}
        >
          Login
        </Button>
      ) : (
        <Profile account={account}></Profile>
      )}
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
