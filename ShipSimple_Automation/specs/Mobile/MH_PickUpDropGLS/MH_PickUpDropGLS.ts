import PickUpDrops from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Pick Up Drops Off For GLS', () => {

    const pUD = new PickUpDrops();
    const utilities = new Utilities();
   


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- PickUp Drop Click For GLS-------------------------

    it('PickUp Drop Click For GLS', async () => {


        await pUD.pickUpandDropClick.click();
        await browser.pause(2000);
    })

     //--------------------------------- PickUp Drop New P/U ans Schedule For GLS-------------------------

    it('PickUp Drop For GLS', async () => {

        await pUD.GLSnewPU.click();

        await utilities.pickupDropSchedule();

        

    })


 //--------------------------------- PickUp date time select For GLS-------------------------

    it('PickUp date time select For GLS', async () => {

        await utilities.pickupDropDateSelect();
        
       



    })


    //--------------------------------- Pick Up Scheduled Done -------------------------

    it('Pick Up Scheduled Done For GLS', async () => {


        await pUD.schedulePickDone.click();
        await browser.pause(5000);
      

    })

   






})