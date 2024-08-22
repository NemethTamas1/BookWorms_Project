import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro

const localURL = 'http://localhost:3000/';

test('Checking the title and the heading', async ({ page }) => {
  await page.goto(localURL+'books');
  await expect(page).toHaveTitle(/Könyvek/);
  await expect(page.getByRole('heading', { name: 'BookWorms' , exact:true})).toBeVisible();
})

test('Checking the name of the books', async ({ page }) => {
  await page.goto(localURL+'books');
  await expect(page.getByRole('heading', { name: 'Angol-magyar szótár' , exact:true})).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'Fotókönyv' , exact:true})).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'A filozófia nagykönyve - Minden, amit tudni érdemes' , exact:true})).toBeVisible({ timeout: 10000 });
})

// test("Form Successful Submission", async ({ page }) => {
//   await page.goto(localURL);

//   await page.waitForSelector("#erdekelGomb");
//   await page.click("#erdekelGomb");

//   await page.fill("#family_name", "Vezetéknév");
//   await page.fill("#first_name", "Keresztnév");
//   await page.fill("#email", "teszt@email.hu");
//   await page.fill("#motivational_letter", "Ez egy motivációs levél.");

//   page.once('dialog', async dialog => {
//     expect(dialog.message()).toBe('Jelentkezését fogadtuk!');
//     await dialog.accept();
//   });

//   await page.click('button[type = "submit"]');
// });