import{test,expect,chromium} from '@playwright/test'
import { Utils } from '../pages/Utils'
import { Button_page} from '../pages/button_page'
import { Automation_practise_form } from '../pages/Automation_Practise_form'
import { Upload_Download } from '../pages/Upload_Download'
import { TestNumberOfelemets } from '../pages/TestNumberOfElements'

test("@test Verify the page",async({page,context})=>{
     //const browser = await chromium.launch()
            //const context = await browser.newContext()
    const page1 = await context.newPage()
    const utilsobj = new Utils(page)
    const utilsobj1 = new Utils(page1)
    await utilsobj.Launch_url('https://facebook.com/')
    await utilsobj1.Launch_url('https://www.saucedemo.com/')
    await utilsobj.browserAction()
    await page.pause()
})

test("@VerifyButton Button Verification",async({page})=>{
const utilsobj = new Utils(page)
const buttonPageObj = new Button_page(page)
await utilsobj.Launch_url('https://demoqa.com/buttons')
await buttonPageObj.button_actions()
await page.pause()

})

test("@TestTextfeild Text Verification",async({page})=>{
    const utilsObj = new Utils(page)
    const buttonPageObj = new Button_page(page)
    await utilsObj.Launch_url('https://demoqa.com/droppable')
    // await buttonPageObj.First_Name.fill('Keshab')
    // await buttonPageObj.Last_Name.fill('Mohapatra')
    // await buttonPageObj.email_id.fill('mohapatramk31@gmail.com')
    // await buttonPageObj.gender_male.click()
    // await buttonPageObj.CurrentAddress.fill('f04,first floor,Bangalore,Karnataka')
    await page.pause()
    await buttonPageObj.drag_me.dragTo(buttonPageObj.drop_me);
    await page.pause()
})


test("@FormFillUp Personal Details Form",async({page})=>{
    const utilsObj = new Utils(page)
    const Automation_PractiseObj = new Automation_practise_form(page)
    await utilsObj.Launch_url('https://demoqa.com/automation-practice-form//')
    await Automation_PractiseObj.Fill_form("Keshab","Mohapatra","keshabm31@gmail.com","9739172342","male")
    await page.pause()
})

test("@Uploaddownload Upload-Download Action",async({page})=>{
    const utilsObj = new Utils(page)
    //const upload_download = new Upload_Download(page)
    await utilsObj.Launch_url('https://selectorshub.com/xpath-practice-page/')
    await page.pause();
    await page.frameLocator('[id="coming google"]').locator('[class="AB7Lab Id5V1"]').first().click();
    await page.pause();

    //await upload_download.File_Upload("tests/example.spec.ts")
    //await upload_download.File_Dpwnload()
    //await page.pause()

    
})
test("@Frames Testframe", async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/')
    //await page.pause();
    //await page.locator('iframe').contentFrame().nth(1).locator('[id="sampleHeading"]')
    await page.frameLocator('[src="https://vinothqaacademy.com/webtable/"]').locator('[id="nameInput"]').fill('Keshab');
    await page.waitForTimeout(3000);
})

test("@NestedIFrames test the Nested frame", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1');
    //await page.getByText('Iframe with in an Iframe').click();
    await page.waitForTimeout(2000);
    //await page.pause();
    //await page.locator('iframe').contentFrame().nth(1).locator('[id="sampleHeading"]')
    await page.frameLocator('[class="w-full h-96"]').frameLocator('[class="form_container"]').locator('[id="email"]').fill('Keshab');
    await page.waitForTimeout(3000);
})

test("@ReadLabel01 Verify numberl of elemets",async({page})=>{
    const utilsObj = new Utils(page)
    const testnumberofElemetsobj = new TestNumberOfelemets(page)
    await utilsObj.Launch_url('https://selectorshub.com/xpath-practice-page/')
    await testnumberofElemetsobj.Selectors_Hub_readLabel();
    await page.waitForTimeout(5000);

})

//import { test } from "@playwright/test";

test("iframe", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1");

  // Locate the outer iframe
  const frameElement = await page.locator('iframe[name="nested"]').elementHandle();
  const frame = await frameElement?.contentFrame();

  // Interact with the inner iframe textbox
  await frame?.fill('input[type="email"]', 'sureka@gmail.com');

  // Pause for inspection
  await page.pause();

});