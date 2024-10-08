import { Box } from "@mui/material";
import { FC } from "react";
import DashboardCards from "./components/DashboardCards";
import DashboardHeader from "./components/DashboardHeader";

const Dashboard: FC = () => {
  return (
    <Box p={3}>
      <DashboardHeader />

      <DashboardCards />
    </Box>
  );
};

export default Dashboard;
