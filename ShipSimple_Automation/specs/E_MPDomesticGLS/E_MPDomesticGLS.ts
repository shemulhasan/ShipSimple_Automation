
import MPDomesticGLS from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('GLS Multi-Package Domestic', () => {

    const mPDG = new MPDomesticGLS();
    const utilities = new Utilities();

    let GLS:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS Multi-Package Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Multi-Package Domestic-------------------------

    it('Destination Address GLS Multi-Package Domestic', async () => {


        await utilities.OriginAddress();
        await utilities.Destination();

    })

    //--------------------------------- Lets Build Your Shipment GLS Multi-Package Domestic-------------------------

    it('Lets Build Your Shipment GLS Multi-Package Domestic', async () => {



        await utilities.LetsBuildYourShipmentWithMultiPackage();


    })

    //--------------------------------- Select GLS Multi-Package Domestic -------------------------


    it('From Select GLS Multi-Package Domestic', async () => {

        // await browser.pause(7000);

        await mPDG.seeMoreCourierButton.waitForExist();
        if (expect(mPDG.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await mPDG.seeMoreCourierButton.click();

        }

        const GLSClass = await $("(//td[@class='gls'])[1]");
        
         GLS = await GLSClass.getAttribute('class');
          
       

        if (GLS == "gls") {

            // await mPDG.GLSScrollAction.scrollIntoView();
            await mPDG.GLS.click();
            await browser.takeScreenshot();
            await browser.pause(5000);
            await mPDG.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Multi-Package Domestic" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Multi-Package Domestic----------------------------------

    it('Review & Confirm GLS Multi-Package Domestic', async () => {

        if (expect(mPDG.courierName).toHaveText("GLS")) {
            const CourierName = await mPDG.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "For Multi-Package DomesticCourier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Multi-Package Domestic" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Multi-Package Domestic----------------------------------

    it('Label Print & Download GLS Multi-Package Domestic', async () => {

        await browser.pause(5000);
        
        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found For Multi-Package Domestic" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })


    //------------------------------------------  Label print and Download Done Domestic Shipment Multi-Package----------------------------------

    it(' Label print and Download Done Domestic Shipment Multi-Package', async () => {

        await browser.pause(2000);
        await mPDG.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})



})