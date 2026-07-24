import{Page,Locator}from "@playwright/test"
export class Upload_Download{
    page : Page
    Download : Locator
    Upload : Locator
    BookStoreApplication : Locator
    

    constructor(page:Page){
        this.page = page
        this.Download = page.getByRole('button',{name:'Download',exact:true})
        this.Upload = page.getByRole('button',{name:'Choose File',exact:true})
        this.BookStoreApplication =page.getByText('Book Store Application')
        
        
        
    }

    public async File_Upload(filepath:string){
        await this.Upload.setInputFiles(filepath)
    }

public async File_Dpwnload(){
       //listener name is  .waitForEvent  which means it will wait for the download event to complete
       const downloadPromises = this.page.waitForEvent('download')
       await this.Download.click()
       //Converting synchronous to asynchronous
       const download = await downloadPromises

       await download.saveAs('downloads/samplefile.jpeg');
       await this.BookStoreApplication.scrollIntoViewIfNeeded()
    }
}