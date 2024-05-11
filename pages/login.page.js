import { By } from "selenium-webdriver";
import { expect } from "chai";

import userData from "../pages/resources/fakeUserData.js"


const warningMessages = ["Warning: No match for E-Mail Address and/or Password.", "Warning: Your account has exceeded allowed number of login attempts."];


class LoginPage {

    constructor(driver) {
        this.driver = driver;
    }

    async enterUserCredentials() {

        await this.driver.findElement(By.id("input-email")).sendKeys(userData.data.email);
        await this.driver.findElement(By.id("input-password")).sendKeys(userData.data.password);
        await this.driver.findElement(By.css('input[value="Login"]')).click();

    }

    async verifyUserIsOnLoginPage() {
        const actualTitle = await this.driver.findElement(By.css('[class="breadcrumb-item active"]')).getText();
        expect(await actualTitle).to.contain('Login');
    }

    async verifyUserIsNotLogedIn() {
        const actualTitle = await this.driver.findElement(By.css('[class="alert alert-danger alert-dismissible"]')).getText();
        expect(await actualTitle).to.contain.oneOf(warningMessages);
    }





}

export default LoginPage;