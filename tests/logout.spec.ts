import { test, expect } from '@playwright/test';

test.describe('Betvision page', async () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('http://web-staging.aonewallet.com/');
    })

    test('User successfuly logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByPlaceholder('Username').fill('neon122');
        await page.getByPlaceholder('Password').fill('password');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('button', { name: 'Profile Options' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();
        await page.getByText('End of Session').isVisible();

      });

    
})
