//require("chromedriver");
import { Builder, By } from "selenium-webdriver";
import HomePage from '../pages/home.page.js';
import ResultsPage from "../pages/results.page.js";

describe('Verify search, add product and create user test cases', function () {
    this.timeout(60000);
    let driver;
    var searchItems = ['htc']

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
        
    });

    after(async function () {
        if (driver) {
          await driver.quit();
        }
      });

    it('Verify the searching functionaly', async function () {
        

        const homepage = new HomePage(driver);
        const resultspage = new ResultsPage(driver);

        // Search for a term

        await homepage.searchForATerm(searchItems[0]);

        // Assertions to know user is on Results Page

        await resultspage.verifyPageTitle(searchItems[0]);
        //await resultspage.verifyProductGrid();
    });

    
    
})


