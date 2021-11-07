import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import AppointmentBg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

const appointmentBanner = {
  background: `url(${AppointmentBg})`,
  marginTop: 150,
  backgroundColor: "rgba(45, 58, 74, .9)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1, boxShadow: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "80%", marginTop: -110 }} src={doctor} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h6"
              sx={{ mb: 3 }}
              style={{ color: "#5CE7ED" }}
            >
              Appointment
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 2 }}
              style={{ color: "white", fontSize: "14px", fontWeight: "300" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium praesentium eveniet dicta eaque sapiente architecto
              numquam veritatis sunt nostrum voluptatem nisi iure eius.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
