import{Page,Locator}from "@playwright/test"
export class Automation_practise_form{
    page : Page
    
    First_Name : Locator
    Last_Name : Locator
    email_id : Locator
    Mobile_number : Locator
    Dob : Locator
    Subjects : Locator
    gender_male:Locator
    gender_female : Locator
    gender_other : Locator
    Hobbies1 : Locator
    Hobbies2 : Locator
    Hobbies3 : Locator
    Picture : Locator
    CurrentAddress:Locator
    Select_state:Locator
    Select_City:Locator
    
    

    constructor(page:Page){
        this.page = page
        //New Locators from https://demoqa.com/automation-practice-form//
        this.First_Name = page.locator('[id="firstName"]')
        this.Last_Name = page.locator('[id="lastName"]')
        this.email_id = page.locator('[id="userEmail"]')
        this.gender_male = page.getByRole('radio', { name: 'Male',exact:true })
        this.gender_female = page.getByRole('radio', { name: 'Female',exact:true })
        this.gender_other = page.getByRole('radio', { name: 'Other',exact:true })
        this.Mobile_number = page.getByRole('textbox', { name: 'Mobile Number' })
        this.Dob = page.locator('[class="react-datepicker-wrapper"] [id="dateOfBirthInput"]')
        this.Subjects = page.getByText('Subjects')
        this.Hobbies1 = page. getByText('Sports')
        this.Hobbies2 = page. getByText('Reading')
        this.Hobbies3 = page. getByText('Music')
        this.Picture = page.getByRole('button',{name:'Choose File',exact:true})
        this.CurrentAddress = page.getByRole('textbox', {name:'Current Address',exact:true})
        this.Select_state = page.getByText('Select State')
        this.Select_City =page.getByText('Select City')
    }


public async Fill_form(fname:string,lname:string,emailId:string,mobilenumber:string,gender:string){
 await this.First_Name.fill(fname);
 await this.Last_Name.fill(lname);
 await this.email_id.fill(emailId);
 await this.Mobile_number.fill(mobilenumber);
 await this.Mobile_number.clear()
 await this.email_id.click()
 await this.email_id.press("Control+A")
 await this.email_id.press("Control+C")
 await this.Mobile_number.click()
 await this.Mobile_number.press("Control+V")
 let value = await this.First_Name.inputValue()
 console.log(value)
 await this.page.pause()
 if(gender=="male"){
  await this.gender_male.check()
 }
 else if(gender=="female"){
 await this.gender_female.click()
 }
else {
    await this.gender_other.click()
}
}


}