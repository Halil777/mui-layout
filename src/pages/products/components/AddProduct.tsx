import { FC, useState } from "react";
import {
  Button,
  Drawer,
  Paper,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

const AddProduct: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null as File | null,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files ? e.target.files[0] : null,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.image) {
      setSnackbarMessage("Please fill out all fields.");
      setSnackbarOpen(true);
      return;
    }

    const newProduct = new FormData();
    newProduct.append("name", formData.name);
    newProduct.append("price", formData.price);
    newProduct.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:7575/api/products", {
        method: "POST",
        body: newProduct,
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const data = await response.json();
      console.log("Product added:", data);
      setFormData({ name: "", price: "", image: null });
      setDrawerOpen(false);
      setSnackbarMessage("Product added successfully!");
    } catch (error: any) {
      setSnackbarMessage(error.message);
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Add Product
      </Button>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Paper sx={{ width: 400, padding: 2, minHeight: "100vh", pt: 13 }}>
          <Typography variant="h6">Add New Product</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <input
              accept="image/*"
              type="file"
              name="image"
              onChange={handleChange}
              style={{ margin: "8px 0" }}
              required
            />
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Paper>
      </Drawer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddProduct;
