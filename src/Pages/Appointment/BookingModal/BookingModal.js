import { Button, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();
  console.log(user);
  const initialBookingInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

  // onBlur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    console.log(appointment);
    //   get data and store in database
    fetch("https://thawing-bastion-26922.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography
            sx={{ my: 2 }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              sx={{ width: "90%", my: 1 }}
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: "90%", my: 1 }}
              id="outlined-size-small"
              onBlur={handleOnBlur}
              name="patientName"
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "90%", my: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "90%", my: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Your Number"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", my: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
