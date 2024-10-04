
import SDSignaturePurolator from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Purolator Single Domestic Signature', () => {

    const sDSP = new SDSignaturePurolator();
    const utilities = new Utilities();
    
    let purolatorCourier:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator Single Domestic Signature  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Purolator Single Domestic Signature -------------------------


    it('Destination Address Purolator Single Domestic Signature', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();
        await browser.pause(2000);

        // await utilities.SuggestEnterAddress();


    })

    //--------------------------------- Lets Build Your Shipment Purolator Single Domestic Signature-------------------------

    it('Lets Build Your Shipment Purolator Single Domestic Signature', async () => {


        await utilities.LetsBuildYourShipmentWithSignature();
        await browser.pause(7000);


    })

    //--------------------------------- Select Purolator Xpresspost Single Domestic Signature -------------------------


    it('From Select Purolator Single Domestic Signature', async () => {

        // await browser.pause(10000);

        await sDSP.seeMoreCourierButton.waitForExist();
        if (expect(sDSP.seeMoreCourierButton).toHaveValueContaining('Load More')) {

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
            console.log("----------------------------"+"Purolator Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator Single Domestic Signature----------------------------------

    it('Review & Confirm Purolator Single Domestic Signature', async () => {

        if(expect(sDSP.courierName).toHaveText("Purolator EP")){
            const CourierName = await sDSP.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Signature Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator Single Domestic Signature----------------------------------

    it('Label Print & Download Purolator Single Domestic Signature', async () => {

        await browser.pause(5000);
        
        if (purolatorCourier == "purolator_p") {

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })



    //------------------------------------------  Label print and Download Done Domestic Shipment signature----------------------------------

    it(' Label print and Download Done Domestic Shipment signature', async () => {

        await browser.pause(2000);
        await sDSP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})