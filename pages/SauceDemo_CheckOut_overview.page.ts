import { Locator, Page,expect } from "@playwright/test";
export class Sauce_Demo_CheckoutOviewView_Page{

    page : Page
    Item01_Backpack : Locator
    Item02_BikeLight : Locator
    Item01_Price : Locator
    Item02_Price : Locator
    TaxAdded : Locator
    Item_total : Locator
    finish : Locator
    Conformation_Message : Locator
    
    constructor (page:Page){
        this.page = page
        this.Item01_Backpack = page.getByText('Sauce Labs Backpack')
        this.Item02_BikeLight = page.getByText('Sauce Labs Bike Light')
        this.Item01_Price = page.locator('[class="item_pricebar"]').locator('[data-test="inventory-item-price"]').first()
        this.Item02_Price = page.locator('[class="item_pricebar"]').locator('[data-test="inventory-item-price"]').nth(1)
        this.TaxAdded = page.locator('[class="summary_tax_label"]')
        this.Item_total = page.locator('[class="summary_subtotal_label"]')
        this.finish = page.locator('[id="finish"]')
        this.Conformation_Message = page.getByRole('heading',{name:'Thank you for your order!',exact:true})

    }
public async SauceDemo_CheckoutOverview_Page(){
  await expect(this.Item01_Backpack).toHaveText('Sauce Labs Backpack')
  await expect(this.Item02_BikeLight).toHaveText('Sauce Labs Bike Light')
  await expect (this.finish).toBeEnabled();
  await this.finish.click();
  await expect(this.Conformation_Message).toHaveText('Thank you for your order!');
}

}