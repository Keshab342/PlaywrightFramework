import{Page,Locator}from "@playwright/test"
export class Button_page{
    page : Page
    double_click : Locator
    right_clickme : Locator
    clickme : Locator
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
    Full_name:Locator
    Email : Locator
    Current_adress : Locator
    permanent_address : Locator
    submit : Locator
    Download : Locator
    Upload : Locator
    drag_me : Locator
    drop_me : Locator
    

    constructor(page:Page){
        this.page = page
        this.double_click = page.locator('[id="doubleClickBtn"]')
        this.right_clickme = page.locator('[id="rightClickBtn"]')
        this.clickme = page.getByRole('button', { name: 'Click Me', exact: true })
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
        this.Full_name = page.getByRole('textbox',{name:'Full Name',exact:true})
        this.Email =page.getByRole('textbox',{name:'name@example.com',exact:true})
        this.Current_adress =page.getByRole('textbox',{name:'Current Address',exact:true})
        this.permanent_address = page.getByRole('textbox',{name:'',exact:true})
        this.submit = page.getByRole('button',{name:'Submit',exact:true})
        this.Download = page.getByRole('button',{name:'Download',exact:true})
        this.Upload = page.getByRole('button',{name:'Choose File',exact:true})
        this.drag_me = page.locator('[id="draggable"]')
        this.drop_me = page.locator('[id="simpleDropContainer"]').locator('[id="droppable"]')
        
        
    }

    public async button_actions(){
        await this.page.pause()
        await this.clickme .click()
        await this.double_click.dblclick()
        await this.right_clickme.click({button:'right'})
        await this.CurrentAddress.fill('f04,first floor,Bangalore,Karnataka')
    }


}