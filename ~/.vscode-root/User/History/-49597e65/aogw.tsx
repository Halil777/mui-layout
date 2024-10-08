import { FC } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

interface EditOrderProps {
  order: any;
  onClose: () => void;
}

const EditOrder: FC<EditOrderProps> = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <Box sx={{ width: 300, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Edit Order
      </Typography>
      <TextField
        label="Name"
        defaultValue={order.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Name"
        defaultValue={order.orderName}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Count"
        defaultValue={order.orderCount}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Type"
        defaultValue={order.orderType}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Cost"
        defaultValue={order.orderCost}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        fullWidth
        onClick={onClose}
      >
        Save
      </Button>
    </Box>
  );
};

export default EditOrder;
