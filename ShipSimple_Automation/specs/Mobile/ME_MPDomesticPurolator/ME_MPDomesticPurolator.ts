
import MPDomesticPurolator from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('Purolator Multi-Package Domestic', () => {

    const mPDP = new MPDomesticPurolator();
    const utilities = new Utilities();
    
    let purolatorCourier;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator Multi-Package Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Purolator Multi-Package Domestic -------------------------


    it('Destination Address Purolator Multi-Package Domestic', async () => {

        await utilities.MobileDestination();
        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Purolator Multi-Package Domestic-------------------------

    it('Lets Build Your Shipment Purolator Multi-Package Domestic', async () => {


        await utilities.LetsBuildYourShipmentWithMultiPackage();
        await browser.pause(7000);


    })

    //--------------------------------- Select Purolator Multi-Package Domestic -------------------------


    it('From Select Purolator Multi-Package Domestic', async () => {

        await browser.pause(10000);

        if (expect(mPDP.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await mPDP.seeMoreCourierButton.click();

        }

        const purolatorClass = await $("(//td[@class='purolator_p'])[1]");
        
        purolatorCourier = await purolatorClass.getAttribute('class');
         

        if (purolatorCourier == "purolator_p") {

        // await mPDP.purolatorCourierScroll.scrollIntoView();
       // await mPDP.purolatorScrollAction.scrollIntoView();
        await mPDP.purolator_Xpresspost.click();
        await browser.pause(7000);
        await mPDP.courierButtonNextAllCourier.click();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found For Multi-Package Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator Multi-Package Domestic----------------------------------

    it('Review & Confirm Purolator Multi-Package Domestic', async () => {

        if(expect(mPDP.courierName).toHaveText("Purolator EP")){
            const CourierName = await mPDP.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Multi-Package Domestic Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found For Multi-Package Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator Multi-Package Domestic----------------------------------

    it('Label Print & Download Purolator Multi-Package Domestic', async () => {

       
        if (purolatorCourier == "purolator_p") {

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found For Multi-Package Domestic "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })



    
    //------------------------------------------  Label print and Download Done Domestic Shipment Multi-Package----------------------------------

    it(' Label print and Download Done Domestic Shipment Multi-Package', async () => {

        await browser.pause(2000);
        await mPDP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})