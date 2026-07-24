// Component tests for the modal states, contact selection, creation flow, and close actions.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

// Provides a lightweight replacement for the close icon during tests.
vi.mock("@mui/icons-material", () => ({
  Close: () => null,
}));

import NewInteractionGoalModal from "./NewInteractionGoalModal";

// Groups all behavior checks for the NewInteractionGoalModal component.
describe("NewInteractionGoalModal", () => {
  // Verifies the open modal displays its title, goal input, and contact selector.
  it("renders the modal with the supplied contacts", () => {
    render(
      <NewInteractionGoalModal
        open
        onClose={vi.fn()}
        contacts={["Alice Williams", "Bob Brown"]}
      />,
    );

    expect(screen.getByText("New Interaction Goal")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Goal Name")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  // Verifies the modal content is hidden when the open prop is false.
  it("does not render when closed", () => {
    render(
      <NewInteractionGoalModal
        open={false}
        onClose={vi.fn()}
        contacts={["John Doe"]}
      />,
    );

    expect(screen.queryByText("New Interaction Goal")).not.toBeInTheDocument();
  });

  // Verifies users can enter a goal, select a contact, and submit the expected payload.
  it("selects a contact and creates the goal", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const onCreate = vi.fn();

    render(
      <NewInteractionGoalModal
        open
        onClose={onClose}
        onCreate={onCreate}
        contacts={["John Doe", "Jane Smith"]}
      />,
    );

    await user.type(screen.getByPlaceholderText("Goal Name"), "Follow up");
    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Jane Smith" }));
    await user.click(screen.getByRole("button", { name: "Create" }));

    expect(onCreate).toHaveBeenCalledWith({
      goalName: "Follow up",
      contact: "Jane Smith",
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // Verifies clicking Cancel notifies the parent that the modal should close.
  it("closes when Cancel is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <NewInteractionGoalModal
        open
        onClose={onClose}
        contacts={["John Doe"]}
      />,
    );

    await user.click(screen.getByText("Cancel"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});