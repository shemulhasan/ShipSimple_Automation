
import SingleDomesticPurolator from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Purolator Courier Label Purchase Single Domestic', () => {

    const lPPC = new SingleDomesticPurolator();
    const utilities = new Utilities();
    
    // let purolatorCourier;
    let purolatorCourier: string ;


    it('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator Single Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Purolator Single Domestic -------------------------


    it('Origin Destination Address Purolator Single Domestic', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();
        await browser.pause(2000);

        // await utilities.SuggestEnterAddress();


    })

    //--------------------------------- Lets Build Your Shipment Purolator Single Domestic-------------------------

    it('Lets Build Your Shipment Purolator Single Domestic', async () => {


       
        await utilities.LetsBuildYourShipment();

        

        await browser.pause(2000);


    })

    //--------------------------------- Select Purolator Xpresspost Single Domestic -------------------------


    it('From Select Purolator Single Domestic', async () => {
        // const next = await $("(//span[contains(text(),'Next')])[1]");
        // await next.click();

        // await browser.pause(10000);

        // if (expect(lPPC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

        //     await lPPC.seeMoreCourierButton.click();

        // }

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
            console.log("----------------------------"+"Purolator Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator Single Domestic----------------------------------

    it('Review & Confirm Purolator Single Domestic', async () => {

        if(expect(lPPC.courierName).toHaveText("Purolator EP")){
            const CourierName = await lPPC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

            await utilities.ReviewConfirm();


        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        // await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator Single Domestic----------------------------------

    it('Label Print & Download Purolator Single Domestic', async () => {

        await browser.pause(5000);

        if (purolatorCourier == "purolator_p") {
           
            await browser.pause(5000);
            await utilities.LabelPrintDownload();
            

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Purolator Courier Not Found "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })


     //------------------------------------------  Label print and Download Done Single Domestic----------------------------------

     it(' Label print and Download Done Single Domestic', async () => {

        await browser.pause(2000);
        await lPPC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})