import React, { useState } from "react";
import { Box, Stack, Typography, IconButton, Button, Avatar, Divider } from "@mui/material";
import { Refresh as RefreshIcon, Add as AddIcon, Home as HomeIcon } from "@mui/icons-material";
import { SpaceCard, AddSpaceCard } from "./SpaceCard";
import NewInteractionGoalModal, { InteractionGoalPayload } from "./NewInteractionGoalModal";

interface Space {
  id: string;
  name: string;
  subtitle: string;
}

const INITIAL_SPACES: Space[] = [{ id: "1", name: "Zha...", subtitle: "Targ..." }];

interface DIOPageProps {
  userName: string;
  avatarSrc?: string;
}

export default function DIOPage({ userName, avatarSrc }: DIOPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [spaces, setSpaces] = useState<Space[]>(INITIAL_SPACES);

  const handleCreateGoal = (payload: InteractionGoalPayload) => {
    // Wire this up to your API / state management as needed.
    console.log("Created interaction goal:", payload);
  };

  return (
    <Box sx={{ px: 4, py: 3, flex: 1 }}>
      {/* Title row: DIO on the left, controls + user info on the right, all on one baseline */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={700}>
          DIO
        </Typography>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <IconButton
            sx={{ bgcolor: "#1c3760", "&:hover": { bgcolor: "#28477a" }, borderRadius: 1.5 }}
          >
            <RefreshIcon fontSize="small" />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setModalOpen(true)}
            sx={{ bgcolor: "#1c3760", textTransform: "none", "&:hover": { bgcolor: "#28477a" } }}
          >
            Add Space
          </Button>
          <Typography variant="body2" sx={{ ml: 1 }}>
            {userName}
          </Typography>
          <Avatar sx={{ width: 32, height: 32 }} src={avatarSrc} alt={userName} />
        </Stack>
      </Stack>

      {/* Subtitle sits on its own line below the title, left-aligned, full width */}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 2 }}>
        Spaces that group related conversations together
      </Typography>

      <Divider sx={{ borderColor: "#1c3760", mb: 3 }} />

      <Stack direction="row" spacing={1} alignItems="center" mb={2} color="text.secondary">
        <HomeIcon fontSize="small" />
        <Typography variant="body2">Office</Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        {spaces.map((space) => (
          <SpaceCard key={space.id} name={space.name} subtitle={space.subtitle} />
        ))}
        <AddSpaceCard onClick={() => setModalOpen(true)} />
      </Stack>

      <NewInteractionGoalModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateGoal}
      />
    </Box>
  );
}
