import "./App.css";
import Header from "./components/header/header";
import Home from "./home/Home";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Header></Header>
      <Box className="myMainBox">
        <Home></Home>
      </Box>
    </>
  );
}

export default App;
