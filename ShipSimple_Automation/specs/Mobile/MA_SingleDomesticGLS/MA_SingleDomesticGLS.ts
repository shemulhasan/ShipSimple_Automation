
import SingleDomesticGLS from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen GLS Courier Label Purchase Single Domestic', () => {

    const lPGC = new SingleDomesticGLS();
    const utilities = new Utilities();

    let GLS;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
          // await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS all Single Domestic For Mobile Screen ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Single Domestic For Mobile Screen-------------------------

    it('Destination Address GLS Single Domestic For Mobile Screen', async () => {



        await utilities.MobileDestination();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Single Domestic For Mobile Screen-------------------------

    it('Lets Build Your Shipment GLS Single Domestic For Mobile Screen', async () => {



        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select GLS Single Domestic For Mobile Screen-------------------------


    it('From Select GLS Single Domestic For Mobile Screen', async () => {

        await browser.pause(4000);

       // await lPGC.scrollAction.scrollIntoView();
       await utilities.ViewMoreClick();

       await lPGC.mobilesScrollActionGLS.scrollIntoView();
        const GLSClass = await $("(//img[@class='gls'])[1]");
        
         GLS = await GLSClass.getAttribute('class');
          
       

        if (GLS == "gls") {

            await lPGC.mobilesScrollActionGLS.scrollIntoView();
            await lPGC.GLSMobile.click();
            await browser.pause(7000);
            await lPGC.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found " + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Single Domestic For Mobile Screen----------------------------------

    it('Review & Confirm GLS Single Domestic For Mobile Screen', async () => {

        if (expect(lPGC.courierName).toHaveText("GLS")) {
            const CourierName = await lPGC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found " + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Single Domestic For Mobile Screen----------------------------------

    it('Label Print & Download GLS Single Domestic For Mobile Screen', async () => {

        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found " + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })


     //------------------------------------------  Label print and Download Done Single Domestic For Mobile Screen----------------------------------

     it(' Label print and Download Done Single Domestic For Mobile Screen', async () => {

        await browser.pause(2000);
        await lPGC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})


    





})