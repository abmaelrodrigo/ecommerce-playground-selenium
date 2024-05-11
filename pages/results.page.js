import { By } from "selenium-webdriver";
import { expect } from "chai";



class ResultsPage {

    constructor(driver) {
        this.driver = driver;
    }

    async verifyPageTitle(term){
        const actualTitle = await this.driver.getTitle();
        expect(actualTitle).to.contain(`Search - ${term}`)
    }

    async goToPDP(){
        await this.driver.findElement(By.css("[class='product-thumb']")).click();
    }


}

export default ResultsPage;