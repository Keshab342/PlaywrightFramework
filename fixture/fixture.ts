import{test as base,expect, Page} from "@playwright/test"
import { Login_PageSauceDemo } from "../pages/Login_PageSauceDemo";
import { SauceDemo_Product_Page } from "../pages/SauceDemo_Product_Page";

type myfixture={
    loginPage:Login_PageSauceDemo
    productPage:SauceDemo_Product_Page
    NoPageFixture : Page
}

export const test = base.extend<myfixture>({
    loginPage:async({page},use)=>{
    const loginPage = new Login_PageSauceDemo(page);
    await use (loginPage)
    },

    productPage:async({page},use)=>{
    const productPage = new SauceDemo_Product_Page(page);
    await use (productPage)
    await page.close();
},
    NoPageFixture:async({page},use)=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[id="user-name"]').fill('Secret_sauce');
    await page.locator('[id="password"]').fill('Password');
    await use (page)
    await page.close();
    },
})

export {expect}