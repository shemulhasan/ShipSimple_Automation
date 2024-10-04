import PickUpDrops from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Pick Up Drops Off For Canada Post', () => {

    const pUD = new PickUpDrops();
    const utilities = new Utilities();
   


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- PickUp Drop Click For Canada Post CP-------------------------

    it('PickUp Drop Click For Canada Post CP', async () => {


        await pUD.pickUpandDropClick.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
    })

     //--------------------------------- PickUp Drop New P/U ans Schedule For Canada Post CP-------------------------

    it('PickUp Drop Schedule For Canada Post CP', async () => {


       

        await pUD.CanadaPostCPnewPU.click();
        await browser.takeScreenshot();
        
        await utilities.pickupDropSchedule();



      


      

        

    })


 //--------------------------------- PickUp date time select For Canada Post CP-------------------------

    it('PickUp date time select For Canada Post CP', async () => {

        await utilities.pickupDropDateSelect();
        
       



    })


    //--------------------------------- Pick Up Scheduled Done For Canada Post CP-------------------------

    it('Pick Up Scheduled Done For Canada Post CP', async () => {


        await pUD.schedulePickDone.click();
        await browser.pause(5000);
      

    })

   






})