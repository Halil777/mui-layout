import React, { FC, useEffect, useState } from "react";
import { Stack, Paper, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import PoemHeader from "./PoemHeader";
import { AxiosInstance } from "../../../api/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Data {
  id: number;
  title: string;
  poem: string;
}

interface ColumnData {
  dataKey: keyof Data | "actions";
  label: string;
  numeric?: boolean;
  width?: number;
}

const columns: ColumnData[] = [
  { width: 50, label: "ID", dataKey: "id", numeric: true },
  { width: 150, label: "Title", dataKey: "title" },
  { width: 500, label: "Poem", dataKey: "poem" },
  { width: 100, label: "Actions", dataKey: "actions" },
];

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? "right" : "left"}
          style={{ width: column.width }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(
  _index: number,
  row: Data,
  handleEdit: (id: number) => void,
  handleDelete: (id: number) => void
) {
  return (
    <>
      {columns.map((column) => {
        if (column.dataKey === "actions") {
          return (
            <TableCell key="actions">
              <IconButton onClick={() => handleEdit(row.id)}>
                <EditIcon sx={{ color: "green" }} />
              </IconButton>
              <IconButton
                onClick={() => handleDelete(row.id)}
                color="secondary"
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </TableCell>
          );
        }
        return (
          <TableCell
            key={column.dataKey}
            align={column.numeric ? "right" : "left"}
          >
            {row[column.dataKey as keyof Data]}
          </TableCell>
        );
      })}
    </>
  );
}

const PoemsTable: FC = () => {
  const [rows, setRows] = useState<Data[]>([]);

  useEffect(() => {
    AxiosInstance.get("/api/poems")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch poems:", error);
      });
  }, []);

  const handleEdit = (id: number) => {
    console.log(`Edit poem with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete poem with ID: ${id}`);
  };

  return (
    <Stack spacing={3}>
      <PoemHeader />
      <Paper style={{ height: 400, width: "100%" }}>
        <TableVirtuoso
          data={rows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={(index, row) =>
            rowContent(index, row, handleEdit, handleDelete)
          }
        />
      </Paper>
    </Stack>
  );
};

export default PoemsTable;
