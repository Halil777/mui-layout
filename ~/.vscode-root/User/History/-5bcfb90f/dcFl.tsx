import {
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

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

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Filter Dropdown */}
        <FormControl variant="outlined" sx={{ mr: 2 }}>
          <InputLabel id="order-status-label">Status</InputLabel>
          <Select
            labelId="order-status-label"
            defaultValue=""
            label="Status"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="shipped">Shipped</MenuItem>
            <MenuItem value="delivered">Delivered</MenuItem>
            <MenuItem value="canceled">Canceled</MenuItem>
          </Select>
        </FormControl>

        {/* Search Input */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search orders"
          sx={{ mr: 2 }}
        />

        {/* Search Button */}
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default OrdersHeader;
