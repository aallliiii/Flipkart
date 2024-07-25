import { Box, Typography, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Slide.module.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Slide = ({ products, title, isTimer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box>
        {hours} : {minutes} : {seconds} : left
      </Box>
    );
  };

  return (
    <Box className={styles.containerMain}>
      <Box className={styles.upperBox}>
        <Typography className={styles.dealText}>{title}</Typography>
        {isTimer ? (
          <Box className={styles.timer}>
            <img src={timerURL} alt="timer" className={styles.clockImage} />
            <Countdown date={Date.now() + 8.64e7} renderer={renderer} />
          </Box>
        ) : null}
        <Button variant="contained" className={styles.viewButton}>
          View All
        </Button>
      </Box>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
      >
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Box key={product.id} className={styles.imageBox}>
              <img
                src={product.url}
                alt="myImage"
                className={styles.productImages}
              />
              <Typography
                className={styles.textFont}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography
                className={styles.textFont}
                style={{ color: "green" }}
              >
                {product.discount}
              </Typography>
              <Typography
                className={styles.textFont}
                style={{ color: "#212121", opacity: ".6" }}
              >
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
