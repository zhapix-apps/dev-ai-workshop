import React from "react";
import { Box, Typography } from "@mui/material";
import { Folder as FolderIcon, Add as AddIcon } from "@mui/icons-material";

interface SpaceCardProps {
  name: string;
  subtitle: string;
}

export function SpaceCard({ name, subtitle }: SpaceCardProps) {
  return (
    <Box
      sx={{
        width: 160,
        height: 130,
        bgcolor: "#0e2647",
        border: "1px solid #1c3760",
        borderRadius: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <FolderIcon sx={{ color: "#3b82f6" }} />
      <Typography variant="body2" fontWeight={600} noWrap>
        {name}
      </Typography>
      <Typography variant="caption" color="text.secondary" noWrap>
        {subtitle}
      </Typography>
    </Box>
  );
}

interface AddSpaceCardProps {
  onClick: () => void;
}

export function AddSpaceCard({ onClick }: AddSpaceCardProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 160,
        height: 130,
        border: "2px dashed #4a5a75",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        cursor: "pointer",
        color: "text.secondary",
        "&:hover": { borderColor: "#3b82f6", color: "#3b82f6" },
      }}
    >
      <AddIcon />
      <Typography variant="body2">Add</Typography>
    </Box>
  );
}
