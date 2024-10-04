import SDSignatureLoomisAPI from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis API Single Domestic Signature', () => {

    const sDSL = new SDSignatureLoomisAPI();
    const utilities = new Utilities();
 
    let loomisAPIClassValue:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Single Domestic Signature  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis API Single Domestic Signature-------------------------

    it('Destination Address Loomis API Single Domestic Signature', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();
        
        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis API Single Domestic Signature-------------------------

    it('Lets Build Your Shipment Loomis API Single Domestic Signature', async () => {


        await utilities.LetsBuildYourShipmentWithSignature();


    })

    //--------------------------------- Select Loomis API Single Domestic Signature -------------------------


    it('From Select Loomis API Single Domestic Signature', async () => {

        // await browser.pause(7000);

       

        await sDSL.seeMoreCourierButton.waitForExist();
        if (expect(sDSL.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDSL.seeMoreCourierButton.click();

        }

        const loomisAPIClass = await $("(//td[@class='loomis_api'])[1]");
        
        loomisAPIClassValue = await loomisAPIClass.getAttribute('class');
         
       if(loomisAPIClassValue=="loomis_api"){  

        await sDSL.scrollAction.scrollIntoView();
        await sDSL.loomisAPI.click();
        await browser.pause(7000);
        await sDSL.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis API Courier Not Found For Signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Single Domestic Signature----------------------------------

    it('Review & Confirm Loomis Single Domestic Signature', async () => {

        if(expect(sDSL.courierName).toHaveText("Loomis API")){
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
        
        if(loomisAPIClassValue=="loomis_api"){
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
