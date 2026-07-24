import{test,expect,chromium} from '@playwright/test'
import { Utils } from '../pages/Utils'
import { ANZ_Home_Loan_Calculator } from '../pages/ANZ_Home_Loan_Calculator'

test("@ANZ_HOME_LOAN_CAL Verify Anz home Loan Calculator",async({page})=>{
    const utilsObj = new Utils(page)
    const anzhomeloancalobj = new ANZ_Home_Loan_Calculator(page)
    await utilsObj.Launch_url('https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/')
    await anzhomeloancalobj.Your_Details;
    await anzhomeloancalobj.Your_Earnings('100,000','10,000')
    await anzhomeloancalobj.Your_Expense('2000','0','100','10,000')
    await page.waitForTimeout(5000);

})
test("@ReadLabel Verify numberl of elemets",async({page})=>{
    const utilsObj = new Utils(page)
    const anzhomeloancalobj = new ANZ_Home_Loan_Calculator(page)
    await utilsObj.Launch_url('https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/')
    await anzhomeloancalobj.ReadLabel('Your annual income (before tax)','1000');
     await anzhomeloancalobj.ReadLabel('Your annual other income (optional)','2000'); 
    await page.waitForTimeout(5000);

})