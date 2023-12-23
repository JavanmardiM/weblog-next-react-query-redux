// import percySnapshot from '@percy/playwright';
import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test.describe("Static pages", () => {
    test("should take screenshot of the homepage", async ({ page }) => {
      await page.goto("/");

      await expect(
        page.getByRole("heading", {
          name: "overreacted",
        })
      ).toBeVisible();

      //   await percySnapshot(page, 'Homepage');
    });

    test("should take screenshot of the post page", async ({ page }) => {
      await page.goto("/post");

      await expect(
        page.getByRole("link", {
          name: "post",
        })
      ).toBeVisible();

      //   await percySnapshot(page, 'post');
    });
  });
});

test("should navigate to the post page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'post' and click on it
  await page.click("text=post");
  // The new URL should be "/post" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/post/1");
  // The new page should contain an h1 with "post"
  await expect(page.locator("h1")).toContainText("overreacted");
});
