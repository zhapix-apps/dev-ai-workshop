import React from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import Sidebar from "./components/Sidebar";
import DIOPage from "./components/DIOPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", bgcolor: "background.default", minHeight: "100vh" }}>
        <Sidebar />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <DIOPage userName="Sunitha Chanda" />

          <Box sx={{ textAlign: "center", py: 2, color: "text.secondary", mt: "auto" }}>
            Copyright © 2026 Zhapix ™ | All Rights Reserved
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
