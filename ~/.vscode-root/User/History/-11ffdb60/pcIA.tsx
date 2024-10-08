import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Static data for the orders table
const orders = [
  {
    id: 1,
    name: "John Doe",
    orderName: "Laptop",
    orderCount: 1,
    orderType: "Electronics",
    orderCost: "$1000",
  },
  {
    id: 2,
    name: "Jane Smith",
    orderName: "Desk Chair",
    orderCount: 2,
    orderType: "Furniture",
    orderCost: "$200",
  },
  {
    id: 3,
    name: "Samuel Green",
    orderName: "Headphones",
    orderCount: 5,
    orderType: "Electronics",
    orderCost: "$150",
  },
];

const OrdersTable: FC = () => {
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
                <IconButton color="primary" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
