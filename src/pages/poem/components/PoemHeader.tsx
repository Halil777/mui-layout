import { Button, Paper, Typography, Drawer } from "@mui/material";
import { FC, useState } from "react";
import AddPoem from "./AddPoem";

const PoemHeader: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pl: 3,
        pr: 3,
      }}
    >
      <Typography>Poems Page</Typography>
      <Button variant="outlined" onClick={() => toggleDrawer(true)}>
        Add Poem
      </Button>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <AddPoem onClose={() => toggleDrawer(false)} />
      </Drawer>
    </Paper>
  );
};

export default PoemHeader;
