//import SignInWebsite from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('signin Page load', () => {
    
    const utilities = new Utilities();
    it('signin button click', async () => {

        
       await browser.url(utilities.Signin_URL); 
       await browser.maximizeWindow();
   
       await utilities.Signin();
  

        
        await browser.pause(5000);


    })


})