import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const { registerUser, isLoading, authError, user } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    // console.log(field, value);
    const newLoginData = { ...loginData };
    console.log(field, value);
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    if (loginData?.password !== loginData?.password2) {
      alert("Password did not matched");
      e.preventDefault();
      return;
    }
    registerUser(
      loginData?.email,
      loginData?.password,
      loginData?.name,
      history
    );
    e.preventDefault();
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
            <Typography variant="body1">Register</Typography>
            {!isLoading && (
              <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Retype Your Password"
                  variant="standard"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                />
                <br />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Register? Please Login...
                  </Button>
                </NavLink>
              </form>
            )}

            {isLoading && <CircularProgress color="secondary" />}
            {user?.email && (
              <Alert severity="success">User Successfully Added</Alert>
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

export default Register;
