import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MuiButton from "../../../StyledComponent/MuiButton";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://thawing-bastion-26922.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make A Admin</h2>
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            onBlur={handleBlur}
            variant="standard"
            sx={{ width: "40%" }}
          />{" "}
          <br />
          <MuiButton type="submit" variant="contained" sx={{ my: 1 }}>
            Make Admin
          </MuiButton>
        </form>
        {success && (
          <Alert severity="success" sx={{ width: "40%" }}>
            Made Admin Successfully
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default MakeAdmin;
