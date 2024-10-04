
import SDInsuranceCanadaPost from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Canadapost Single Domestic Insurance', () => {

    const sDIC = new SDInsuranceCanadaPost();
    const utilities = new Utilities();

    let aa:string;

    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Single Domestic Insurance  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Canadapost Single Domestic Insurance-------------------------


    it('Destination Address Canadapost Single Domestic Insurance', async () => {

         await utilities.OriginAddress();
         await utilities.Destination();

        //  await utilities.SuggestEnterAddress();
        
        
       
          


        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Canadapost Single Domestic Insurance-------------------------

    it('Lets Build Your Shipment Canadapost Single Domestic Insurance', async () => {


        await utilities.LetsBuildYourShipmentWithInsurance();
        await browser.pause(7000);


    })

    //--------------------------------- Select Canadapost Single Domestic Insurance -------------------------


    it('From Select Canadapost Single Domestic Insurance', async () => {

        // await browser.pause(10000);

        await sDIC.seeMoreCourierButton.waitForExist();
        if (expect(sDIC.seeMoreCourierButton).toHaveValueContaining('Load More')) {

            await sDIC.seeMoreCourierButton.click();

        }


        const CanadapostClass = await $("(//td[@class='canadapost_cp'])[1]");
        
         aa = await CanadapostClass.getAttribute('class');
          
        if(aa=="canadapost_cp"){
           
        await sDIC.scrollAction.scrollIntoView();    
        await sDIC.Canadapost_Xpresspost.click();
        await browser.pause(7000);
        await sDIC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }

    })



    //------------------------------------------ Review & Confirm Canadapost Single Domestic Insurance----------------------------------

    it('Review & Confirm Canadapost Single Domestic Insurance', async () => {

        const courierName1 = await sDIC.courierName.getText();//await expect(sDIC.courierName).toHaveText("Canada Post CP")
        if(courierName1=='Canada Post CP'){
            const CourierName = await sDIC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Insurance Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");
            await utilities.ReviewConfirm();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        


    })

    //------------------------------------------ Label Print & Download Canadapost Single Domestic Insurance----------------------------------

    it('Label Print & Download Canadapost Single Domestic Insurance', async () => {

        await browser.pause(5000);
        
        if (aa == "canadapost_cp") {
            await browser.pause(2000);
            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"Canadapost Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
       


    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Insurance----------------------------------

     it(' Label print and Download Done Domestic Shipment Insurance', async () => {

        await browser.pause(2000);
        await sDIC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Domestic Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})