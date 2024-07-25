import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsActions";
import { Box, CircularProgress, Button, Typography, Grid } from "@mui/material";
import styles from "./ViewDetail.module.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";

const ViewDetail = () => {
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!product || id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  if (loading) {
    return (
      <Box style={{ marginTop: 60 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Box style={{ marginTop: 60 }}>Error: {error}</Box>;
  }

  if (!product) {
    return <Box style={{ marginTop: 60 }}>No Product Found</Box>;
  }

  const { title, price, detailUrl } = product;

  const productId = product.id;
  const onAddToCart = () => {
    dispatch(addToCart(productId, 4));
    console.log(productId);
    navigate("/cart");
  };
  const { cost, mrp, discount } = price || {};

  return (
    <Box style={{ marginTop: 60 }} className={styles.component}>
      <Grid container className={styles.container}>
        <Grid item lg={4} md={4} sm={8} xs={12}>
          <Box className={styles.imageButtonContainer}>
            <Box className={styles.myImageBox}>
              <img
                src={detailUrl}
                alt="product image"
                className={styles.myImage}
              />
            </Box>
            <Button
              variant="contained"
              className={styles.myButton}
              style={{ marginRight: 10, backgroundColor: "#ff9f00" }}
              onClick={() => onAddToCart()}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              className={styles.myButton}
              style={{ backgroundColor: "#fb541b" }}
            >
              Buy Now
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          sm={8}
          xs={12}
          className={styles.containerRight}
        >
          <Typography>{title?.longTitle || "No Title Available"}</Typography>
          <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
            100 Ratings and 20 Reviews
          </Typography>
          <Typography>
            <Box component="span" style={{ fontSize: 28 }}>
              Rs {cost || "N/A"}
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#878787" }}>
              <strike>Rs {mrp || "N/A"}</strike>
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#388e3c" }}>
              {discount || "N/A"}
            </Box>
          </Typography>
          <Typography style={{ fontSize: 30, fontWeight: 600 }}>
            Promotions
          </Typography>
          <Box>
            <Typography className={styles.smallText}>
              <LocalOfferIcon className={styles.badge} />
              Min. Spend Rs. 399 Capped at Rs. 200
            </Typography>
            <Typography className={styles.smallText}>
              <LocalOfferIcon className={styles.badge} />
              Min. Spend Rs. 999 Capped at Rs. 320
            </Typography>
            <Typography className={styles.smallText}>
              <LocalOfferIcon className={styles.badge} />
              Min. Spend Rs. 2,499 Capped at Rs. 400
            </Typography>
            <Typography className={styles.smallText}>
              <LocalOfferIcon className={styles.badge} />
              Min. Spend Rs. 9,999 Capped at Rs. 1,000
            </Typography>
            <Typography className={styles.smallText}>
              <LocalOfferIcon className={styles.badge} />
              Min. Spend Rs. 24,999 Capped at Rs. 2,000
            </Typography>
          </Box>
          <Box className={styles.delivery}>
            <Typography
              style={{ marginRight: 15, fontSize: 25, fontWeight: 600 }}
            >
              Delivery
            </Typography>
            <Typography style={{ color: "#878787", fontSize: 14 }}>
              7 to 10 working days
            </Typography>
          </Box>
          <Typography style={{ fontSize: 30, fontWeight: 600, marginTop: 20 }}>
            <DescriptionIcon />
            Description
          </Typography>
          <Typography style={{ fontSize: 13, fontFamily: "sans-serif" }}>
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewDetail;
