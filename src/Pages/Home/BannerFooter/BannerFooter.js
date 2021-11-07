import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React from "react";

const about = [
  {
    name: "Opening Hours",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <AccessTimeFilledIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Visit Our Location",
    description: "5022 Driftwood Road, California",
    icon: <RoomIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Contact Us Now",
    description: "+ 408-387-7510",
    icon: <CallIcon sx={{ fontSize: 40 }} />,
  },
];

const BannerFooter = () => {
  return (
    <Container sx={{ mb: 10, mt: -10 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {about.map((card, index) => (
            <Grid item xs={12} sm={2} md={4} key={index}>
              <Card style={{ backgroundColor: "#5CE7ED", height: 121 }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alienItem: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      height: "68%",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {card.icon}
                  </CardContent>
                  <CardContent
                    sx={{
                      height: "68%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ color: "white" }}
                        variant="h5"
                        component="div"
                      >
                        {card.name}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5, color: "white", fontSize: 12 }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BannerFooter;
