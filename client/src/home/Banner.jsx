import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../constants/data";
import styles from "./Banner.module.css";
import { styled } from "@mui/material";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Image = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      height: 180,
    },
  }));

  return (
    <>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {bannerData.map((data) => (
          <Image
            src={data.url}
            alt="image"
            className={styles.bannerImage}
            key={data.id}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
