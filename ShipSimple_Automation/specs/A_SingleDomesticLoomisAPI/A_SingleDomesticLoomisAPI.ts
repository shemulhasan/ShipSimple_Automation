import SingleDomesticLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis API Courier Label Purchase Single Domestic', () => {

    const lPLC = new SingleDomesticLoomis();
    const utilities = new Utilities();
 
   let loomisExpress;


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis API all Single Domestic  ----------------

    ---------------------------------------------------------------------------- */


    // //--------------------------------- Destination Address Loomis API Single Domestic-------------------------

    it('Origin Destination Address Loomis API Single Domestic', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Single Domestic-------------------------

    it('Lets Build Your Shipment Loomis API Single Domestic', async () => {

        

      
        await browser.pause(4000);
        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis API Single Domestic -------------------------


    it('From Select Loomis API Single Domestic', async () => {

        // await browser.pause(7000);

       


        // if (expect(lPLC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

        //     await lPLC.seeMoreCourierButton.click();

        // }

       const loomisClassValue = await $("(//td[@class='loomis_api'])[1]");
        
       loomisExpress = await loomisClassValue.getAttribute("class");

        console.log("loomisAPIClassValue==========",loomisExpress);
         
       if(loomisExpress=="loomis_api"){  

        await lPLC.scrollAction.scrollIntoView();
        await lPLC.loomisAPI.click();
        await browser.pause(7000);
        await lPLC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis API Courier Not Found "+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis API Single Domestic----------------------------------

    it('Review & Confirm Loomis API Single Domestic', async () => {

        if(expect(lPLC.courierName).toHaveText("Loomis API")){
            const CourierName = await lPLC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis API Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis API courier Label Print & Download Single Domestic ----------------------------------

    it('Label Print & Download Loomis API Single Domestic', async () => {

        await browser.pause(5000);
       
        if(loomisExpress=="loomis_api"){

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis API Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

       


    })


     //------------------------------------------  Label print and Download Done Loomis API Single Domestic----------------------------------

     it(' Label print and Download Done Loomis API Single Domestic', async () => {

        await browser.pause(2000);
        await lPLC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Loomis API Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
