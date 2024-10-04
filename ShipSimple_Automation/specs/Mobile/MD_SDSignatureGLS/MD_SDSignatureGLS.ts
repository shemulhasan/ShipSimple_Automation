
import SDSignatureGLS from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen GLS Single Domestic Signature', () => {

    const sDSG = new SDSignatureGLS();
    const utilities = new Utilities();

    let GLS;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS Single Domestic Signature For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Single Domestic Signature For Mobile Screen-------------------------

    it('Destination Address GLS Single Domestic Signature For Mobile Screen', async () => {



        await utilities.MobileDestination();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Single Domestic Signature For Mobile Screen-------------------------

    it('Lets Build Your Shipment GLS Single Domestic Signature For Mobile Screen', async () => {



        await utilities.LetsBuildYourShipmentWithSignature();


    })

    //--------------------------------- Select GLS Single Domestic Signature For Mobile Screen-------------------------


    it('From Select GLS Single Domestic Signature For Mobile Screen', async () => {

        await browser.pause(7000);

        // await sDSG.scrollAction.scrollIntoView();
        if (expect(sDSG.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDSG.seeMoreCourierButton.click();

        }

        const GLSClass = await $("(//td[@class='gls'])[1]");
        
         GLS = await GLSClass.getAttribute('class');
          
       

        if (GLS == "gls") {
            await sDSG.scrollAction.scrollIntoView();
            await sDSG.GLS.click();
            await browser.pause(7000);
            await sDSG.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Signature" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Single Domestic Signature For Mobile Screen----------------------------------

    it('Review & Confirm GLS Single Domestic Signature For Mobile Screen', async () => {

        if (expect(sDSG.courierName).toHaveText("GLS")) {
            const CourierName = await sDSG.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "For Mobile Screen For Signature Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Signature" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Single Domestic Signature For Mobile Screen----------------------------------

    it('Label Print & Download GLS Single Domestic Signature For Mobile Screen', async () => {

        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Signature" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })



    //------------------------------------------  Label print and Download Done Domestic Shipment signature For Mobile Screen----------------------------------

    it(' Label print and Download Done Domestic Shipment signature For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDSG.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})













})