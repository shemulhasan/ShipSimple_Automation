import PickUpDropsDHL from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Pick Up Drops Off For DHL', () => {

    const pDDHL = new PickUpDropsDHL();
    const utilities = new Utilities();
   


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- PickUp Drop Click For DHL-------------------------

    it('PickUp Drop Click For DHL', async () => {


        await pDDHL.pickUpandDropClick.click();
        await browser.pause(2000);
    })

     //--------------------------------- PickUp Drop New P/U ans Schedule For DHL-------------------------

    it('PickUp Drop Schedule For DHL', async () => {


       

        await pDDHL.DHLnewPU.click();

        await utilities.pickupDropSchedule();



        // if(pDDHL.CanadaPostCPSecondnewPU.getText()=="New P/U") {
            
            // console.log("===================================aaaa===========================",textCanadaPostSecond);
      
            // await pDDHL.cancel.scrollIntoView();
            // await pDDHL.schedul1.click();


        // }else{
        //     console.log("===================================aaaa=========else==================");
        //     await pDDHL.CanadaPostCPnewPU.click();

        // }




      

        

    })


 //--------------------------------- PickUp date time select For DHL-------------------------

    it('PickUp date time select For DHL', async () => {

        await utilities.pickupDropDateSelect();
        
       



    })


    //--------------------------------- Pick Up Scheduled Done For DHL-------------------------

    it('Pick Up Scheduled Done For DHL', async () => {


        await pDDHL.schedulePickDone.click();
        await browser.pause(5000);
      

    })

   






})