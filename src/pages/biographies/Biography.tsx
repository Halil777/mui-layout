import { Stack } from "@mui/material";
import { FC } from "react";
import BioHeader from "./components/BioHeader";
import BioTable from "./components/BioTable";

const Biography: FC = () => {
  return (
    <Stack spacing={5} p={3}>
      <BioHeader />
      <BioTable />
    </Stack>
  );
};

export default Biography;
