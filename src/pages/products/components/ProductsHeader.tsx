import { Paper, Typography } from "@mui/material";
import AddProduct from "./AddProduct";

const ProductsHeader = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 3,
        pl: 3,
        pr: 3,
      }}
    >
      <Typography>Products page</Typography>
      <AddProduct />
    </Paper>
  );
};

export default ProductsHeader;
