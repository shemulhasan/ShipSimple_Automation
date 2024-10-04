
import SDSignatureCanadaPost from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Canadapost Single Domestic Signature', () => {

    const sDSC = new SDSignatureCanadaPost();
    const utilities = new Utilities();

    let aa:string;

    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Single Domestic Signaturer  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Canadapost Single Domestic Signature-------------------------


    it('Destination Address Canadapost Single Domestic Signature', async () => {

         await utilities.OriginAddress();
         await utilities.Destination();


        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Canadapost Single Domestic Signature-------------------------

    it('Lets Build Your Shipment Canadapost Single Domestic Signature', async () => {


        await utilities.LetsBuildYourShipmentWithSignature();
        await browser.pause(2000);


    })

    //--------------------------------- Select Canadapost Single Domestic Signature -------------------------


    it('From Select Canadapost Single Domestic Signature', async () => {

        // await browser.pause(10000);

        await sDSC.seeMoreCourierButton.waitForExist();
        if (expect(sDSC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDSC.seeMoreCourierButton.click();

        }


        const CanadapostClass = await $("(//td[@class='canadapost_cp'])[1]");
        
         aa = await CanadapostClass.getAttribute('class');
          
        if(aa=="canadapost_cp"){
        
        // await sDSC.scrollAction.scrollIntoView();
        await sDSC.Canadapost_Xpresspost.click();
        await browser.pause(2000);
        await sDSC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found FOr Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }

    })



    //------------------------------------------ Review & Confirm Canadapost Single Domestic Signature----------------------------------

    it('Review & Confirm Canadapost Single Domestic Signature', async () => {

        const courierName1 = await sDSC.courierName.getText();
        if(courierName1=='Canada Post CP'){
            const CourierName = await sDSC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Signature Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");
            await utilities.ReviewConfirm();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        


    })

    //------------------------------------------ Label Print & Download Canadapost Single Domestic Signature----------------------------------

    it('Label Print & Download Canadapost Single Domestic Signature', async () => {

        await browser.pause(5000);
        
        if(aa=="canadapost_cp"){
            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Signature"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
       


    })


     //------------------------------------------  Label print and Download Done Domestic Shipment signature----------------------------------

     it(' Label print and Download Done Domestic Shipment signature', async () => {

        await browser.pause(2000);
        await sDSC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})