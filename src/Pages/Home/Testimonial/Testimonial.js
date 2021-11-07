import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const testimonial = [
  {
    name: "winson Herry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: people1,
  },
  {
    name: "winson Herry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: people2,
  },
  {
    name: "winson Herry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: people3,
  },
];

const Testimonial = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ mb: 3 }}
          style={{ color: "#5CE7ED", textTransform: "uppercase" }}
        >
          Testimonial
        </Typography>
        <Typography variant="h3" style={{ color: "gray", margin: "25px 0" }}>
          What's Your Patients <br /> Says
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {testimonial.map((card, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
              <Card sx={{ maxWidth: 345, height: 250 }}>
                <CardContent sx={{ height: "40%", p: 5 }}>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardHeader
                  sx={{ px: 5, color: "#5CE7ED" }}
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img
                        src={card.img}
                        alt=""
                        style={{ backgroundSize: "container" }}
                      />
                    </Avatar>
                  }
                  title={card.name}
                  subheader="California"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
