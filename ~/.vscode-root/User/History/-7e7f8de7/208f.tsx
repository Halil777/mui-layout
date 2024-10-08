import { Grid } from "@mui/material";
import { FC } from "react";
import DashboardCards from "./components/DashboardCards";

const Dashboard: FC = () => {
  return (
    <>
      <Grid container spacing={3} p={3}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <DashboardCards />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
