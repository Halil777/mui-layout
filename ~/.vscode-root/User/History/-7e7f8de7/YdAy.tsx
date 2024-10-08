import { Box, Grid } from "@mui/material";
import { FC } from "react";
import DashboardCards from "./components/DashboardCards";
import DashboardHeader from "./components/DashboardHeader";

const Dashboard: FC = () => {
  return (
    <Box p={3}>
      <DashboardHeader />
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <DashboardCards />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
