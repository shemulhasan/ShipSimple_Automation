import SingleDomesticLoomis from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Loomis API Courier Label Purchase Single Domestic', () => {

    const lPLC = new SingleDomesticLoomis();
    const utilities = new Utilities();
 
    let loomisAPIClassValue;


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        // await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis API all Single Domestic  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    // //--------------------------------- Destination Address Loomis API Single Domestic For Mobile Screen-------------------------

    it('Destination Address Loomis API Single Domestic For Mobile Screen', async () => {


        await utilities.MobileDestination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Single Domestic For Mobile Screen-------------------------

    it('Lets Build Your Shipment Loomis API Single Domestic For Mobile Screen', async () => {

        

      
        await browser.pause(4000);
        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis API Single Domestic For Mobile Screen-------------------------


    it('From Select Loomis API Single Domestic For Mobile Screen', async () => {

        await browser.pause(7000);

       


        if (expect(lPLC.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await lPLC.seeMoreCourierButton.click();

        }

        const loomisAPIClass = await $("(//td[@class='loomis_api'])[1]");
        
        loomisAPIClassValue = await loomisAPIClass.getAttribute('class');
         
       if(loomisAPIClassValue=="loomis_api"){  

        await lPLC.scrollAction.scrollIntoView();
        await lPLC.loomisAPI.click();
        await browser.pause(7000);
        await lPLC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Loomis API Courier Not Found "+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis API Single Domestic For Mobile Screen----------------------------------

    it('Review & Confirm Loomis API Single Domestic For Mobile Screen', async () => {

        if(expect(lPLC.courierName).toHaveText("Loomis API")){
            const CourierName = await lPLC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Mobile Screen Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Loomis API Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis API courier Label Print & Download Single Domestic For Mobile Screen----------------------------------

    it('Label Print & Download Loomis API Single Domestic For Mobile Screen', async () => {

       
        if(loomisAPIClassValue=="loomis_api"){

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Loomis API Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

       


    })


     //------------------------------------------  Label print and Download Done Loomis API Single Domestic For Mobile Screen----------------------------------

     it(' Label print and Download Done Loomis API Single Domestic For Mobile Screen', async () => {

        await browser.pause(2000);
        await lPLC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Loomis API Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
