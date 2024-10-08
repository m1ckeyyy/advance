import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Expect a title "to contain" a substring.
    const title = await page.title();

    await expect(title).toEqual('Advance Nieruchomości');
});
