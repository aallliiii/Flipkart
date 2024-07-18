import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import styles from "./header.module.css";
import Search from "./search";
import Other from "./other";
const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <AppBar className={styles.header}>
      <Toolbar className={styles.tool}>
        <Box className={styles.myBox}>
          <img src={logoURL} alt="logo" className={styles.myImage} />
          <Box className={styles.subBox}>
            <Typography className={styles.myTypo}>
              Explore &nbsp;
              <Box component="span" className={styles.mySpan}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} alt="sub image" className={styles.mySubImage} />
          </Box>
        </Box>
        <Search></Search>
        <Box className={styles.otherContainer}>
          <Other></Other>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
