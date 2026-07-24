import{Page,Locator}from "@playwright/test"
export class Login_page{
    page :Page
    username :Locator
    password :Locator
    login_Button : Locator
    constructor(page:Page){
        this.page=page
        this.username = page.locator('[name="user-name"]')
        this.password = page.locator('[name="password"]')
        this.login_Button =page.locator('[name="login-button"]')
    }
}