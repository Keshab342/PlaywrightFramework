import{Page,Locator}from "@playwright/test"
export class Myntra{
    page :Page
    product_details :Locator
    Size_details :Locator

    constructor(page:Page){
        this.page=page
        this.product_details = page.locator('[class="product-productMetaInfo"]');
        this.Size_details = page.locator('[class="size-buttons-unified-size"]');
    
    }

public async Productdetails(Position:number){
let newpagepromise = this.page.waitForEvent('popup');
await this.product_details.nth(Position).click();
await this.page.waitForTimeout(5000);
let newpage = await newpagepromise;
return newpage;
}

public async selectSize(Size:string){
await this.Size_details.filter({hasText:Size}).click();
await this.page.pause();
}

}
