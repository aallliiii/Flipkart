import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Typography, Button } from "@mui/material";
import styles from "./LoginDialog.module.css";
import { useState } from "react";
import { authenticateSignUp } from "../../service/api";
const LoginDialog = (props) => {
  function handleOnClose() {
    props.setDialogOpen(false);
  }

  const inputInitialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };
  const [inputState, setInputState] = useState(inputInitialValues);

  const [login, setLogin] = useState("login");
  const [heading, setHeading] = useState("Login");

  function handleCreateAccount() {
    setLogin("signup");
    setHeading("SignUp");
  }
  async function handleSignUp() {
    let response = await authenticateSignUp(inputState);
  }
  function handleContinue() {
    setLogin("login");
    setHeading("Login");
  }

  function handleOnChangeInputField(e) {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  }
  return (
    <Dialog
      open={props.dialogOpen}
      onClose={() => {
        handleOnClose();
        handleContinue();
      }}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Box className={styles.container}>
        <Box className={styles.imageBox}>
          <Typography className={styles.colorWhite} variant="h5">
            {heading}
          </Typography>
          <Typography className={styles.colorWhite} style={{ marginTop: 20 }}>
            Get access to your Orders, Wishlist and Recommendations
          </Typography>
        </Box>

        {login === "login" ? (
          <Box className={`${styles.containerInput} ${styles.marginTop}`}>
            <TextField
              variant="standard"
              label="Enter Email or Phone Number..."
            ></TextField>
            <TextField variant="standard" label="Enter Password"></TextField>
            <Typography className={`${styles.marginTop} ${styles.text}`}>
              By continuing you agree to Flipkart's Term of Use and Privacy
              Policy
            </Typography>
            <Button className={`${styles.marginTop} ${styles.loginButton}`}>
              Login
            </Button>
            <Typography className={`${styles.marginTop} ${styles.alignCenter}`}>
              OR
            </Typography>
            <Button
              className={`${styles.marginTop} ${styles.requestOtpButton}`}
            >
              Request OTP
            </Button>
            <Typography
              className={`${styles.marginTop} ${styles.bottomText}`}
              onClick={() => handleCreateAccount()}
            >
              New to Flipkart? Create an account
            </Typography>
          </Box>
        ) : (
          <Box className={`${styles.containerInput} `}>
            <TextField
              variant="standard"
              name="firstName"
              label="Enter Firstname"
              onChange={(e) => handleOnChangeInputField(e)}
            ></TextField>
            <TextField
              onChange={(e) => handleOnChangeInputField(e)}
              variant="standard"
              label="Enter Lastname"
              name="lastName"
              className={`${styles.marginTop}`}
            ></TextField>
            <TextField
              onChange={(e) => handleOnChangeInputField(e)}
              variant="standard"
              name="userName"
              label="Enter Username"
              className={`${styles.marginTop}`}
            ></TextField>
            <TextField
              onChange={(e) => handleOnChangeInputField(e)}
              variant="standard"
              name="email"
              label="Enter Email"
              className={`${styles.marginTop}`}
            ></TextField>
            <TextField
              onChange={(e) => handleOnChangeInputField(e)}
              variant="standard"
              label="Enter Password"
              name="password"
              className={`${styles.marginTop}`}
            ></TextField>
            <TextField
              onChange={(e) => handleOnChangeInputField(e)}
              variant="standard"
              name="phoneNumber"
              className={`${styles.marginTop}`}
              label="Enter Phone Number..."
            ></TextField>
            <Button
              className={`${styles.marginTop} ${styles.loginButton}`}
              onClick={() => {
                handleContinue();
                handleSignUp();
              }}
            >
              Continue
            </Button>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
