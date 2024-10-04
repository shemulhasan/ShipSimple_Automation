
import SingleDomesticPurolator from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Purolator Courier Label Purchase Single Domestic', () => {

    const lPPC = new SingleDomesticPurolator();
    const utilities = new Utilities();
    
    let purolatorCourier;


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator Single Domestic  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Purolator Single Domestic For Mobile Screen-------------------------


    it('Destination Address Purolator Single Domestic For Mobile Screen', async () => {

        await utilities.Destination();
        await browser.pause(2000);

        // await utilities.SuggestEnterAddress();


    })

    //--------------------------------- Lets Build Your Shipment Purolator Single Domestic For Mobile Screen-------------------------

    it('Lets Build Your Shipment Purolator Single Domestic For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipment();
        await browser.pause(7000);


    })

    //--------------------------------- Select Purolator Xpresspost Single Domestic For Mobile Screen-------------------------


    it('From Select Purolator Single Domestic For Mobile Screen', async () => {

        await browser.pause(10000);

        if (expect(lPPC.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await lPPC.seeMoreCourierButton.click();

        }

        const purolatorClass = await $("(//td[@class='purolator_p'])[1]");
        
        purolatorCourier = await purolatorClass.getAttribute('class');
         

        if (purolatorCourier == "purolator_p") {

       
      
        
        // await lPPC.purolatorCourierScroll.scrollIntoView();
        // await lPPC.purolator_Xpresspost.getActiveElement();
        // await lPPC.purolator_Xpresspost.waitForDisplayed();
        await lPPC.purolator_Xpresspost.click();
        await browser.pause(7000);
        await lPPC.courierButtonNextAllCourier.click();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator Single Domestic For Mobile Screen----------------------------------

    it('Review & Confirm Purolator Single Domestic For Mobile Screen', async () => {

        if(expect(lPPC.courierName).toHaveText("Purolator EP")){
            const CourierName = await lPPC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Mobile Screen Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator Single Domestic For Mobile Screen----------------------------------

    it('Label Print & Download Purolator Single Domestic For Mobile Screen', async () => {

        console.log("=====================purolatorCourier v ============== "+purolatorCourier+"corier");


        await lPPC.downloadLabel.getActiveElement();
            await lPPC.purolator_Xpresspost.waitForDisplayed();
            // await lPPC.downloadLabel.click();

        if (purolatorCourier == "purolator_p") {

            // await utilities.LabelPrintDownload();
            await lPPC.downloadLabel.getActiveElement();
            // await lPPC.purolator_Xpresspost.waitForDisplayed();
            // await lPPC.downloadLabel.click();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })


     //------------------------------------------  Label print and Download Done Single Domestic For Mobile Screen----------------------------------

     it(' Label print and Download Done Single Domestic For Mobile Screen', async () => {

        await browser.pause(2000);
        await lPPC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})