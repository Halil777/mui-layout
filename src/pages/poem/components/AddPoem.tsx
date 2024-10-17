import { FC, useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { AxiosInstance } from "../../../api/api";

interface AddPoemProps {
  onClose: () => void;
}

const AddPoem: FC<AddPoemProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [poem, setPoem] = useState("");

  const handleSubmit = async () => {
    if (!title || !poem) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await AxiosInstance.post("/api/poems", { title, poem });
      alert("Poem added successfully!");
      onClose();
    } catch (error) {
      console.error("Failed to add poem:", error);
    }
  };

  return (
    <Box sx={{ width: 400, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New Poem
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
        Poem Content:
      </Typography>
      <ReactQuill
        theme="snow"
        value={poem}
        onChange={setPoem}
        style={{ height: "200px", marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mr: 2 }}
      >
        Submit
      </Button>
      <Button variant="outlined" onClick={onClose}>
        Cancel
      </Button>
    </Box>
  );
};

export default AddPoem;
