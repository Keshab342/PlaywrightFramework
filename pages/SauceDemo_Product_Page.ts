import { Locator, Page,expect } from "@playwright/test";
export class SauceDemo_Product_Page{

    page:Page
    Sauce_lab_Bagpack : Locator
    Sauce_lab_Light : Locator
    Sauce_labs_Bolt_Tshirt : Locator
    Cart : Locator
    Checkout : Locator
    Total_Item_InCart : Locator
    Remove_Item_T_Shirt : Locator

    constructor(page:Page){
    this.page = page
    this.Sauce_lab_Bagpack = page.locator('[id="add-to-cart-sauce-labs-backpack"]')
    this.Sauce_lab_Light = page.locator('[id="add-to-cart-sauce-labs-bike-light"]')
    this.Sauce_labs_Bolt_Tshirt =page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    this.Cart = page.locator('[class="shopping_cart_link"]')
    this.Checkout = page.locator('[id="checkout"]')
    this.Total_Item_InCart = page.locator('[class="shopping_cart_badge"]')
    this.Remove_Item_T_Shirt = page.locator('[id="remove-sauce-labs-bolt-t-shirt"]')
    }
  
public async Add_Products_to_the_cart(){
 await expect(this.Sauce_lab_Bagpack).toBeVisible();
 await expect(this.Sauce_lab_Bagpack).toBeEnabled();
 await this.Sauce_lab_Bagpack.click();
 await this.page.waitForTimeout(3000);
 await expect(this.Sauce_lab_Light).toBeVisible();
 await expect(this.Sauce_lab_Light).toBeEnabled();
 await this.Sauce_lab_Light.click();
 await this.page.waitForTimeout(3000);
 await expect (this.Sauce_labs_Bolt_Tshirt).toBeVisible();
 await expect (this.Sauce_labs_Bolt_Tshirt).toBeEnabled();
 await this.Sauce_labs_Bolt_Tshirt.click();
 await this.page.waitForTimeout(3000);
 await expect(this.Total_Item_InCart).toHaveText('3');
 await this.Cart.click();
 await this.page.waitForTimeout(3000);
 await expect(this.Total_Item_InCart).toBeEnabled();
 await expect(this.Total_Item_InCart).toBeVisible();
 await this.Remove_Item_T_Shirt.click();
 await expect(this.Total_Item_InCart).toHaveText('2');
 await this.page.waitForTimeout(3000);
 await expect(this.Checkout).toBeEnabled();
 await this.Checkout.click();
 await this.page.waitForTimeout(3000); 
}

}