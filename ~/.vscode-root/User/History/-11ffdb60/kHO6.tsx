import { FC, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOrder from "./EditOrder";

// Interface for Order type
interface Order {
  id: number;
  name: string;
  orderName: string;
  orderCount: number;
  orderType: string;
  orderCost: string;
}

const OrdersTable: FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:5000/api/orders");
    const data = await response.json();
    setOrders(data);
  };

  const handleEditClick = (order: Order) => {
    setSelectedOrder(order);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedOrder(null);
  };

  const handleDeleteClick = (order: Order) => {
    setOrderToDelete(order);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (orderToDelete) {
      await fetch(`http://localhost:5000/api/orders/${orderToDelete.id}`, {
        method: "DELETE",
      });
      setDeleteModalOpen(false);
      setOrderToDelete(null);
      fetchOrders(); // Refresh the order list
    }
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setOrderToDelete(null);
  };

  const handleOrderUpdate = async (updatedOrder: Order) => {
    await fetch(`http://localhost:5000/api/orders/${updatedOrder.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    });
    fetchOrders(); // Refresh the order list
    handleDrawerClose();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Order Name</TableCell>
            <TableCell>Order Count</TableCell>
            <TableCell>Order Type</TableCell>
            <TableCell>Order Cost</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.orderName}</TableCell>
              <TableCell>{order.orderCount}</TableCell>
              <TableCell>{order.orderType}</TableCell>
              <TableCell>{order.orderCost}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => handleEditClick(order)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => handleDeleteClick(order)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Drawer for editing order */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <EditOrder
          order={selectedOrder}
          onClose={handleDrawerClose}
          onUpdate={handleOrderUpdate}
        />
      </Drawer>

      {/* Delete confirmation modal */}
      <Dialog
        open={deleteModalOpen}
        onClose={handleCancelDelete}
        aria-labelledby="delete-confirmation-dialog"
      >
        <DialogTitle id="delete-confirmation-dialog">
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the order "
            {orderToDelete?.orderName}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="secondary"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default OrdersTable;
