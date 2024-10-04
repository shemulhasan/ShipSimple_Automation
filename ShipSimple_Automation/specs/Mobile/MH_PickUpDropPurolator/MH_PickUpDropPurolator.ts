import PickUpDropsPurolator from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Pick Up Drops Off For Purolator', () => {

    const pDP = new PickUpDropsPurolator();
    const utilities = new Utilities();
   


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- PickUp Drop Click For Purolator-------------------------

    it('PickUp Drop Click For Purolator', async () => {


        await pDP.pickUpandDropClick.click();
        await browser.pause(2000);
    })

     //--------------------------------- PickUp Drop New P/U ans Schedule For Purolator-------------------------

    it('PickUp Drop For Purolator', async () => {

        await pDP.purolatornewPU.click();

        await utilities.pickupDropSchedule();

        

    })


 //--------------------------------- PickUp date time select For Purolator-------------------------

    it('PickUp date time select For Purolator', async () => {

        await utilities.pickupDropDateSelect();
        
       



    })


    //--------------------------------- Pick Up Scheduled Done for Purolator-------------------------

    it('Pick Up Scheduled Done For Purolator', async () => {


        await pDP.schedulePickDone.click();
        await browser.pause(5000);
      

    })

   






})