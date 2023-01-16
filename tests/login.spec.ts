import { test, expect } from '@playwright/test';

test.describe('Betvision page', async () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('http://web-staging.aonewallet.com/');
    })

    test('Login with valid credentials', async ({ page }) => {

        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByPlaceholder('Username').fill('neon122');
        await page.getByPlaceholder('Password').fill('password');
        await page.getByRole('button', { name: 'Login' }).click();
      });

      test('Login with invalid credentials', async ({ page }) => {

        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByPlaceholder('Username').fill('invalidusername');
        await page.getByPlaceholder('Password').fill('invalidpassword');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.locator('#chakra-toast-manager-top').getByText('Your details have not been found. Please try again or click ‘Forgot Password’ to').isVisible();
      });

      test('Login with empty field', async ({ page }) => {
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByTestId('field-14-feedback').getByText('Username is required').isVisible();
        await page.getByTestId('field-15-feedback').getByText('Password is required').isVisible();
      });
})



