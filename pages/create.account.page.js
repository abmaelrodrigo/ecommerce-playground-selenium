import { By } from "selenium-webdriver";
import fetch from 'node-fetch'


class CreateAccountPage {

    constructor(driver) {
        this.driver = driver;
    }

    async creatAnAccount() {

        const response = await fetch("https://randomuser.me/api/");
        const responseBody = await response.json();
        
        var userFirstName = responseBody.results[0].name.first;
        var userLastName = responseBody.results[0].name.last;
        var userEmail= responseBody.results[0].email;
        var userPhone = responseBody.results[0].phone;
        var userPassword = responseBody.results[0].login.password + responseBody.results[0].name.first + '#'


        await this.driver.findElement(By.id("input-firstname")).sendKeys(userFirstName);
        await this.driver.findElement(By.id("input-lastname")).sendKeys(userLastName);
        await this.driver.findElement(By.id("input-email")).sendKeys(userEmail);
        await this.driver.findElement(By.id("input-telephone")).sendKeys(userPhone);
        await this.driver.findElement(By.id("input-password")).sendKeys(userPassword);
        await this.driver.findElement(By.id("input-confirm")).sendKeys(userPassword);

        await this.driver.findElement(By.css('[class="custom-control custom-checkbox custom-control-inline"]')).click();
        await this.driver.findElement(By.css('[class="btn btn-primary"]')).click();
        
        

    }




}

export default CreateAccountPage;