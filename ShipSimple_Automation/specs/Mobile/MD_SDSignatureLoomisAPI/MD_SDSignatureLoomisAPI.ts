import SDSignatureLoomisAPI from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Loomis API Single Domestic Signature', () => {

    const sDSL = new SDSignatureLoomisAPI();
    const utilities = new Utilities();
 
    let loomisAPIClassValue;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Single Domestic Signature For Mobile Screen ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis API Single Domestic Signature For Mobile Screen-------------------------

    it('Destination Address Loomis API Single Domestic Signature For Mobile Screen', async () => {


        await utilities.MobileDestination();
        
        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis API Single Domestic Signature For Mobile Screen-------------------------

    it('Lets Build Your Shipment Loomis API Single Domestic Signature For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipmentWithSignature();


    })

    //--------------------------------- Select Loomis API Single Domestic Signature For Mobile Screen-------------------------


    it('From Select Loomis API Single Domestic Signature For Mobile Screen', async () => {

        await browser.pause(7000);

       


        if (expect(sDSL.seeMoreCourierButton).toHaveValueContaining('View More')) {

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
        console.log("----------------------------"+"For Mobile Screen Loomis API Courier Not Found For Signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Single Domestic Signature For Mobile Screen----------------------------------

    it('Review & Confirm Loomis Single Domestic Signature For Mobile Screen', async () => {

        if(expect(sDSL.courierName).toHaveText("Loomis API")){
            const CourierName = await sDSL.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Mobile Screen For Signature Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Loomis Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Single Domestic Signature----------------------------------

    it('Label Print & Download Loomis Single Domestic Signature For Mobile Screen', async () => {

       
        if(loomisAPIClassValue=="loomis_api"){
            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Loomis Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

      


    })



    //------------------------------------------  Label print and Download Done Domestic Shipment signature For Mobile Screen----------------------------------

    it(' Label print and Download Done Domestic Shipment signature For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDSL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})














})
