import{Page,Locator, chromium}from "@playwright/test"
export class Utils{
    page :Page
    
    constructor(page:Page){
        this.page=page
        
    }
    public async launch_WebPage(){
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        const page1 = await context.newPage()
    }
    public async Launch_url(url:string){
        await this.page.goto(url)
    }

    public async browserAction(){
        await this.page.pause()
        await this.page.bringToFront()
        await this.page.reload()
        await this.page.goBack()
        await this.page.goForward()
        await this.page.close()
    }
}