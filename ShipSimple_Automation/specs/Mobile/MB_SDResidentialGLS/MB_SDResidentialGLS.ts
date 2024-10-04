
import SDResidentialGLS from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen GLS Domestic Shipment Residential', () => {

    const sDRG = new SDResidentialGLS();
    const utilities = new Utilities();

    let GLS;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS Domestic Shipment Residential For Mobile Screen ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Domestic Shipment Residential For Mobile Screen-------------------------

    it('Destination Address GLS Domestic Shipment Residential For Mobile Screen', async () => {



        await utilities.MobileDestinationResidential();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Domestic Shipment Residential For Mobile Screen-------------------------

    it('Lets Build Your Shipment GLS Domestic Shipment Residential For Mobile Screen', async () => {



        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select GLS Domestic Shipment Residential For Mobile Screen-------------------------


    it('From Select GLS Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(7000);

        await sDRG.scrollAction.scrollIntoView();
        if (expect(sDRG.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDRG.seeMoreCourierButton.click();

        }

        const GLSClass = await $("(//td[@class='gls'])[1]");
        
         GLS = await GLSClass.getAttribute('class');
          
       

        if (GLS == "gls") {

            await sDRG.scrollAction.scrollIntoView();
            await sDRG.GLS.click();
            await browser.pause(7000);
            await sDRG.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Review & Confirm GLS Domestic Shipment Residential For Mobile Screen', async () => {

        if (expect(sDRG.courierName).toHaveText("GLS")) {
            const CourierName = await sDRG.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "For Mobile Screen For Residential Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Label Print & Download GLS Domestic Shipment Residential For Mobile Screen', async () => {

        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Residential " + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Residential For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDRG.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})