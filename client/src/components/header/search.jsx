import { InputBase, Box, List, ListItem } from "@mui/material";
import styles from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";
const Search = () => {
  const { products } = useSelector((state) => state.products);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getSearchText = (text) => {
    setText(text);
  };
  return (
    <Box className={styles.InputContainer}>
      <Box>
        {text && (
          <List className={styles.myList}>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <ListItem onClick={() => setText("")}>
                    {product.title.longTitle}
                  </ListItem>
                </Link>
              ))}
          </List>
        )}
      </Box>
      <InputBase
        placeholder="Search for products, brands and more..."
        className={styles.inputField}
        onChange={(e) => getSearchText(e.target.value)}
        value={text}
      />

      <Box>
        <SearchIcon className={styles.search} />
      </Box>
    </Box>
  );
};

export default Search;
