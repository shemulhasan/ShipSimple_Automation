
import SDSignatureGLS from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('GLS Single Domestic Signature', () => {

    const sDSG = new SDSignatureGLS();
    const utilities = new Utilities();

    let GLS:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS Single Domestic Signature ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Single Domestic Signature-------------------------

    it('Destination Address GLS Single Domestic Signature', async () => {


        await utilities.OriginAddress();
        await utilities.Destination();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Single Domestic Signature-------------------------

    it('Lets Build Your Shipment GLS Single Domestic Signature', async () => {



        await utilities.LetsBuildYourShipmentWithSignature();


    })

    //--------------------------------- Select GLS Single Domestic Signature -------------------------


    it('From Select GLS Single Domestic Signature', async () => {

        await browser.pause(7000);

        await sDSG.seeMoreCourierButton.waitForExist();
        if (expect(sDSG.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDSG.seeMoreCourierButton.click();

        }

        const GLSClass = await $("(//td[@class='gls'])[1]");
        
         GLS = await GLSClass.getAttribute('class');
          
       

        if (GLS == "gls") {
            // await sDSG.GLSScrollAction.scrollIntoView();
            await sDSG.GLS.click();
            await browser.pause(2000);
            await sDSG.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Signature" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Single Domestic Signature----------------------------------

    it('Review & Confirm GLS Single Domestic Signature', async () => {

        if (expect(sDSG.courierName).toHaveText("GLS")) {
            const CourierName = await sDSG.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "For Signature Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Signature" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Single Domestic Signature----------------------------------

    it('Label Print & Download GLS Single Domestic Signature', async () => {

        await browser.pause(5000);
        
        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Signature" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })



    //------------------------------------------  Label print and Download Done Domestic Shipment signature----------------------------------

    it(' Label print and Download Done Domestic Shipment signature', async () => {

        await browser.pause(2000);
        await sDSG.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})













})