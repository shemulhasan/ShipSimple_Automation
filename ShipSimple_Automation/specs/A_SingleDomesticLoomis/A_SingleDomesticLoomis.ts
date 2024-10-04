import SingleDomesticLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis Courier Label Purchase Single Domestic', () => {

    const lPLC = new SingleDomesticLoomis();
    const utilities = new Utilities();
 
   // let loomis;
   let loomis: string ;


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis all Single Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Single Domestic-------------------------

    it('Destination Address Loomis Single Domestic', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Single Domestic-------------------------

    it('Lets Build Your Shipment Loomis Single Domestic', async () => {


        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis Single Domestic -------------------------


    it('From Select Loomis Single Domestic', async () => {
      
        // await browser.pause(7000);

       

        await  lPLC.seeMoreCourierButton.waitForExist();
        if (expect(lPLC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await lPLC.seeMoreCourierButton.click();

        }

        const loomisClass = await $("(//td[@class='loomis_api'])[1]");
       
        
        loomis = await loomisClass.getAttribute('class');
        
         
       if(loomis=="loomis_api"){  

        await lPLC.scrollAction.scrollIntoView();
        await lPLC.loomisCourier.click();
        await browser.pause(7000);
        await lPLC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found "+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Single Domestic----------------------------------

    it('Review & Confirm Loomis Single Domestic', async () => {

        if(expect(lPLC.courierName).toHaveText("Loomis")){
            const CourierName = await lPLC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Single Domestic ----------------------------------

    it('Label Print & Download Loomis Single Domestic', async () => {

        await browser.pause(5000);
       
        if(loomis=="loomis_api"){

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

       


    })


     //------------------------------------------  Label print and Download Done Single Domestic----------------------------------

     it(' Label print and Download Done Single Domestic', async () => {

        await browser.pause(2000);
        await lPLC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
