import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('Checking the title and the heading', async ({ page }) => {
  await page.goto('https://frontend-quiet-night-5362.fly.dev/');
  await expect(page).toHaveTitle(/Könyvek/);
  await expect(page.getByRole('heading', { name: 'BookWorms' , exact:true})).toBeVisible();
})

test('Checking the name of the books', async ({ page }) => {
  await page.goto('https://frontend-quiet-night-5362.fly.dev/');
  await expect(page.getByRole('heading', { name: 'Angol-magyar szótár' , exact:true})).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'Fotókönyv' , exact:true})).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'A filozófia nagykönyve - Minden, amit tudni érdemes' , exact:true})).toBeVisible({ timeout: 10000 });
})
