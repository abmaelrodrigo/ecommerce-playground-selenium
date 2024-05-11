import {  By, Key } from "selenium-webdriver";


class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = driver.findElement(By.css("[name='search']"));
    }




    async searchForATerm(term) {
        await this.searchInput.click();
        await this.searchInput.sendKeys(term + Key.RETURN);
    }

    async goToCreateAccount() {
        await this.driver.get('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        
    }

    async goToLoginPage() {
        await this.driver.get('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
        
    }

}
export default HomePage;