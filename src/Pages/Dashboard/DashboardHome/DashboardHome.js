import { Grid } from "@mui/material";
import * as React from "react";
import Calender from "../../Shared/Calender/Calender";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={5}>
        <Calender date={date} setDate={setDate}></Calender>
      </Grid>
      <Grid item xs={12} md={7}>
        <Appointments date={date}></Appointments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
