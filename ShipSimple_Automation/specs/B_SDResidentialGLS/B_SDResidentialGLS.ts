
import SDResidentialGLS from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('GLS Domestic Shipment Residential', () => {

    const sDRG = new SDResidentialGLS();
    const utilities = new Utilities();

    // let GLSClassValue;
    let GLSClassValue: string ;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS Domestic Shipment Residential  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Domestic Shipment Residential -------------------------

    it('Origin Destination Address GLS Domestic Shipment Residential', async () => {


        await utilities.OriginAddress();
        await utilities.DestinationResidential();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Domestic Shipment Residential-------------------------

    it('Lets Build Your Shipment GLS Domestic Shipment Residential', async () => {



        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select GLS Domestic Shipment Residential -------------------------


    it('From Select GLS Domestic Shipment Residential', async () => {

        await browser.pause(7000);

        // await sDRG.scrollAction.scrollIntoView();
        await sDRG.seeMoreCourierButton.waitForExist();
        if (expect(sDRG.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDRG.seeMoreCourierButton.click();

        }

        const GLSClass = await $("(//td[@class='gls'])[1]");
        
         GLSClassValue = await GLSClass.getAttribute('class');
          console.log("ontrol gls===class=====",GLSClassValue);
       

        if (GLSClassValue == "gls") {

            // await sDRG.GLSScrollAction.scrollIntoView();
            await sDRG.GLS.click();
            await browser.pause(7000);
            await sDRG.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Domestic Shipment Residential----------------------------------

    it('Review & Confirm GLS Domestic Shipment Residential', async () => {

        if (expect(sDRG.courierName).toHaveText("GLS")) {
            const CourierName = await sDRG.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "For Residential Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Domestic Shipment Residential----------------------------------

    it('Label Print & Download GLS Domestic Shipment Residential', async () => {

        await browser.pause(5000);
        
        if (GLSClassValue == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Residential" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Residential----------------------------------

     it(' Label print and Download Done Domestic Shipment Residential', async () => {

        await browser.pause(2000);
        await sDRG.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})