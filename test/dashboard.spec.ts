import { expect, test } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("23", { exact: true })).toBeVisible();
  expect(
    page.getByText("-2% em relação a ontem", { exact: true }),
  ).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("531", { exact: true })).toBeVisible();
  expect(
    page.getByText("+9% em relação ao mês anterior", { exact: true }),
  ).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("10", { exact: true })).toBeVisible();
  expect(
    page.getByText("-1% em relação ao mês anterior", { exact: true }),
  ).toBeVisible();
});

test("display month renevue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("R$ 235,61", { exact: true })).toBeVisible();
  expect(
    page.getByText("+13% em relação ao mês anterior", { exact: true }),
  ).toBeVisible();
});
