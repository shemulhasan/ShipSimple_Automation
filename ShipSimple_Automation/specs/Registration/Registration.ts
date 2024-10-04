import Registration from '../../pageobjects/Locators/Locators.js';
// import LabelPurchaseCanadaPostCourier from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';
describe('Registration field fill up', () => {
   
    const reg = new Registration();
    const utilities = new Utilities();

 

    before('Open the app',async()=>{

        await browser.url(utilities.Signup_URL);
        await browser.maximizeWindow();
        await browser.pause(3000);

    })


    it('Registration From ', async () => {
    
        const a1 = Math.floor(Math.random() * (9 - 1 +1)) + 1;
        const a2 = Math.floor(Math.random() * (19 - 10+1)) + 1;
        const a3 = Math.floor(Math.random() * (29 - 21+1)) + 1;
        await reg.businessShiping.click();
        await reg.companyName.setValue(`SS Simple${a1}${a2}${a3}`);
        await reg.email.setValue(`tamim542.prolific+${a1}${a2}${a3}@gmail.com`);
        await reg.password.setValue('123456789T#');
        await reg.howManyShipment.setValue(10);
        await reg.hearwhere.selectByIndex(6);
        await browser.pause(3000);
        await browser.takeScreenshot();
        await reg.signupButton.click();
        
        await browser.takeScreenshot();
        await browser.pause(3000);

        expect(reg.ConfirmSignup).toHaveValueContaining('Check your email to verify your account');
        const signupMessage = await reg.ConfirmSignup.getText();
        console.log("\n=============Signup Confiration====================== ",signupMessage,"\n");
       
        
    })


   

    });
