import {Page, test} from '@playwright/test'
import { HomePage } from './HomePage';
import { cartLocators } from '../locators/cartPage';

export class CartPage extends HomePage{
    
    readonly cartLocators ;

    constructor(page : Page){
        super(page);
        this.cartLocators = cartLocators(page);
    }

    async isRemoveButtonVisible(){
        const removeButton = this.cartLocators.cartRemoveButton;
        return await removeButton.isVisible();
    }

    async removeCartItems() {
        const removeButton = this.cartLocators.cartRemoveButton;
        await removeButton.click();
    }

    async getEmptyCartMessage() {
        const emptyCartMessage = this.cartLocators.cartBlackButtonEmptyMessage;
        await emptyCartMessage.waitFor();
        return await emptyCartMessage.innerText();
    }

}