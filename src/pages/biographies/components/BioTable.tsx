import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FC, useEffect, useState } from "react";
import { AxiosInstance } from "../../../api/api";

interface BiographyData {
  id: number;
  name: string;
  birth_date: string;
  died_date: string;
  description: string;
  image: string;
}

const BioTable: FC = () => {
  const [biographies, setBiographies] = useState<BiographyData[]>([]);

  useEffect(() => {
    const fetchBiographies = async () => {
      try {
        const response = await AxiosInstance.get("/api/bio");
        setBiographies(response.data);
      } catch (error) {
        console.error("Failed to fetch biographies:", error);
      }
    };

    fetchBiographies();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Died Date</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {biographies.map((bio) => (
              <TableRow
                key={bio.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{bio.name}</TableCell>
                <TableCell>{bio.birth_date}</TableCell>
                <TableCell>{bio.died_date}</TableCell>
                <TableCell>{bio.description.slice(3, 110)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BioTable;
