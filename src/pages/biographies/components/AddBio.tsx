import React, { FC, useState } from "react";
import { Button, Drawer, TextField, Typography, Box } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AxiosInstance } from "../../../api/api";

interface BioData {
  name: string;
  birth_date: string;
  died_date: string;
  description: string;
}

const AddBio: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bioData, setBioData] = useState<BioData>({
    name: "",
    birth_date: "",
    died_date: "",
    description: "",
  });

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBioData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (value: string) => {
    setBioData((prev) => ({ ...prev, description: value }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", bioData.name);
    formData.append("birth_date", bioData.birth_date);
    formData.append("died_date", bioData.died_date);
    formData.append("description", bioData.description);

    console.log("Form Data:", Object.fromEntries(formData));

    try {
      const response = await AxiosInstance("/api/bio", {
        method: "POST",
        data: formData,
      });

      if (response.status === 201) {
        console.log("Biography added:", response.data);
        setDrawerOpen(false);
        setBioData({
          name: "",
          birth_date: "",
          died_date: "",
          description: "",
        });
      } else {
        console.error("Error adding biography:", response);
      }
    } catch (error) {
      console.error("Error adding biography:", error);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Biography
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 400,
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Biography
          </Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            label="Birth Date"
            name="birth_date"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
          />
          <TextField
            label="Died Date"
            name="died_date"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
          />
          <ReactQuill
            value={bioData.description}
            onChange={handleDescriptionChange}
            placeholder="Write a description..."
            style={{ marginBottom: "16px", height: "200px" }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default AddBio;
