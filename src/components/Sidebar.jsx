import { List, ListItemButton, ListItemText, Box } from "@mui/material";

export default function Sidebar({ setPage }) {
  return (
    <Box
      sx={{
        width: 220,
        bgcolor: "background.paper",
        height: "100vh",
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <List>
        <ListItemButton onClick={() => setPage("dashboard")}>
          <ListItemText primary="eCommerce" />
        </ListItemButton>
        <ListItemButton onClick={() => setPage("orders")}>
          <ListItemText primary="Orders" />
        </ListItemButton>

 <ListItemButton>
    <ListItemText primary="Projects" />
  </ListItemButton>
  <ListItemButton>
    <ListItemText primary="Online courses"  />
  </ListItemButton>
<ListItemButton>
    <ListItemText primary="Pages" secondary="User Profile" />
  </ListItemButton>
<ListItemButton>
    <ListItemText primary="Pages" secondary="Overview" />
  </ListItemButton>
<ListItemButton>
    <ListItemText primary="Pages" secondary="Documents" />
  </ListItemButton>
<ListItemButton>
    <ListItemText primary="Pages" secondary="Followers" />
  </ListItemButton>


      </List>
    </Box>
  );
}
