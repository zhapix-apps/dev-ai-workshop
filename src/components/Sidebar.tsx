import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  Apps as AppsIcon,
  AccountCircle as AccountCircleIcon,
  Dashboard as DashboardIcon,
  CheckBox as CheckBoxIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "My Apps", icon: <AppsIcon fontSize="small" /> },
  { label: "My Profile", icon: <AccountCircleIcon fontSize="small" /> },
  { label: "DIO", icon: <DashboardIcon fontSize="small" />, active: true },
  { label: "My Status", icon: <CheckBoxIcon fontSize="small" /> },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 220,
        bgcolor: "#0a1a33",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        py: 2,
      }}
    >
      <Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 2, mb: 4 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background:
                "conic-gradient(from 90deg, #e11d48, #f59e0b, #3b82f6, #10b981)",
            }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight={700} lineHeight={1.1}>
              zhapix
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: 9 }}>
              Industry Readiness Program
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={0.5} sx={{ px: 1 }}>
          {NAV_ITEMS.map((item) => (
            <Stack
              key={item.label}
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                px: 2,
                py: 1.2,
                borderRadius: 1.5,
                cursor: "pointer",
                bgcolor: item.active ? "#3b5b82" : "transparent",
                color: item.active ? "#fff" : "text.secondary",
                "&:hover": { bgcolor: "#1c3760" },
              }}
            >
              {item.icon}
              <Typography variant="body2" fontWeight={item.active ? 600 : 400}>
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ px: 3, py: 1.2, cursor: "pointer", color: "#f87171" }}
      >
        <LogoutIcon fontSize="small" />
        <Typography variant="body2" fontWeight={600}>
          Log out
        </Typography>
      </Stack>
    </Box>
  );
}
