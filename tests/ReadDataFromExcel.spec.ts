import { test, expect } from '@playwright/test';
import { Utils } from '../pages/Utils';
import { Login_PageSauceDemo } from '../pages/Login_PageSauceDemo';
import { SauceDemo_Product_Page } from '../pages/SauceDemo_Product_Page';
import { SauceDemo_Checkout } from '../pages/SauceDemo_Checkout';
import { readExcel } from '../pages/Xlreader';
const users:any=readExcel("pages/Data/User_Data.xlsx")

const role = process.env.ROLE || "locked_out_user";
let filteredUsers = users;

if (role !== "all") {
  const usernames = role.split(",").map(r => r.trim());
  filteredUsers = users.filter(
    (user: any) => usernames.includes(user.User_Name)
  );
}

for (const user of filteredUsers) {
  test(`@SauceDemologinAddtoCart Verify user ${user.User_Name} can login and add product to cart`, async ({ page }) => {
    const utilsObj = new Utils(page);
    const loginObj = new Login_PageSauceDemo(page);
    const productPageObj = new SauceDemo_Product_Page(page);
    const checkoutPageObj = new SauceDemo_Checkout(page);
    

    await utilsObj.Launch_url('https://www.saucedemo.com/');
    await loginObj.SauceDemo_Login_Page(user.User_Name, user.Password);

  

    await page.waitForTimeout(5000);
  });
}
