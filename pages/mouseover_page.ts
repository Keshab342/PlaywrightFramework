import{Page,Locator} from "@playwright/test"
export class mouseover_page{
    page:Page
    clickme :Locator
    link_Button:Locator
    constructor(page:Page){
     this.page =page
     this.clickme =page.getByText('Click me')
     this.link_Button =page.getByText('Link Button')


    }
}