import MPDomesticLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis Multi-Package Domestic', () => {

    const mPDL = new MPDomesticLoomis();
    const utilities = new Utilities();
 
    let loomis;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis Multi-Package Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis Multi-Package Domestic-------------------------

    it('Destination Address Loomis Multi-Package Domestic', async () => {


        await utilities.Destination();



    })

    //--------------------------------- Lets Build Your Shipment Loomis Multi-Package Domestic-------------------------

    it('Lets Build Your Shipment Loomis Multi-Package Domestic', async () => {


        await utilities.LetsBuildYourShipmentWithMultiPackage();


    })

    //--------------------------------- Select Loomis Multi-Package Domestic -------------------------


    it('From Select Loomis Multi-Package Domestic', async () => {

        await browser.pause(7000);

       


        if (expect(mPDL.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await mPDL.seeMoreCourierButton.click();

        }

        const loomisClass = await $("(//td[@class='loomisexpress'])[1]");
        
        loomis = await loomisClass.getAttribute('class');
         
       if(loomis=="loomisexpress"){  

        await mPDL.scrollAction.scrollIntoView();
        await mPDL.loomisCourier.click();
        await browser.pause(4000);
        await mPDL.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found FOr Multi-Package Domestic"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Multi-Package Domestic----------------------------------

    it('Review & Confirm Loomis Multi-Package Domestic', async () => {

        if(expect(mPDL.courierName).toHaveText("Loomis Express")){
            const CourierName = await mPDL.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Multi-Package Domestic Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Multi-Package Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Multi-Package Domestic----------------------------------

    it('Label Print & Download Loomis Multi-Package Domestic', async () => {

        await browser.pause(5000);
        
        if(loomis=="loomisexpress"){

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

        


    })



    //------------------------------------------  Label print and Download Done Domestic Shipment Multi-Package----------------------------------

    it(' Label print and Download Done Domestic Shipment Multi-Package', async () => {

        await browser.pause(2000);
        await mPDL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})
