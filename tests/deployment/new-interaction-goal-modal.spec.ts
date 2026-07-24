import { expect, test } from "@playwright/test";

test.describe("deployed New Interaction Goal modal", () => {
  // Confirms the production build serves the expected application shell.
  test("loads the deployed DIO page", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Zhapix | DIO");
    await expect(page.getByRole("heading", { name: "DIO" })).toBeVisible();
    await expect(
      page.getByText("Spaces that group related conversations together"),
    ).toBeVisible();
  });

  // Confirms the deployed page opens the modal and completes the create flow.
  test("creates an interaction goal from the deployed page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Add Space" }).click();

    const modalTitle = page.getByText("New Interaction Goal");
    await expect(modalTitle).toBeVisible();

    await page.getByPlaceholder("Goal Name").fill("Follow up with customer");
    await page.getByRole("combobox").click();
    await page.getByRole("option", { name: "John Doe" }).click();
    await page.getByRole("button", { name: "Create" }).click();

    await expect(modalTitle).toBeHidden();
  });

  // Confirms the deployed modal can be dismissed without creating a goal.
  test("closes the deployed modal with Cancel", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Add Space" }).click();

    await expect(page.getByText("New Interaction Goal")).toBeVisible();
    await page.getByText("Cancel").click();

    await expect(page.getByText("New Interaction Goal")).toBeHidden();
  });
});