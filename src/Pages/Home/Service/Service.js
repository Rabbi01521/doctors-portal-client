import { CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={2} sm={2} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
