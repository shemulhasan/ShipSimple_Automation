
import MPDomesticCanadaPost from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Canadapost Multi-Package Domestic', () => {

    const mPDC = new MPDomesticCanadaPost();
    const utilities = new Utilities();

    let aa:string;

    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Multi-Package Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Canadapost Multi-Package Domestic-------------------------


    it('Destination Address Canadapost Multi-Package Domestic', async () => {

        
         await utilities.OriginAddress();
         await utilities.Destination();
       

        //  await utilities.SuggestEnterAddress();
        
        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Canadapost Multi-Package Domestic-------------------------

    it('Lets Build Your Shipment Canadapost Multi-Package Domestic', async () => {


        await utilities.LetsBuildYourShipmentWithMultiPackage();
        await browser.pause(7000);


    })

    //--------------------------------- Select Canadapost Multi-Package Domestic -------------------------


    it('From Select Canadapost Multi-Package Domestic', async () => {

        // await browser.pause(10000);
        await mPDC.seeMoreCourierButton.waitForExist();
        if (expect(mPDC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await mPDC.seeMoreCourierButton.click();

        }


        const CanadapostClass = await $("(//td[@class='canadapost_cp'])[1]");

       
        
          aa = await CanadapostClass.getAttribute('class');
          
        if(aa=="canadapost_cp"){
          
        await mPDC.scrollAction.scrollIntoView();
        await mPDC.Canadapost_Xpresspost.click();
        await browser.pause(7000);
        await mPDC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Multi-Package Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }
    

    })



    //------------------------------------------ Review & Confirm Canadapost Multi-Package Domestic----------------------------------

    it('Review & Confirm Canadapost Multi-Package Domestic', async () => {

        const courierName1 = await mPDC.courierName.getText();//await expect(mPDC.courierName).toHaveText("Canada Post CP")
        if(courierName1=='Canada Post CP'){
            const CourierName = await mPDC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Multi-Package DomesticCourier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");
            await utilities.ReviewConfirm();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Multi-Package Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        


    })

    //------------------------------------------ Label Print & Download Canadapost Multi-Package Domestic----------------------------------

    it('Label Print & Download Canadapost Multi-Package Domestic', async () => {

        await browser.pause(5000);
        
        if(aa=="canadapost_cp"){
            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Multi-Package Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
       


    })



    //------------------------------------------  Label print and Download Done Domestic Shipment Multi-Package----------------------------------

    it(' Label print and Download Done Domestic Shipment Multi-Package', async () => {

        await browser.pause(2000);
        await mPDC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic signature"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})