import { By } from "selenium-webdriver";
import { expect } from "chai";



class ProductDetailsPage {
    constructor(driver) {
        this.driver = driver;
    }

    async verifyPageTitle(term) {
        const actualTitle = await this.driver.getTitle();
        expect(actualTitle).to.contain(`${term}`);
     
    }

    async addProdToCart() {
        await this.driver.findElement(By.css('[data-id="216842"]')).click();

    }

    async verifyProductWasAdded() {
        const addedProdMessage = `Success: You have added\n${await this.driver.getTitle()}`;
        const element = await this.driver.findElement(By.className("toast-body"));
        const txt = await element.getText();

        expect(txt).to.contain(addedProdMessage);

    }



}
export default ProductDetailsPage;