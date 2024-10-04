import PickUpDropsLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis for Pick Up Drops Off', () => {

    const pDL = new PickUpDropsLoomis();
    const utilities = new Utilities();
   


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- PickUp Drop Click For Loomis-------------------------

    it('PickUp Drop Click For Loomis', async () => {


        await pDL.pickUpandDropClick.click();
        await browser.pause(2000);
    })

     //--------------------------------- PickUp Drop New P/U ans Schedule For Loomis-------------------------

    it('PickUp Drop For Loomis', async () => {

        await pDL.loomisnewPU.click();

      
        await utilities.pickupDropSchedule();

        

    })


 //--------------------------------- PickUp date time select For Loomis-------------------------

    it('PickUp date time select For Loomis', async () => {

        await utilities.pickupDropDateSelect();
        
       



    })


    //--------------------------------- Pick Up Scheduled Done -------------------------

    it('Pick Up Scheduled Done For Loomis', async () => {


        await pDL.schedulePickDone.click();
        await browser.pause(5000);
      

    })

   






})