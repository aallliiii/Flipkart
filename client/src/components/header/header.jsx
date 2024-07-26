import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import styles from "./header.module.css";
import Search from "./search";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "../Profile";
import { Link } from "react-router-dom";
const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  function handleOnClick() {
    setDialogOpen(true);
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top bg-dark navbar-dark ${styles.header}`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" style={{ color: "#fff" }}>
              ShopEase
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "#fff" }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                  <a className="nav-link" style={{ color: "#fff" }}>
                    Cart
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle disabled"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#fff" }}
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <Search></Search>
            {account === "" ? (
              <Button
                variant="contained"
                className={styles.myButton}
                onClick={() => handleOnClick()}
              >
                Login
              </Button>
            ) : (
              <Profile account={account}></Profile>
            )}
          </div>
        </div>
      </nav>
      <LoginDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </>
  );
};

export default Header;
