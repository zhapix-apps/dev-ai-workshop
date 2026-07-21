import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b1f3a",
      paper: "#0e2647",
    },
    primary: {
      main: "#3b82f6",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9fb0c9",
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});
