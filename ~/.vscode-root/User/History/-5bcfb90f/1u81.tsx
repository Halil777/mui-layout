import { Typography, Box } from "@mui/material";

const OrdersHeader = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4">Orders</Typography>
      {/* Additional controls (filters/search) can be added here */}
    </Box>
  );
};

export default OrdersHeader;
