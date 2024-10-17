import { Box } from "@mui/material";
import ProductsTable from "./components/ProductsTable";
import ProductsHeader from "./components/ProductsHeader";

const Products = () => {
  return (
    <Box p={3}>
      <ProductsHeader />
      <ProductsTable />
    </Box>
  );
};

export default Products;
