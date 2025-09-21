import { Box, IconButton, InputBase } from "@mui/material";
import { Search, Brightness4, Brightness7 } from "@mui/icons-material";

export default function Header({ mode, setMode }) {
  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="center" bgcolor="background.paper" px={2} py={0.5} borderRadius={2}>
        <Search />
        <InputBase placeholder="Search…" sx={{ ml: 1, flex: 1 }} />
      </Box>
      <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Box>
  );
}
