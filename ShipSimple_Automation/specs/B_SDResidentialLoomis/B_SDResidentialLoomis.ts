import SDResidentialLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis Domestic Shipment Residential', () => {

    const sDRL = new SDResidentialLoomis();
    const utilities = new Utilities();
 
    // let loomis;
    let loomis: string ;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Domestic Shipment Residential  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Domestic Shipment Residential-------------------------

    it('Origin Destination Address Loomis Domestic Shipment Residential', async () => {

        await utilities.OriginAddress();
        await utilities.DestinationResidential();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Domestic Shipment Residential-------------------------

    it('Lets Build Your Shipment Loomis Domestic Shipment Residential', async () => {


        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis Domestic Shipment Residential -------------------------


    it('From Select Loomis Domestic Shipment Residential', async () => {

        // await browser.pause(7000);

       

        await sDRL.seeMoreCourierButton.waitForExist();
        if (expect(sDRL.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDRL.seeMoreCourierButton.click();

        }

        const loomisClass = await $("(//td[@class='loomisexpress'])[1]");
        
        loomis = await loomisClass.getAttribute('class');
         
       if(loomis=="loomisexpress"){  

        await sDRL.scrollAction.scrollIntoView();
        await sDRL.loomisCourier.click();
        await browser.pause(7000);
        await sDRL.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found For Residential"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Domestic Shipment Residential----------------------------------

    it('Review & Confirm Loomis Courier', async () => {

        if(expect(sDRL.courierName).toHaveText("Loomis Express")){
            const CourierName = await sDRL.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Residential Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Domestic Shipment Residential----------------------------------

    it('Label Print & Download Loomis Domestic Shipment Residential', async () => {

        await browser.pause(5000);
       
        if(loomis=="loomisexpress"){
            await utilities.LabelPrintDownload();

        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "Loomis Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

       

    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Residential----------------------------------

     it(' Label print and Download Done Domestic Shipment Residential', async () => {

        await browser.pause(2000);
        await sDRL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
