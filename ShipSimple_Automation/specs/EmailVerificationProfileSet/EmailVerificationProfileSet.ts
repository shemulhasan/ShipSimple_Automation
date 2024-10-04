import EmailVerificationProfileSet from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';
describe('Email Verification Profile Set', () => {
   
    const eVP = new EmailVerificationProfileSet();
    const utilities = new Utilities();


    before('Open the app',async()=>{

        await browser.url("https://uat.shipsimple.app/verifyAccount/CTUuMTrProwp4cye4KoW0U826eXHR0Kibr6Txpk4b2ASyKBYNzciKIzs0Bbt86sm");
        await browser.maximizeWindow();
        await browser.pause(3000);

    })


    it('Profile Set', async () => {
    
        await eVP.firstNameDestination.setValue("Tamim");
        await eVP.lastNameDestination.setValue("Buiyan");
        


        await eVP.selectCountryDestination.selectByIndex(1);
        await eVP.clickSelectStreetDestination.setValue("4 Brant Rd");
        await browser.pause(7000);
        await browser.takeScreenshot();
        await eVP.selectstreetAddress.click();
        await browser.pause(4000);

        
        await eVP.unitNumberProfile.setValue("10");
        await eVP.phoneNumberProfile.setValue("5767435675");
       
       

        await browser.pause(5000);
        await eVP.nextButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(3000);

        await eVP.noThanksClick.click();
        await browser.pause(3000);

       
        
    })



   

    });
