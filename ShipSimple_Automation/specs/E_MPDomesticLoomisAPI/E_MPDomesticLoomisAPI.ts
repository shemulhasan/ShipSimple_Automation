import MPDomesticLoomisAPI from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis API Multi-Package Domestic', () => {

    const mPDLA = new MPDomesticLoomisAPI();
    const utilities = new Utilities();
 
    let loomisAPIClassValue:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis API Multi-Package Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis API Multi-Package Domestic-------------------------

    it('Destination Address Loomis API Multi-Package Domestic', async () => {


        await utilities.OriginAddress();
        await utilities.Destination();
       
        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis API Multi-Package Domestic-------------------------

    it('Lets Build Your Shipment Loomis API Multi-Package Domestic', async () => {


        await utilities.LetsBuildYourShipmentWithMultiPackage();


    })

    //--------------------------------- Select Loomis API Multi-Package Domestic -------------------------


    it('From Select Loomis API Multi-Package Domestic', async () => {

        // await browser.pause(7000);

       

        await mPDLA.seeMoreCourierButton.waitForExist();
        if (expect(mPDLA.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await mPDLA.seeMoreCourierButton.click();

        }

        const loomisAPIClass = await $("(//td[@class='loomis_api'])[1]");
        
        loomisAPIClassValue = await loomisAPIClass.getAttribute('class');
         
       if(loomisAPIClassValue=="loomis_api"){  

        await mPDLA.scrollAction.scrollIntoView();
        await mPDLA.loomisAPI.click();
        await browser.pause(7000);
        await mPDLA.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found FOr Multi-Package Domestic"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis API Multi-Package Domestic----------------------------------

    it('Review & Confirm Loomis API Multi-Package Domestic', async () => {

        if(expect(mPDLA.courierName).toHaveText("Loomis API")){
            const CourierName = await mPDLA.courierName.getText();
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

    //------------------------------------------Loomis API courier Label Print & Download Multi-Package Domestic----------------------------------

    it('Label Print & Download Loomis API Multi-Package Domestic', async () => {

        await browser.pause(5000);
        
        if(loomisAPIClassValue=="loomis_api"){

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis API Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);

        


    })



    //------------------------------------------  Label print and Download Done Loomis API Domestic Shipment Multi-Package----------------------------------

    it(' Label print and Download Done Loomis API Domestic Shipment Multi-Package', async () => {

        await browser.pause(2000);
        await mPDLA.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Loomis API Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})
