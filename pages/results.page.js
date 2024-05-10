import { Browser, By, Key, until } from "selenium-webdriver";
import { expect } from "chai";
//import  { locators, data }  from "../resources/locators";



class ResultsPage {

    constructor(driver) {
        this.driver = driver;
        this.productGrid = driver.findElement(By.css("[class='products list items product-items']"));
        this.firstProduct = driver.findElement(By.css("[class='item product product-item']"))[0];
    }

    async verifyPageTitle(term){
        const actualTitle = await this.driver.getTitle();
        const res = expect(actualTitle).to.contain(`Search - ${term}`);
        return res;
        //await expect(this.pageTitle).to.contain(`Search results for: '${term}'`);
    }

    async verifyProductGrid(){
        await (this.productGrid).should('be.visible');
    }

    async goToPDP(){
        await this.firstProduct.click();
    }


}

export default ResultsPage;