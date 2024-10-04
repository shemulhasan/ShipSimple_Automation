//import SignInWebsite from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('signin Page Negative Testing', () => {
    
    const utilities = new Utilities();
    it('Signin Check with Invalid Input', async () => {

        
       await browser.url(utilities.Signin_URL); 
       await browser.maximizeWindow();
        
       const emailSign = $("//input[@id='email']");
       const passSign = $("//input[@id='password']");

   
       await emailSign.setValue("tamim542prolific@yop.com"); //tamim542.prolific+2@yopmail.com
       await passSign.setValue("123456789T#");
      

       await $("//span[contains(text(),'Login')]").click();
  

        
        await browser.pause(5000);


    })


})