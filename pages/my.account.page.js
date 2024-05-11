import { By } from "selenium-webdriver";
import { expect } from "chai";

const createdAccountSuccess = "Your Account Has Been Created!";


class MyAccountPage {

    constructor(driver) {
        this.driver = driver;
    }

    async verifyPageTitle(){
        const actualTitle = await this.driver.getTitle();
        expect(actualTitle).to.contain(createdAccountSuccess);
    }

    async verifyUserIsLoggedIn() {
        const actualTitle = await this.driver.findElement(By.css('[class="card-header h5"]')).getText();
        expect( await actualTitle).to.contain('My Account');
    }



}

export default MyAccountPage;