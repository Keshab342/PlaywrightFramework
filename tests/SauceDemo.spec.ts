//import{test,expect,chromium} from '@playwright/test'
import {test,expect} from '../fixture/fixture'
import { Utils } from '../pages/Utils';
import { SauceDemo_Checkout } from '../pages/SauceDemo_Checkout'
import { Sauce_Demo_CheckoutOviewView_Page } from '../pages/SauceDemo_CheckOut_overview.page'
//test.setTimeout(2000);

test("@NewSauceDemologinAddtoCart Verify user is able to login and add Product to the cart",async({page,loginPage,productPage})=>{
    const utilsObj = new Utils(page)
    const saucedemocheckoutpageobj = new SauceDemo_Checkout(page)
    const saucedemoCheckoutOverview = new Sauce_Demo_CheckoutOviewView_Page(page)
    await utilsObj.Launch_url(process.env.BASE_URL);
    await loginPage.SauceDemo_Login_Page(process.env.USERNAME01 , process.env.PASSWORD02);
    await productPage.Add_Products_to_the_cart();
    await saucedemocheckoutpageobj.SauceDemo_Checkout_Page("Keshab","Mohapatra","560069")
    await saucedemoCheckoutOverview.SauceDemo_CheckoutOverview_Page();
    await page.waitForTimeout(5000);
    await page.close();
    console.log(process.env.ENV);

})




