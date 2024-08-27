import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/login";

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsernameInput('standard_user');
    await loginPage.fillPasswordInput('secret_sauce');
    await loginPage.clickLoginButton();
    await loginPage.page.waitForURL('**/inventory.html');
});

test('Login with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsernameInput('standard_user123');
    await loginPage.fillPasswordInput('secret_sauce');
    await loginPage.clickLoginButton();
    await loginPage.isErrorMessageContainerContainText('Username and password do not match any user in this service');
});

test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsernameInput('standard_user');
    await loginPage.fillPasswordInput('123');
    await loginPage.clickLoginButton();
    await loginPage.isErrorMessageContainerContainText('Username and password do not match any user in this service');
});

test('Login with invalid username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsernameInput('123');
    await loginPage.fillPasswordInput('123');
    await loginPage.clickLoginButton();
    await loginPage.isErrorMessageContainerContainText('Username and password do not match any user in this service');
});