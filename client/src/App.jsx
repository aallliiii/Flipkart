import "./App.css";
import Header from "./components/header/header";
import Home from "./home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewDetail from "./components/datails/ViewDetail.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cart from "./components/cart/Cart.jsx";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Box>
          <Header></Header>
          <Box className="myMainBox">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ViewDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
