import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryList: Locator;
    // shoppingCartButton
    readonly shoppingCartButton: Locator;
    // checkoutButton
    readonly checkoutButton: Locator;
    // firstNameInput
    readonly firstNameInput: Locator;
    // lastNameInput
    readonly lastNameInput: Locator;
    // postalCodeInput
    readonly postalCodeInput: Locator;
    // continueButton
    readonly continueButton: Locator;
    // finishButton
    readonly finishButton: Locator;

    readonly checkoutCompleteContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryList = page.getByTestId("inventory-list").locator("div")
        // shoppingCartButton - by test id
        this.shoppingCartButton = page.getByTestId("shopping-cart-link")
        // checkoutButton - by text
        this.checkoutButton = page.getByTestId("checkout")
        // firstNameInput - by placeholder
        this.firstNameInput = page.getByTestId("firstName")
        // lastNameInput - by placeholder
        this.lastNameInput = page.getByTestId("lastName")
        // postalCodeInput - by placeholder
        this.postalCodeInput = page.getByTestId("postalCode")
        // continueButton - by text
        this.continueButton = page.getByTestId("continue")
        // finishButton - by text
        this.finishButton = page.getByTestId("finish")

        this.checkoutCompleteContainer = page.getByTestId("checkout-complete-container")
    }

    async addInventoryItemToCart(name: string){
        await this.inventoryList.filter({ hasText: name }).nth(1).getByText("Add to cart").click();
    }
    // clickShoppingCartButton
    // clickCheckoutButton
    // fillFirstNameInput
    async fillFirstNameInput(name: string){
        await this.firstNameInput.fill(name);
    }
    // fillLastNameInput
    async fillLastNameInput(name: string){
        await this.lastNameInput.fill(name);
    }
    // fillPostalCodeInput
    async fillPostalCodeInput(name: string){
        await this.postalCodeInput.fill(name);
    }
    // clickContinueButton
    // clickFinishButton
    async isCheckoutCompleteContainerContainText(text: string){
        await expect(this.checkoutCompleteContainer).toContainText(text)
    }
}