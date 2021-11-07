import { Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const bannerBg = {
  background: `url(${bg})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: " no-repeat",
  width: "100%",
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
};

const Banner = () => {
  return (
    <div style={{ ...bannerBg, margin: "18px 0" }} sx={{ flexGrow: 1, my: 3 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ ...verticalCenter, textAlign: "left" }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 13, color: "gray", fontWeight: 300, my: 3 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ipsa facilis repellendus ut? Veritatis mollitia iure
                modi ad minus laborum!
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#5CE7ED" }}
              >
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ ...verticalCenter }}>
            <img style={{ width: "100%" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
