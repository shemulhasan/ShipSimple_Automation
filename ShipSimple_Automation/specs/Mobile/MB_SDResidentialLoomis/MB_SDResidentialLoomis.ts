import SDResidentialLoomis from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Loomis Domestic Shipment Residential', () => {

    const sDRL = new SDResidentialLoomis();
    const utilities = new Utilities();
 
    let loomis;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Domestic Shipment Residential  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Domestic Shipment Residential For Mobile Screen-------------------------

    it('Destination Address Loomis Domestic Shipment Residential For Mobile Screen', async () => {


        await utilities.MobileDestinationResidential();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Domestic Shipment Residential For Mobile Screen-------------------------

    it('Lets Build Your Shipment Loomis Domestic Shipment Residential For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis Domestic Shipment Residential For Mobile Screen-------------------------


    it('From Select Loomis Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(7000);

       


        if (expect(sDRL.seeMoreCourierButton).toHaveValueContaining('View More')) {

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
        console.log("----------------------------"+"For Mobile Screen Loomis Courier Not Found For Residential"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Review & Confirm Loomis Courier For Mobile Screen', async () => {

        if(expect(sDRL.courierName).toHaveText("Loomis Express")){
            const CourierName = await sDRL.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Mobile Screen For Residential Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Loomis Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Label Print & Download Loomis Domestic Shipment Residential For Mobile Screen', async () => {

       
        if(loomis=="loomisexpress"){
            await utilities.LabelPrintDownload();

        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen Loomis Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

       

    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Residential For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDRL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
