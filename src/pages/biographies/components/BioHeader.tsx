import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import AddBio from "./AddBio";

const BioHeader: FC = () => {
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
      <Typography>Biography Magrupy</Typography>
      <AddBio />
    </Paper>
  );
};

export default BioHeader;
