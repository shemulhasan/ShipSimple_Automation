import SDInsuranceLoomisAPI from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Loomis API Single Domestic Insurance', () => {

    const sDILA = new SDInsuranceLoomisAPI();
    const utilities = new Utilities();
 
    let loomisAPIClassValue:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })


    /* ---------------------------------------------------------------------------
  
              -------------  Loomis API Single Domestic Insurance  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Loomis API Single Domestic Insurance-------------------------

    it('Destination Address Loomis API Single Domestic Insurance', async () => {

        await utilities.OriginAddress();
        await utilities.Destination();

        // await utilities.SuggestEnterAddress();



    })

    //--------------------------------- Lets Build Your Shipment Loomis API Single Domestic Insurance-------------------------

    it('Lets Build Your Shipment Loomis API Single Domestic Insurance', async () => {


        await utilities.LetsBuildYourShipmentWithInsurance();


    })

    //--------------------------------- Select Loomis API Single Domestic Insurance -------------------------


    it('From Select Loomis API Courier', async () => {

        // await browser.pause(7000);

       

        await sDILA.seeMoreCourierButton.waitForExist();
        if (expect(sDILA.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDILA.seeMoreCourierButton.click();

        }

        const loomisAPIClass = await $("(//td[@class='loomis_api'])[1]");
        
        loomisAPIClassValue = await loomisAPIClass.getAttribute('class');
         
       if(loomisAPIClassValue=="loomis_api"){  

        await sDILA.scrollAction.scrollIntoView();
        await sDILA.loomisAPI.click();
        await browser.pause(7000);
        await sDILA.courierButtonNextAllCourier.click();
        await browser.pause(2000);

       }else{
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"Loomis Courier Not Found For Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
        return;

       }


    })



    //------------------------------------------ Review & Confirm Loomis Single Domestic Insurance----------------------------------

    it('Review & Confirm Loomis Single Domestic Insurance', async () => {

        if(expect(sDILA.courierName).toHaveText("Loomis API")){
            const CourierName = await sDILA.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("   -------------- "+"For Insurance Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Loomis Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();

    })

    //------------------------------------------Loomis courier Label Print & Download Single Domestic Insurance----------------------------------

    it('Label Print & Download Loomis Single Domestic Insurance', async () => {

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


    
     //------------------------------------------  Label print and Download Done Domestic Shipment Insurance----------------------------------

     it(' Label print and Download Done Domestic Shipment Insurance', async () => {

        await browser.pause(2000);
        await sDILA.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Loomis API Domestic Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})









})
