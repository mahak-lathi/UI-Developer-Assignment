import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#f4f6f8",
            paper: "#ffffff",
          },
          text: {
            primary: "#1e1e1e",
          },
        }
      : {
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
          },
        }),
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
