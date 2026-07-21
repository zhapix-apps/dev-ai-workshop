import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  Modal,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

export interface InteractionGoalPayload {
  goalName: string;
  contact: string;
}

interface NewInteractionGoalModalProps {
  open: boolean;
  onClose: () => void;
  onCreate?: (payload: InteractionGoalPayload) => void;
  contacts?: string[];
}

export default function NewInteractionGoalModal({
  open,
  onClose,
  onCreate,
  contacts = ["John Doe", "Jane Smith"],
}: NewInteractionGoalModalProps) {
  const [goalName, setGoalName] = useState("");
  const [contact, setContact] = useState("");

  const handleCreate = () => {
    onCreate?.({ goalName, contact });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 360,
          bgcolor: "#0e2647",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
          p: 3,
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#ffffff" }}>
            New Interaction Goal
          </Typography>
          <IconButton size="small" onClick={onClose} sx={{ color: "#8ea0bd" }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Stack spacing={1.75}>
          <TextField
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            fullWidth
            sx={{
              bgcolor: "#ffffff",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                height: 44,
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { border: "1px solid #d0d5dd" },
                "&:hover fieldset": { borderColor: "#3b82f6" },
                "&.Mui-focused fieldset": { borderColor: "#3b82f6", borderWidth: "2px" },
              },
              "& .MuiInputBase-input": {
                display: "flex",
                alignItems: "center",
                height: "44px",
                padding: "0 14px",
                color: "#000",
              },
            }}
          />
          <FormControl
            fullWidth
            sx={{
              bgcolor: "#fff",
              borderRadius: "8px",
            }}
          >
            <Select
              displayEmpty
              value={contact}
              onChange={(e) => setContact(e.target.value as string)}
              sx={{
                height: 44,
                bgcolor: "#fff",
                borderRadius: "8px",
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  minHeight: "44px !important",
                  paddingTop: 0,
                  paddingBottom: 0,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #d0d5dd",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3b82f6",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3b82f6",
                  borderWidth: "2px",
                },
                "& .MuiSelect-icon": {
                  color: "#000",
                },
              }}
              renderValue={(selected) =>
                selected ? (
                  selected as string
                ) : (
                  <span style={{ color: "#7a7a7a", textAlign: "left", width: "100%", display: "block" }}>
                    Contact
                  </span>
                )
              }
              MenuProps={
                ({
                  PaperProps: {
                    sx: {
                      bgcolor: "#fff",
                      color: "#000",
                      borderRadius: 2,
                      mt: 1,
                      boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
                      "& .MuiMenuItem-root": {
                        fontSize: 14,
                      },
                      "& .MuiMenuItem-root:hover": {
                        bgcolor: "#f5f5f5",
                      },
                      "& .Mui-selected": {
                        bgcolor: "#E8F0FE !important",
                      },
                    },
                  },
                } as any)
              }
            >
              <MenuItem value="">
                <em>Select Contact</em>
              </MenuItem>

              {contacts.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack direction="row" sx={{ justifyContent: "flex-end", alignItems: "center", pt: 0.5 }} spacing={2.5}>
            <Typography
              onClick={onClose}
              sx={{ color: "#3b82f6", fontSize: 14, fontWeight: 500, cursor: "pointer" }}
            >
              Cancel
            </Typography>
            <Button
              variant="contained"
              onClick={handleCreate}
              sx={{
                bgcolor: "#6b7f99",
                textTransform: "none",
                fontSize: 14,
                borderRadius: "6px",
                px: 2.5,
                py: 1,
                boxShadow: "none",
                "&:hover": { bgcolor: "#5a6d85", boxShadow: "none" },
              }}
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
