import "./App.css";
import Header from "./components/header/header";
import Home from "./home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider.jsx";
function App() {
  return (
    <DataProvider>
      <Header></Header>
      <Box className="myMainBox">
        <Home></Home>
      </Box>
    </DataProvider>
  );
}

export default App;
