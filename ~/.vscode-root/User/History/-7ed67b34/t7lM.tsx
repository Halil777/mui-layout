import { FC } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

const AddOrder: FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" sx={{ mb: 3, mt: 5 }}>
        Add New Order
      </Typography>

      {/* Customer Name */}
      <TextField
        label="Customer Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Order Name */}
      <TextField
        label="Order Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Order Count */}
      <TextField
        label="Order Count"
        variant="outlined"
        type="number"
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Order Type */}
      <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
        <InputLabel>Order Type</InputLabel>
        <Select label="Order Type" defaultValue="">
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="bulk">Bulk</MenuItem>
          <MenuItem value="subscription">Subscription</MenuItem>
        </Select>
      </FormControl>

      {/* Order Cost */}
      <TextField
        label="Order Cost"
        variant="outlined"
        type="number"
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Submit Button */}
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Add Order
      </Button>
    </Box>
  );
};

export default AddOrder;
