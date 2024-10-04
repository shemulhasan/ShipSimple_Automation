import SDResidentialLoomisAPI from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Loomis API Domestic Shipment Residential', () => {

    const sDRLA = new SDResidentialLoomisAPI();
    const utilities = new Utilities();
 
    let loomisAPIClassValue;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis API Domestic Shipment Residential  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis API Domestic Shipment Residential For Mobile Screen-------------------------

    it('Destination Address Loomis API Domestic Shipment Residential For Mobile Screen', async () => {


        await utilities.MobileDestinationResidential();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis API Domestic Shipment Residential For Mobile Screen-------------------------

    it('Lets Build Your Shipment Loomis API Domestic Shipment Residential For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select Loomis API Domestic Shipment Residential For Mobile Screen-------------------------


    it('From Select Loomis API Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(7000);

       


        if (expect(sDRLA.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDRLA.seeMoreCourierButton.click();

        }

        const loomisAPIClass = await $("(//td[@class='loomis_api'])[1]");
        
        loomisAPIClassValue = await loomisAPIClass.getAttribute('class');
         
       if(loomisAPIClassValue=="loomis_api"){  

        await sDRLA.scrollAction.scrollIntoView();
        await sDRLA.loomisAPI.click();
        await browser.pause(7000);
        await sDRLA.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Loomis API Courier Not Found For Residential"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis API Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Review & Confirm Loomis API Courier For Mobile Screen', async () => {

        if(expect(sDRLA.courierName).toHaveText("Loomis API")){
            const CourierName = await sDRLA.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Mobile Screen For Residential Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Loomis API Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis API courier Label Print & Download Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Label Print & Download Loomis API Domestic Shipment Residential For Mobile Screen', async () => {

       
        if(loomisAPIClassValue=="loomis_api"){
            await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen Loomis API Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

       


    })


     //------------------------------------------  Label print and Download Done Loomis API Domestic Shipment Residential For Mobile Screen----------------------------------

     it(' Label print and Download Done Loomis API Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDRLA.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
