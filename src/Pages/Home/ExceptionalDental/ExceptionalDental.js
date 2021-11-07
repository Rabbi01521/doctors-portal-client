import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import treatment from "../../../images/treatment.png";

const ExceptionalDental = () => {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <img src={treatment} alt="" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography variant="h3">
              Exceptional Dental <br /> Care, on Your Terms
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 18, color: "gray", fontWeight: 300, my: 4 }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              ex, dolor eligendi consectetur mollitia facere assumenda nulla
              exercitationem architecto perferendis iusto iure minus omnis
              labore magni laborum illo suscipit hic beatae quaerat tempore!
              Exercitationem quam, temporibus nesciunt nisi ipsa minus ex ipsam
              explicabo illo expedita ut repellendus vero reprehenderit
              doloremque consequatur ipsum eveniet impedit, adipisci doloribus
              eligendi sapiente voluptates. Minima eius voluptatem et officiis
              odio totam ad eum repudiandae fugit sint, pariatur dolore error,
              doloribus beatae aliquid placeat maiores deserunt quod alias id
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionalDental;
