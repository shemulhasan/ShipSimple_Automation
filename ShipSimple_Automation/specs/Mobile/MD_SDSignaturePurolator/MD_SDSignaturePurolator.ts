
import SDSignaturePurolator from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Purolator Single Domestic Signature', () => {

    const sDSP = new SDSignaturePurolator();
    const utilities = new Utilities();
    
    let purolatorCourier;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator Single Domestic Signature  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Purolator Single Domestic Signature For Mobile Screen-------------------------


    it('Destination Address Purolator Single Domestic Signature For Mobile Screen', async () => {

        await utilities.MobileDestination();
        await browser.pause(2000);

        // await utilities.SuggestEnterAddress();


    })

    //--------------------------------- Lets Build Your Shipment Purolator Single Domestic Signature For Mobile Screen-------------------------

    it('Lets Build Your Shipment Purolator Single Domestic Signature For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipmentWithSignature();
        await browser.pause(7000);


    })

    //--------------------------------- Select Purolator Xpresspost Single Domestic Signature For Mobile Screen-------------------------


    it('From Select Purolator Single Domestic Signature For Mobile Screen', async () => {

        await browser.pause(10000);

        if (expect(sDSP.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDSP.seeMoreCourierButton.click();

        }

        const purolatorClass = await $("(//td[@class='purolator_p'])[1]");
        
        purolatorCourier = await purolatorClass.getAttribute('class');
         

        if (purolatorCourier == "purolator_p") {

        // await sDSP.purolatorCourierScroll.scrollIntoView();
        await sDSP.purolator_Xpresspost.click();
        await browser.pause(7000);
        await sDSP.courierButtonNextAllCourier.click();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator Single Domestic Signature For Mobile Screen----------------------------------

    it('Review & Confirm Purolator Single Domestic Signature', async () => {

        if(expect(sDSP.courierName).toHaveText("Purolator EP")){
            const CourierName = await sDSP.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Mobile Screen For Signature Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator Single Domestic Signature For Mobile Screen----------------------------------

    it('Label Print & Download Purolator Single Domestic Signature For Mobile Screen', async () => {

       
        if (purolatorCourier == "purolator_p") {

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })



    //------------------------------------------  Label print and Download Done Domestic Shipment signature For Mobile Screen----------------------------------

    it(' Label print and Download Done Domestic Shipment signature For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDSP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})