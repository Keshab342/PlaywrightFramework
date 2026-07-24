import{Page,Locator, expect} from "@playwright/test"
export class Login_PageSauceDemo{
    
    page :Page
    username : Locator
    password : Locator
    Login_button : Locator
    App_Logo : Locator

    constructor (page:Page){
        this.page = page
        this.username = page.locator('[id="user-name"]')
        this.password = page.locator('[id="password"]')
        this.Login_button = page.locator('[id="login-button"]')
        this.App_Logo = page.locator('[class="app_logo"]')

    }
public async SauceDemo_Login_Page(User_Name:string,Pass_word:string,){
 await this.username.fill(User_Name);
 await this.page.screenshot({path:'screenshots/sample1.jpeg'})
 await this.password.fill(Pass_word);
 await expect(this.Login_button).toBeVisible()
 await expect.soft(this.Login_button).toBeVisible()
 //await expect(this.Login_button).not.toBeVisible()
 await this.Login_button.click();
 await expect(this.App_Logo).toBeVisible()

}


}