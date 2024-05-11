//require("chromedriver");
import { Builder } from "selenium-webdriver";
import HomePage from '../pages/home.page.js';
import ResultsPage from "../pages/results.page.js";
import ProductDetailsPage from "../pages/product.details.page.js";
import CreateAccountPage from "../pages/create.account.page.js";
import MyAccountPage from "../pages/my.account.page.js";
import LoginPage from "../pages/login.page.js";

describe('Verify search, add product, create user and login test cases', function () {
  this.timeout(60000);
  let driver;
  var searchItems = ['iPod Touch', 'HTC']

  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

  });

  afterEach(async function () {
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

  });

  it('Verify user can add a product to cart', async function () {


    const homepage = new HomePage(driver);
    const resultspage = new ResultsPage(driver);
    const pdp = new ProductDetailsPage(driver);

    // Search for a term

    await homepage.searchForATerm(searchItems[1]);

    // Assertions to know user is on Results Page

    await resultspage.verifyPageTitle(searchItems[1]);

    // Click on the first product 

    await resultspage.goToPDP();

    // Assertion to know user is on Product Details Page

    await pdp.verifyPageTitle(searchItems[1]);

    // Add product to cart

    await pdp.addProdToCart();

    // Assertion to now if product was added

    await pdp.verifyProductWasAdded();


  });

  it('Verify user can create an account', async function () {


    const homepage = new HomePage(driver);
    const resultspage = new ResultsPage(driver);
    const createaccount = new CreateAccountPage(driver);
    const myaccount = new MyAccountPage(driver);

    // Create a new user

    await homepage.goToCreateAccount();
    await createaccount.creatAnAccount();

    // Assert new user is created

    await myaccount.verifyPageTitle();




  });

  it.only('Verify user can not login in with invalid credentials', async function () {


    const homepage = new HomePage(driver);
    const loginpage = new LoginPage(driver);
  
    // go to login page

    await homepage.goToLoginPage();

    // Assert new user is on login page

    //await loginpage.verifyUserIsOnLoginPage();

    await loginpage.enterUserCredentials();

    await loginpage.verifyUserIsNotLogedIn();




  });


})


