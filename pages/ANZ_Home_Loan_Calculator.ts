import { Page,Locator, expect} from "@playwright/test";
export class ANZ_Home_Loan_Calculator{
    //your details
    page:Page
    Application_Type: Locator
    Number_of_Dependants : Locator
    Property_Like_To_Buy : Locator
    
    //your earnings
    Annual_Income_BeforeTax : Locator
    Annual_Income : Locator
    
    //your Expenses
    Monthly_living_expense : Locator
    Home_Loan_Monthly_Repayment : Locator
    Other_Loan_Monthly_Repayment : Locator
    Other_Monthly_Commitment : Locator
    Total_credit_Card_Limits : Locator

    //Borrow Button
    How_Much_I_Could_Borrow : Locator
    Borrow_result_amount : Locator

    //Start Over
    Start_Over_btn : Locator

    your_annual_income01 : Locator
    Income_before_TAX : Locator

    constructor(page:Page){

        //your details

        this.page =page
        this.Application_Type = page.locator('[id="application_type_single"]')
        this.Number_of_Dependants = page.getByRole('option',{name:'0'})
        this.Property_Like_To_Buy = page.getByText('Home to live in')
        
        // your earnings

        this.Annual_Income_BeforeTax = page.locator('[class="input__wrapper"]').locator('[type="text"]').nth(1)
        this.Annual_Income = page.locator('[class="input__wrapper"]').locator('[type="text"]').nth(2)
        
        //your Expenses

        this.Monthly_living_expense = page.locator('[class="input__wrapper"]').locator('[type="text"]').nth(5)
        this.Home_Loan_Monthly_Repayment = page.locator('[class="input__wrapper"]').locator('[type="text"]').nth(6)
        this.Other_Loan_Monthly_Repayment = page.locator('[class="input__wrapper"]').locator('[type="text"]').nth(7)
        this.Other_Monthly_Commitment = page.locator('[class="input__wrapper"]').locator('[type="text"]').nth(8)
        this.Total_credit_Card_Limits = page.locator('[class="input__wrapper"]').locator('[type="text"]').last()
        this.How_Much_I_Could_Borrow = page.locator('[id="btnBorrowCalculater"]')
        this.Borrow_result_amount = page.locator('[id="borrowResultTextAmount"]')
        this.Start_Over_btn = page.getByRole('button',{name:'Start over',exact:true})
        this.your_annual_income01 = page.locator('[class="borrow__question__heading"]')
        this.Income_before_TAX = page.locator('[class="borrow__question"]')

    }
   public async Your_Details(numberOF_Dependants:string){
    await this.Application_Type.click();
    await this.Number_of_Dependants.click();
    await expect(this.Application_Type).toBeVisible();
    await expect(this.Number_of_Dependants).toBeEnabled();
    await this.Property_Like_To_Buy.click();
    await expect(this.Property_Like_To_Buy).toBeVisible();
   }

public async Your_Earnings(annual_income_before_tax:string , annual_income:string){
    await this.Annual_Income_BeforeTax.fill(annual_income_before_tax);
    await expect(this.Annual_Income_BeforeTax).toBeEditable();
    await this.Annual_Income.fill(annual_income);
    await expect(this.Annual_Income).toBeEditable();

  }

  public async Your_Expense(livingExp:string,homeLoan:string,otherLoan:string,creditLimit:string){
    await this.Monthly_living_expense.fill(livingExp);
    await expect(this.Monthly_living_expense).toBeEditable();
    await this.Home_Loan_Monthly_Repayment.fill(homeLoan);
    await expect(this.Home_Loan_Monthly_Repayment).toBeEditable();
    await this.Other_Monthly_Commitment.fill(otherLoan);
    await expect(this.Other_Monthly_Commitment).toBeEditable();
    await this.Total_credit_Card_Limits.fill(creditLimit);
    await expect(this.Total_credit_Card_Limits).toBeEditable();
    await this.How_Much_I_Could_Borrow.click();
    await expect (this.How_Much_I_Could_Borrow).toBeEnabled();
    await expect (this.Borrow_result_amount).toHaveText('$495,000');
    await this.Start_Over_btn.click()
    await expect (this.Start_Over_btn).toBeEnabled();

  }
  public async ReadLabel(label_name01:string,value:string){
    let count1 = await this.Income_before_TAX.count();
    console.log(count1)
    for(let i =0;i<count1;i++){
     let label_name = await this.Income_before_TAX.nth(i).textContent()
     console.log(label_name);
     if(label_name?.includes(label_name01)){
     await this.Income_before_TAX.nth(i).locator('input').fill(value)
     await this.page.pause();
     
    }
    
    }
    
    }

  }
