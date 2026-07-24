import{Page,Locator, expect} from "@playwright/test"
export class TestNumberOfelemets{
    
    page :Page
    UserDetailsForm : Locator

    constructor (page:Page){
        this.page = page
        this.UserDetailsForm = page.locator('[class="userform"]')
    }
public async Selectors_Hub_readLabel(){
 
    let totalelemetsInform = await this.UserDetailsForm.count();
    console.log(totalelemetsInform);


}
}