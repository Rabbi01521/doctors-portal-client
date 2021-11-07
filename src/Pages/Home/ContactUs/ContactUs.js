import { Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import MuiButton from "../../../StyledComponent/MuiButton";

const ContactUs = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg}), linear-gradient(#3A4256, #3A4256)`,
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
      padding: "30px",
    },
    textArea: {
      border: 0,
      outline: 0,
      width: "100%",
      margin: "20px 0",
      borderRadius: 3,
      fontFamily: "inherit",
      padding: 15,
    },
  });

  const { root, textArea } = useStyle();
  return (
    <div className={root}>
      <Container>
        <Typography variant="h4" color="#fff">
          Contact
        </Typography>
        <Typography variant="h4" color="#fff">
          Always connected with us
        </Typography>

        <TextField
          fullWidth
          placeholder="Email"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          placeholder="Subject"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <textarea
          rows={10}
          className={textArea}
          placeholder="Your Message"
        ></textarea>

        <MuiButton>Submit</MuiButton>
      </Container>
    </div>
  );
};

export default ContactUs;
