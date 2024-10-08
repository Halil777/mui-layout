import { FC } from "react";
import OrdersHeader from "./components/OrdersHeader";
import OrdersList from "./components/OrdersList";
import OrdersCard from "./components/OrdersCard";
import { Box } from "@mui/material";

const Orders: FC = () => {
  return (
    <Box p={3}>
      <OrdersHeader />
      <OrdersList />
      <OrdersCard />
    </Box>
  );
};

export default Orders;
