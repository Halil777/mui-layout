import { useState } from "react";
import { Typography, Box, Button, Drawer } from "@mui/material";
import AddOrder from "./AddOrder";

const OrdersHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Orders</Typography>

      {/* Add Order Button */}
      <Button variant="contained" color="primary" onClick={handleDrawerOpen}>
        Add Order
      </Button>

      {/* Drawer for Adding Order */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: "400px", // Adjust width as needed
            padding: 2,
          },
        }}
      >
        <AddOrder />
      </Drawer>
    </Box>
  );
};

export default OrdersHeader;
