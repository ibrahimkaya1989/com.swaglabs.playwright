import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/login";
import {InventoryPage} from "../pages/inventory";

test('Add 2 item to shopping cart and checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page)
    await loginPage.goto();
    await loginPage.fillUsernameInput('standard_user');
    await loginPage.fillPasswordInput('secret_sauce')
    await loginPage.clickLoginButton()
    await inventoryPage.addInventoryItemToCart('Sauce Labs Backpack')
    // Add inventory item Sauce Labs Bike Light to cart
    await inventoryPage.addInventoryItemToCart('Sauce Labs Bike Light')
    // Add inventory item Sauce Labs Bolt T-Shirt to cart
    await inventoryPage.addInventoryItemToCart('Sauce Labs Bolt T-Shirt')
    // Click shopping cart button
    await inventoryPage.shoppingCartButton.click();
    // Click checkout button
    await inventoryPage.checkoutButton.click();
    // Fill firstname input
    await inventoryPage.fillFirstNameInput('Ibrahim');
    // Fill lastname input
    await inventoryPage.fillLastNameInput('Kaya');
    // Fill postal code input
    await inventoryPage.fillPostalCodeInput('34000');
    // Click continue button
    await inventoryPage.continueButton.click();
    // Click finish button
    await inventoryPage.finishButton.click();

    await inventoryPage.isCheckoutCompleteContainerContainText("Thank you for your order")
});
