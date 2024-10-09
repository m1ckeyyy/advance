import { test, expect } from '@playwright/test';

test('admin success login', async ({ page }) => {
    await page.goto('http://localhost:3000/admin');

    // Expect a title "to contain" a substring.
    const h2 = await page.locator('h2').textContent();
    await expect(h2).toEqual('Login via admin account');
});
