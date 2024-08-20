import { expect, test } from "@playwright/test";

test("update store profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Confeitaria da Nah");
  await page
    .getByLabel("Descrição")
    .fill("Bolos e doces artesanais e customizados.");

  await page.getByRole("button", { name: "Salvar" }).click();
  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso");

  expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();
  //await page.waitForTimeout(250);

  await expect(
    page.getByRole("button", { name: "Confeitaria da Nah" }),
  ).toBeVisible();
});

test("update store profile with error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Loja inválida");
  await page.getByLabel("Descrição").fill("Descrição inválida");

  await page.getByRole("button", { name: "Salvar" }).click();
  await page.waitForLoadState("networkidle");
  const toast = page.getByText("Erro ao atualizar o perfil");

  expect(toast).toBeVisible();
});
