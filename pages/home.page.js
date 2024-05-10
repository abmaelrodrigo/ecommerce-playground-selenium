
import { Browser, By, Key, until } from "selenium-webdriver";


class HomePage {
    constructor(driver) {
        this.driver = driver;
        //this.searchInput = driver.findElement(By.id('search'));
        this.searchInput = driver.findElement(By.css("[name='search']"));
        // this.createAccount = page.getByText('Create an Account').first();
    }



    
    async searchForATerm(term) {
        await this.searchInput.click();
        await this.searchInput.sendKeys(term + Key.RETURN);
}
}
export default HomePage;