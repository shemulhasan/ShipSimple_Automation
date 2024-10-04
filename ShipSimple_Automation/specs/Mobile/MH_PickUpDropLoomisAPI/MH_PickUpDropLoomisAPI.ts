import PickUpDropsLoomisAPI from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('LoomisAPI for Pick Up Drops Off ', () => {

    const pDLA = new PickUpDropsLoomisAPI();
    const utilities = new Utilities();
   


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- PickUp Drop Click For LoomisAPI-------------------------

    it('PickUp Drop Click For LoomisAPI', async () => {


        await pDLA.pickUpandDropClick.click();
        await browser.pause(2000);

        // browser.execute(() => {
        //     // Scroll to the top of the page
        //     window.scrollTo(500, 0);
        // })
        // await pDLA.loomisAPInewPU.click();
        // await browser.pause(2000);
        // const LoomisNewPU =await pDLA.loomisAPInewPU.getText();
        // console.log("LoomisNewPU====    =======================", LoomisNewPU);

        // await utilities.pickupDropSchedule();

        // await utilities.pickupDropDateSelect();


        // await pDLA.schedulePickDone.click();
        // await browser.pause(3000);
    })

     //--------------------------------- PickUp Drop New P/U ans Schedule For LoomisAPI-------------------------

    it('PickUp Drop For LoomisAPI', async () => {

        await pDLA.loomisAPInewPU.click();
        await browser.pause(2000);
        const LoomisNewPU =await pDLA.loomisAPInewPU.getText();
        console.log("LoomisNewPU====    =======================", LoomisNewPU);

        await utilities.pickupDropSchedule();

        

    })


 //--------------------------------- PickUp date time select For LoomisAPI-------------------------

    it('PickUp date time select For LoomisAPI', async () => {

        await utilities.pickupDropDateSelect();
        
       



    })


    //--------------------------------- Pick Up Scheduled Done for LoomisAPI-------------------------

    it('Pick Up Scheduled Done For LoomisAPI', async () => {


        await pDLA.schedulePickDone.click();
        await browser.pause(3000);
      

    })

   

    it('Pick Up Scheduled Done For LoomisAPI', async () => {


        const check_dash = $('//*[@id="__next"]/div[1]/div[3]/div/img');
        await check_dash.click();
        await browser.pause(3000);

    })

   






})