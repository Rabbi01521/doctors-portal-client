import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import MuiButton from "../../../StyledComponent/MuiButton";

const useStyle = makeStyles({
  socialIcon: {
    color: "#19D3AE !important",
    border: "1px solid #19D3AE !important",
    margin: "20px 10px 30px 0 !important",
    "&:hover": {
      background: "#19D3AE !important",
      color: "#fff !important",
    },
  },
});

const Login = () => {
  const { socialIcon } = useStyle();
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  //   Google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container style={{ height: "100vh" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "30px 0px",
            }}
          >
            <Typography variant="body1">Login</Typography>
            {!isLoading && (
              <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  type="text"
                  name="email"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                />
                <br />
                <MuiButton
                  sx={{ width: "100%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </MuiButton>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User ? Please Register...</Button>
                </NavLink>
              </form>
            )}
            <Box>
              <IconButton onClick={handleGoogleSignIn} className={socialIcon}>
                <GoogleIcon></GoogleIcon>
              </IconButton>
              <IconButton className={socialIcon}>
                <FacebookIcon></FacebookIcon>
              </IconButton>
            </Box>

            {isLoading && <CircularProgress color="secondary" />}
            {user?.email && (
              <Alert severity="success">User Login Successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
