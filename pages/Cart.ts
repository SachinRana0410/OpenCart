import {Page, test} from '@playwright/test'
import { HomePage } from './HomePage';
import { cartLocators } from '../locators/cartPage';

export class CartPage extends HomePage{
    
    readonly cartLocators ;

    constructor(page : Page){
        super(page);
        this.cartLocators = cartLocators(page);
    }
}