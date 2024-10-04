import SDSignatureLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis Single Domestic Signature', () => {

    const sDSL = new SDSignatureLoomis();
    const utilities = new Utilities();
 
    let loomis;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Single Domestic Signature  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Single Domestic Signature-------------------------

    it('Destination Address Loomis Single Domestic Signature', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Single Domestic Signature-------------------------

    it('Lets Build Your Shipment Loomis Single Domestic Signature', async () => {


        await utilities.LetsBuildYourShipmentWithSignature();


    })

    //--------------------------------- Select Loomis Single Domestic Signature -------------------------


    it('From Select Loomis Single Domestic Signature', async () => {

        await browser.pause(7000);

       


        if (expect(sDSL.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDSL.seeMoreCourierButton.click();

        }

        const loomisClass = await $("(//td[@class='loomisexpress'])[1]");
        
        loomis = await loomisClass.getAttribute('class');
         
       if(loomis=="loomisexpress"){  

        await sDSL.scrollAction.scrollIntoView();
        await sDSL.loomisCourier.click();
        await browser.pause(7000);
        await sDSL.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found For Signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Single Domestic Signature----------------------------------

    it('Review & Confirm Loomis Single Domestic Signature', async () => {

        if(expect(sDSL.courierName).toHaveText("Loomis Express")){
            const CourierName = await sDSL.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Signature Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Single Domestic Signature----------------------------------

    it('Label Print & Download Loomis Single Domestic Signature', async () => {

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



    //------------------------------------------  Label print and Download Done Domestic Shipment signature----------------------------------

    it(' Label print and Download Done Domestic Shipment signature', async () => {

        await browser.pause(2000);
        await sDSL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})














})
