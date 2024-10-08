import { Typography, Box, Button } from "@mui/material";

const OrdersHeader = () => {
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

      <Button variant="contained" color="primary">
        Add Order
      </Button>
    </Box>
  );
};

export default OrdersHeader;
