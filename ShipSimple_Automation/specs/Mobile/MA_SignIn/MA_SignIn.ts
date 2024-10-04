//import SignInWebsite from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('signin Page load', () => {
    
    const utilities = new Utilities();
    it('signin button click', async () => {

        
       await browser.url(utilities.Signin_URL); 
       browser.setWindowSize(320, 844); 
    //    browser.setViewportSize({ width: 1024, height: 768 });
    //    await browser.maximizeWindow();
   
       await utilities.Signin();
  

        
        await browser.pause(5000);


    })


})