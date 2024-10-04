
import MobileSingleDomesticCanadaPost from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Canadapost  Courier Single Domestic', () => {

    const mSDC = new MobileSingleDomesticCanadaPost();
    const utilities = new Utilities();

    let aa;

    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        // await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Xpresspost all courier  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Canadapost Single Domestic-------------------------


    it('Destination Address Canadapost Single Domestic for Mobile Screen', async () => {

      
        // await browser.refresh();
        // const menu = $('//img[@alt="menu"]');
        // await menu.click();
        // await browser.pause(5000);

       

         await utilities.MobileDestination();

        //  await utilities.SuggestEnterAddress();
          


        await browser.pause(2000);


    })


    //--------------------------------- Lets Build Your Shipment Canadapost Single Domestic-------------------------

    it('Lets Build Your Shipment Canadapost Single Domestic for Mobile Screen', async () => {

       
        await utilities.LetsBuildYourShipment();
        await browser.pause(7000);


    })

    //--------------------------------- Select Canadapost Single Domestic for Mobile Screen-------------------------


    it('From Select Canadapost Single Domestic for Mobile Screen', async () => {

        await browser.pause(10000);

        await mSDC.nextButtonScrollForSeeViewMore.scrollIntoView();

        await utilities.ViewMoreClick();

       

        const CanadapostClass = await $("(//td[@class='canadapost_cp'])[1]");
        
         aa = await CanadapostClass.getAttribute('class');
          
        if(aa=="canadapost_cp"){
          
        await mSDC.scrollActionCourierSelect.scrollIntoView();
        await mSDC.Canadapost_Xpresspost.click();
        await browser.takeScreenshot();
        await browser.pause(7000);
        await mSDC.courierButtonNextAllCourier.click();
        await browser.takeScreenshot();
        await browser.pause(2000);

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found for single domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }

    })



    //------------------------------------------ Review & Confirm Canadapost Single Domestic for Mobile Screen----------------------------------

    it('Review & Confirm Canadapost Single Domestic for Mobile Screen', async () => {

        const courierName1 = await mSDC.courierName.getText();//await expect(mSDC.courierName).toHaveText("Canada Post CP")
        if(courierName1=='Canada Post CP'){
            const CourierName = await mSDC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Single Domestic Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");
            await utilities.ReviewConfirm();
            await browser.takeScreenshot();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found for Single Domestic "+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.takeScreenshot();
        


    })

    //------------------------------------------ Label Print & Download Canadapost Single Domestic for Mobile Screen----------------------------------

    it('Label Print & Download Canadapost Single Domestic for Mobile Screen', async () => {

        if(aa=="canadapost_cp"){
            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found for Single Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
       


    })




    //------------------------------------------  Label print and Download Done Single Domestic for Mobile Screen----------------------------------

    it(' Label print and Download Done Single Domestic for Mobile Screen', async () => {

            await browser.pause(2000);
            await mSDC.done.click();
            await browser.takeScreenshot();
            await browser.pause(2000);
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
            console.log("=======================================================================================\n");
        
       


    })




})