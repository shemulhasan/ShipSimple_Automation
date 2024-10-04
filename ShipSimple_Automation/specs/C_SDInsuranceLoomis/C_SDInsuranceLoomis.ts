import SDInsuranceLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis  Single Domestic Insurance', () => {

    const sDIL = new SDInsuranceLoomis();
    const utilities = new Utilities();
 
    let loomis;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Single Domestic Insurance  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Single Domestic Insurance-------------------------

    it('Destination Address Loomis Single Domestic Insurance', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Single Domestic Insurance-------------------------

    it('Lets Build Your Shipment Loomis Single Domestic Insurance', async () => {


        await utilities.LetsBuildYourShipmentWithInsurance();


    })

    //--------------------------------- Select Loomis Single Domestic Insurance -------------------------


    it('From Select Loomis Courier', async () => {

        await browser.pause(7000);

       


        if (expect(sDIL.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDIL.seeMoreCourierButton.click();

        }

        const loomisClass = await $("(//td[@class='loomisexpress'])[1]");
        
        loomis = await loomisClass.getAttribute('class');
         
       if(loomis=="loomisexpress"){  

        await sDIL.scrollAction.scrollIntoView();
        await sDIL.loomisCourier.click();
        await browser.pause(7000);
        await sDIL.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found For Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Single Domestic Insurance----------------------------------

    it('Review & Confirm Loomis Single Domestic Insurance', async () => {

        if(expect(sDIL.courierName).toHaveText("Loomis Express")){
            const CourierName = await sDIL.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Insurance Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Single Domestic Insurance----------------------------------

    it('Label Print & Download Loomis Single Domestic Insurance', async () => {

        await browser.pause(5000);
        
        if(loomis=="loomisexpress"){

            await utilities.LabelPrintDownload();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

      

    })


    
     //------------------------------------------  Label print and Download Done Domestic Shipment Insurance----------------------------------

     it(' Label print and Download Done Domestic Shipment Insurance', async () => {

        await browser.pause(2000);
        await sDIL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
