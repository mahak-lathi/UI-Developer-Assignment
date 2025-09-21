import { useState } from "react";
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  TablePagination, Paper, TextField
} from "@mui/material";

const rows = [
  { id: "#CMP801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CMP802", user: "Kate Morrison", project: "CRM Admin", address: "Larry san francisco",date: "A minute ago", status: "Completed" },
  { id: "#CMP803", user: "Drew Cano", project: "Client Project", address: "789 Oak St", date: "1 hr ago", status: "Pending" },
  { id: "#CMP804", user: "Orlando Diggs", project: "Admin Dashboard", address: "101 Pine St", date: "Yesterday", status: "Approved" },
  { id: "#CMP805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
  { id: "#CMP806", user: "Andi Lane", project: "App Landing Page", address: "202 Maple St", date: "Feb 2, 2023", status: "Rejected" },
  { id: "#CMP807", user: "Kate Morrison", project: "App Landing Page", address: "Meadow Lane Oakland", date: "A Minute Ago", status: "Rejected" },
];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredRows = rows.filter(
    (row) =>
      row.user.toLowerCase().includes(search.toLowerCase()) ||
      row.project.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        placeholder="Search orders…"
        fullWidth
        variant="outlined"
        size="small"
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
      />
    </Paper>
  );
}
