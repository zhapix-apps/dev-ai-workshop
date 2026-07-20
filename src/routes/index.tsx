import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zhapix — DIO" },
      { name: "description", content: "Zhapix Industry Readiness Program dashboard" },
    ],
  }),
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0b1220", paper: "#111a2e" },
    primary: { main: "#2f80ff" },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

const SIDEBAR_BG = "#0f1a33";
const MAIN_BG = "#0a1428";
const CARD_BG = "#111e3a";

function SidebarItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.2,
        borderRadius: 1,
        cursor: "pointer",
        color: active ? "#fff" : "rgba(255,255,255,0.72)",
        bgcolor: active ? "rgba(255,255,255,0.06)" : "transparent",
        fontSize: 14,
        "&:hover": { bgcolor: "rgba(255,255,255,0.04)" },
      }}
    >
      {icon}
      <Typography sx={{ fontSize: 14 }}>{label}</Typography>
    </Box>
  );
}

function Index() {
  const [open, setOpen] = useState(true);
  const [goalName, setGoalName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: MAIN_BG }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 230,
            bgcolor: SIDEBAR_BG,
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Box sx={{ px: 2.5, py: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background:
                  "conic-gradient(#ff5a5f, #ffbb33, #33cc99, #3399ff, #cc66ff, #ff5a5f)",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: 18, lineHeight: 1 }}>
                zhapix
              </Typography>
              <Typography sx={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>
                Industry Readiness Program
              </Typography>
            </Box>
          </Box>

          <Box sx={{ px: 1.5, mt: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <SidebarItem icon={<AppsIcon fontSize="small" />} label="My Apps" />
            <SidebarItem icon={<PersonOutlineIcon fontSize="small" />} label="My Profile" />
            <SidebarItem icon={<SettingsIcon fontSize="small" />} label="DIO" active />
            <SidebarItem icon={<CheckBoxOutlinedIcon fontSize="small" />} label="My Status" />
          </Box>

          <Box sx={{ flex: 1 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2.5,
              py: 2,
              color: "#ff4d4f",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            <LogoutIcon fontSize="small" />
            <Typography sx={{ fontSize: 14 }}>Log out</Typography>
          </Box>
        </Box>

        {/* Main */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Top bar */}
          <Box
            sx={{
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: 4,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              bgcolor: SIDEBAR_BG,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography sx={{ fontSize: 14 }}>Sunitha Chanda</Typography>
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://i.pravatar.cc/64?img=47"
              />
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1, px: 6, py: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 28, fontWeight: 700 }}>DIO</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, mt: 0.5 }}>
                  Spaces that group related conversations together
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <IconButton
                  sx={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 1,
                    width: 38,
                    height: 38,
                    color: "#fff",
                  }}
                >
                  <RefreshIcon fontSize="small" />
                </IconButton>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    bgcolor: "#2f80ff",
                    textTransform: "none",
                    borderRadius: 1,
                    px: 2,
                    "&:hover": { bgcolor: "#2670e0" },
                  }}
                >
                  Add Space
                </Button>
              </Box>
            </Box>

            <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 1 }}>
              <HomeOutlinedIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }} />
              <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                Official
              </Typography>
            </Box>

            <Box sx={{ mt: 2, display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Box
                sx={{
                  width: 150,
                  height: 130,
                  bgcolor: CARD_BG,
                  borderRadius: 2,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <FolderIcon sx={{ color: "#8fa4c8" }} />
                <Box>
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Zhapix</Typography>
                  <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
                    Target
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  width: 150,
                  height: 130,
                  borderRadius: 2,
                  border: "2px dashed rgba(255,255,255,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.55)",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(true)}
              >
                <AddIcon />
                <Typography sx={{ fontSize: 13, mt: 0.5 }}>Add</Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.05)" }} />
          <Box
            sx={{
              py: 1.5,
              textAlign: "center",
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Copyright © 2026 Zhapix ™ | All Rights Reserved
          </Box>
        </Box>

        {/* Dialog */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{
            paper: {
              sx: {
                bgcolor: "#091F3D",
                borderRadius: 2,
                width: 440,
                p: 1,
              },
            },
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 16,
              fontWeight: 600,
              pb: 1,
            }}
          >
            New Interaction Goal
            <IconButton onClick={() => setOpen(false)} size="small" sx={{ color: "#fff" }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ pt: 2 }}>
            <TextField
              placeholder="Goal Name"
              fullWidth
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#fff",
                  borderRadius: 2,
                  "& input": { color: "#333", py: 1.5, "&::placeholder": { color: "#999", opacity: 1 } },
                  "& fieldset": { border: "none" },
                },
              }}
            />
            <FormControl fullWidth>
              <Select
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                displayEmpty
                renderValue={(selected) =>
                  selected ? (
                    selected
                  ) : (
                    <Box component="span" sx={{ color: "#999" }}>
                      Contact
                    </Box>
                  )
                }
                IconComponent={ArrowDropDownIcon}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2,
                  color: "#333",
                  "& fieldset": { border: "none" },
                  "& .MuiSelect-select": { py: 1.5 },
                  "& .MuiSelect-icon": { color: "#333" },
                }}
              >
                <MenuItem value="alice">Alice</MenuItem>
                <MenuItem value="bob">Bob</MenuItem>
                <MenuItem value="charlie">Charlie</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button
              onClick={() => setOpen(false)}
              sx={{ color: "#2f80ff", textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2f80ff",
                textTransform: "none",
                borderRadius: 1,
                px: 3,
                "&:hover": { bgcolor: "#2670e0" },
              }}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}
