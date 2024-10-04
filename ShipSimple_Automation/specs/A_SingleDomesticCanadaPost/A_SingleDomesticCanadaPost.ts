
import SingleDomesticCanadaPost from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Canadapost Xpresspost Courier Single Domestic', () => {

    const lPCC = new SingleDomesticCanadaPost();
    const utilities = new Utilities();

    // let aa;
    // var aa:string[] = []
    let aa: string ;

    it('Open the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Xpresspost all courier  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Canadapost Single Domestic-------------------------


    it('Origin Destination Address Canadapost Single Domestic', async () => {

         await utilities.OriginAddress();
         
         await utilities.Destination();

        


        //  await utilities.SuggestEnterAddress();
        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Canadapost Single Domestic-------------------------

    it('Lets Build Your Shipment Canadapost Single Domestic', async () => {


        await utilities.LetsBuildYourShipment();
        await browser.pause(7000);


    })

    //--------------------------------- Select Canadapost Single Domestic -------------------------


    it('From Select Canadapost Single Domestic', async () => {

        // await browser.pause(10000);

        // await lPCC.courierButtonNextAllCourier.scrollIntoView();
        await  lPCC.seeMoreCourierButton.waitForExist();
        if (expect(lPCC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await lPCC.seeMoreCourierButton.click();

        }


        const CanadapostClass = await $("(//td[@class='canadapost_cp'])[1]");

         aa = await CanadapostClass.getAttribute('class');

        if(aa=="canadapost_cp"){

        await lPCC.scrollAction.scrollIntoView();
        await lPCC.Canadapost_Xpresspost.waitForClickable();
        await lPCC.Canadapost_Xpresspost.click();
        await browser.takeScreenshot();
        await browser.pause(7000);
        await lPCC.courierButtonNextAllCourier.click();
        await browser.takeScreenshot();
        await browser.pause(2000);

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found for single domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }

    })



    //------------------------------------------ Review & Confirm Canadapost Single Domestic----------------------------------

    it('Review & Confirm Canadapost Single Domestic', async () => {

        const courierName1 = await lPCC.courierName.getText();//await expect(lPCC.courierName).toHaveText("Canada Post CP")
        if(courierName1=='Canada Post CP'){
            const CourierName = await lPCC.courierName.getText();
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

    //------------------------------------------ Label Print & Download Canadapost Single Domestic----------------------------------

    it('Label Print & Download Canadapost Single Domestic', async () => {

        await browser.pause(5000);

        if (aa == "canadapost_cp") {
          
           
            await utilities.LabelPrintDownload();
            // await lPCC.downloadLabel.waitForExist({timeout:10000});
           
          
            }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found for Single Domestic"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }



    })

     //------------------------------------------  Label print and Download Done Single Domestic----------------------------------

     it(' Label print and Download Done Single Domestic', async () => {

        await browser.pause(2000);
        await browser.takeScreenshot();
        await lPCC.done.click();
     
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");




})





   

})