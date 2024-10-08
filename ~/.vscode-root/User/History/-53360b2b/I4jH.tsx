import { FC } from "react";
import OrdersHeader from "./components/OrdersHeader";
import OrdersList from "./components/OrdersList";
import OrdersCard from "./components/OrdersCard";

const Orders: FC = () => {
  return (
    <div>
      <OrdersHeader />
      <OrdersList />
      <OrdersCard />
    </div>
  );
};

export default Orders;
