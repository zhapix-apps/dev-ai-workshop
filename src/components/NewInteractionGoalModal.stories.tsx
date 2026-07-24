import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NewInteractionGoalModal, {
  type InteractionGoalPayload,
} from "./NewInteractionGoalModal";

const meta = {
  title: "Components/NewInteractionGoalModal",
  component: NewInteractionGoalModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NewInteractionGoalModal>;

export default meta;
type Story = StoryObj<typeof NewInteractionGoalModal>;

/**
 * Default state of the modal with basic contacts
 */
export const Default: Story = {
  args: {
    open: true,
    onClose: () => console.log("Modal closed"),
    onCreate: (payload: InteractionGoalPayload) =>
      console.log("Goal created:", payload),
    contacts: ["John Doe", "Jane Smith", "Mike Johnson"],
  },
};

/**
 * Modal with custom contacts list
 */
export const WithCustomContacts: Story = {
  args: {
    open: true,
    onClose: () => console.log("Modal closed"),
    onCreate: (payload: InteractionGoalPayload) =>
      console.log("Goal created:", payload),
    contacts: [
      "Alice Williams",
      "Bob Brown",
      "Carol Davis",
      "David Miller",
      "Eve Wilson",
    ],
  },
};

/**
 * Modal in closed state
 */
export const Closed: Story = {
  args: {
    open: false,
    onClose: () => console.log("Modal closed"),
    onCreate: (payload: InteractionGoalPayload) =>
      console.log("Goal created:", payload),
    contacts: ["John Doe", "Jane Smith"],
  },
};

/**
 * Interactive story demonstrating full modal flow
 */
export const Interactive: Story = {
  args: {
    open: true,
    onClose: () => console.log("Modal closed"),
    onCreate: (payload: InteractionGoalPayload) =>
      console.log("Goal created:", payload),
    contacts: ["John Doe", "Jane Smith", "Mike Johnson"],
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [createdGoals, setCreatedGoals] = useState<InteractionGoalPayload[]>(
      [],
    );

    const handleCreate = (payload: InteractionGoalPayload) => {
      setCreatedGoals([...createdGoals, payload]);
      console.log("Goal created:", payload);
    };

    return (
      <div>
        <button onClick={() => setOpen(true)} style={{ marginBottom: "20px" }}>
          Open Modal
        </button>
        <NewInteractionGoalModal
          open={open}
          onClose={() => setOpen(false)}
          onCreate={handleCreate}
          contacts={["John Doe", "Jane Smith", "Mike Johnson"]}
        />
        {createdGoals.length > 0 && (
          <div style={{ marginTop: "20px", color: "#333" }}>
            <h3>Created Goals:</h3>
            <ul>
              {createdGoals.map((goal, index) => (
                <li key={index}>
                  {goal.goalName} - Contact: {goal.contact}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

/**
 * Modal with minimal contacts
 */
export const MinimalContacts: Story = {
  args: {
    open: true,
    onClose: () => console.log("Modal closed"),
    onCreate: (payload: InteractionGoalPayload) =>
      console.log("Goal created:", payload),
    contacts: ["Contact 1"],
  },
};
