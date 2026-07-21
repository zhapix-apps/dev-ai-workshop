import React from "react";
import { Stack, Typography, Avatar } from "@mui/material";

interface HeaderProps {
  userName: string;
  avatarSrc?: string;
}

export default function Header({ userName, avatarSrc }: HeaderProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={1.5}
      sx={{ bgcolor: "#0a1a33", px: 3, py: 1.5 }}
    >
      <Typography variant="body2">{userName}</Typography>
      <Avatar sx={{ width: 32, height: 32 }} src={avatarSrc} alt={userName} />
    </Stack>
  );
}
