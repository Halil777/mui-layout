import { FC, useState, useEffect } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

interface EditOrderProps {
  order: any;
  onClose: () => void;
  onUpdate: () => void; // Optional: callback to refresh or indicate success
}

const EditOrder: FC<EditOrderProps> = ({ order, onClose, onUpdate }) => {
  const [name, setName] = useState("");
  const [orderName, setOrderName] = useState("");
  const [orderCount, setOrderCount] = useState(1);
  const [orderType, setOrderType] = useState("");
  const [orderCost, setOrderCost] = useState("");

  // Populate fields when order is provided
  useEffect(() => {
    if (order) {
      setName(order.name);
      setOrderName(order.orderName);
      setOrderCount(order.orderCount);
      setOrderType(order.orderType);
      setOrderCost(order.orderCost.replace("$", "")); // Assuming orderCost comes with a dollar sign
    }
  }, [order]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    const updatedOrder = {
      name,
      orderName,
      orderCount,
      orderType,
      orderCost: `$${orderCost}`, // Assuming orderCost should be prefixed with a dollar sign
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/${order.id}`,
        {
          // Assuming order has an 'id' property
          method: "PUT", // Use PUT for updating resources
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedOrder),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      const data = await response.json();
      console.log("Order updated:", data);

      // Clear the form
      setName("");
      setOrderName("");
      setOrderCount(1);
      setOrderType("");
      setOrderCost("");

      // Optionally call the onUpdate callback if passed
      if (onUpdate) onUpdate();

      // Close the drawer after successful submission
      onClose();
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  if (!order) return null; // Early return if order is not provided

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 300, padding: 3 }}
    >
      <Typography variant="h6" gutterBottom>
        Edit Order
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Name"
        value={orderName}
        onChange={(e) => setOrderName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Count"
        value={orderCount}
        onChange={(e) => setOrderCount(Number(e.target.value))}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Type"
        value={orderType}
        onChange={(e) => setOrderType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Cost"
        value={orderCost}
        onChange={(e) => setOrderCost(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        fullWidth
        type="submit" // Set type to "submit"
      >
        Save
      </Button>
    </Box>
  );
};

export default EditOrder;
