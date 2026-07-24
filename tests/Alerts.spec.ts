import {test,expect} from "@playwright/test"


test("@SampleTest01  Verify the login for Demo Website",async({page})=>{

     await page.goto('https://demoqa.com/alerts');
    // await page.goto('https://demoqa.com/alerts');
    page.once('dialog',async dialog=>{
        await dialog.accept("Keshab");
    })
    await page.locator('[id="alertButton"]').click()
    
})