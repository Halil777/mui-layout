import { Box } from "@mui/material";
import { FC } from "react";
import PoemsTable from "./components/PoemsTable";

const Poem: FC = () => {
  return (
    <Box p={3}>
      <PoemsTable />
    </Box>
  );
};

export default Poem;
