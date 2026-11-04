import{test,expect}from "@playwright/test"
import { Myntra } from "../pages/Myntra";   

test("@MyntraTest  Verify the product details",async({page})=>{

await page.goto('https://www.myntra.com/men-tshirts');
await page.waitForTimeout(5000);
const myntra = new Myntra(page);
const page2= await myntra.Productdetails(0);
const page3 = await myntra.Productdetails(1);

const myntra2 = new Myntra(page2);
await myntra2.selectSize("XS");
await page2.close();
const myntra3 = new Myntra(page3);
await myntra3.selectSize("L");
await page3.close();
    
})
   
    
