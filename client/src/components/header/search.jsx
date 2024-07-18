import { InputBase, Box } from "@mui/material";
import styles from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <Box className={styles.InputContainer}>
      <InputBase
        placeholder="Search for products, brands and more..."
        className={styles.inputField}
      />
      <Box>
        <SearchIcon className={styles.search} />
      </Box>
    </Box>
  );
};

export default Search;
