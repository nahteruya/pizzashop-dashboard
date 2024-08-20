import { expect, test } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });
  await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop");
  await page.getByLabel("Seu nome").fill("Naomi Teruya");
  await page.getByLabel("Seu e-mail").fill("nahteruya@gmail.com");
  await page.getByLabel("Seu celular").fill("(11) 96456-0535");
  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso");

  expect(toast).toBeVisible();
});

test("sign up with wrong credentials", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });
  await page.getByLabel("Nome do estabelecimento").fill("Invalid Name");
  await page.getByLabel("Seu nome").fill("Naomi Teruya");
  await page.getByLabel("Seu e-mail").fill("nahteruya@gmail.com");
  await page.getByLabel("Seu celular").fill("(11) 96456-0535");
  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar restaurante");

  expect(toast).toBeVisible();
});

test("navigate to login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Login" }).click();

  expect(page.url()).toContain("/sign-in");
});
