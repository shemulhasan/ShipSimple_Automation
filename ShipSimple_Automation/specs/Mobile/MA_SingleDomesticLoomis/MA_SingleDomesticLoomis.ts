import SingleDomesticLoomis from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Loomis Courier Label Purchase Single Domestic For Mobile Screen', () => {

    const lPLC = new SingleDomesticLoomis();
    const utilities = new Utilities();
 
    let loomis;


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        // await browser.maximizeWindow();

        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis all Single Domestic  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Single Domestic For Mobile Screen-------------------------

    it('Destination Address Loomis Single Domestic For Mobile Screen', async () => {


        await utilities.MobileDestination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Single Domestic For Mobile Screen-------------------------

    it('Lets Build Your Shipment Loomis Single Domestic For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis Single Domestic For Mobile Screen-------------------------


    it('From Select Loomis Single Domestic For Mobile Screen', async () => {

        await browser.pause(4000);

       


        await utilities.ViewMoreClick();

        const loomisClass = await $("(//td[@class='loomisexpress'])[1]");
        
        loomis = await loomisClass.getAttribute('class');
         
       if(loomis=="loomisexpress"){  

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



    //------------------------------------------ Review & Confirm Loomis Single Domestic For Mobile Screen----------------------------------

    it('Review & Confirm Loomis Single Domestic For Mobile Screen', async () => {

        if(expect(lPLC.courierName).toHaveText("Loomis Express")){
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

    //------------------------------------------Loomis courier Label Print & Download Single Domestic For Mobile Screen----------------------------------

    it('Label Print & Download Loomis Single Domestic For Mobile Screen', async () => {

       
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


     //------------------------------------------  Label print and Download Done Single Domestic For Mobile Screen----------------------------------

     it(' Label print and Download Done Single Domestic For Mobile Screen', async () => {

        await browser.pause(2000);
        await lPLC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
