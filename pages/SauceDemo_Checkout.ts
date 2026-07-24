import{Page,Locator, expect} from "@playwright/test"
export class SauceDemo_Checkout{
    
    page :Page
    First_Name : Locator
    Last_Name : Locator
    PostalCode : Locator
    Continue : Locator
    

    constructor (page:Page){
        this.page = page
        this.First_Name = page.locator('[id="first-name"]')
        this.Last_Name = page.locator('[id="last-name"]')
        this.PostalCode = page.locator('[id="postal-code"]')
        this.Continue = page.locator('[id="continue"]')
        

    }
public async SauceDemo_Checkout_Page(first_name:string,last_name:string,postal_code:string){
 await this.First_Name.fill(first_name);
 await this.Last_Name.fill(last_name);
 await this.PostalCode.fill(postal_code);
 await expect(this.Continue).toBeEnabled();
 await this.Continue.click();
 
}


}