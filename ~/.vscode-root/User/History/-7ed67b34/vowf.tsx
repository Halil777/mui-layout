import { FC, useState } from "react";
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

const AddOrder: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [orderName, setOrderName] = useState("");
  const [orderCount, setOrderCount] = useState(1);
  const [orderType, setOrderType] = useState("");
  const [orderCost, setOrderCost] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    const newOrder = {
      name: customerName,
      orderName,
      orderCount,
      orderType,
      orderCost: `$${orderCost}`, // Assuming orderCost should be prefixed with a dollar sign
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) {
        throw new Error("Failed to add order");
      }

      const data = await response.json();
      console.log("Order added:", data);

      // Clear the form
      setCustomerName("");
      setOrderName("");
      setOrderCount(1);
      setOrderType("");
      setOrderCost("");

      // Close the drawer after successful submission
      onClose();
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={3}>
      <Typography variant="h5" sx={{ mb: 3, mt: 5 }}>
        Add New Order
      </Typography>

      {/* Customer Name */}
      <TextField
        label="Customer Name"
        variant="outlined"
        fullWidth
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Order Name */}
      <TextField
        label="Order Name"
        variant="outlined"
        fullWidth
        value={orderName}
        onChange={(e) => setOrderName(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Order Count */}
      <TextField
        label="Order Count"
        variant="outlined"
        type="number"
        fullWidth
        value={orderCount}
        onChange={(e) => setOrderCount(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      {/* Order Type */}
      <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
        <InputLabel>Order Type</InputLabel>
        <Select
          label="Order Type"
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
        >
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
        value={orderCost}
        onChange={(e) => setOrderCost(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        sx={{ mt: 2 }}
      >
        Add Order
      </Button>
    </Box>
  );
};

export default AddOrder;
