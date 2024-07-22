import styles from "./Profile.module.css";
import { Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Profile = (props) => {
  const { account, setAccount } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    setAccount("");
    setOpen(false);
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography className={styles.accountName}>{props.account}</Typography>
      </Box>
      <Menu
        className={styles.marginTop}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
