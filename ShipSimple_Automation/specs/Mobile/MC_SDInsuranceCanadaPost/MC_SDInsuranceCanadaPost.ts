
import SDInsuranceCanadaPost from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Canadapost Single Domestic Insurance', () => {

    const sDIC = new SDInsuranceCanadaPost();
    const utilities = new Utilities();

    let aa;

    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Single Domestic Insurance  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Canadapost Single Domestic Insurance For Mobile Screen-------------------------


    it('Destination Address Canadapost Single Domestic Insurance For Mobile Screen', async () => {

        
         await utilities.MobileDestination();

        //  await utilities.SuggestEnterAddress();
        
        
       
          


        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Canadapost Single Domestic Insurance For Mobile Screen-------------------------

    it('Lets Build Your Shipment Canadapost Single Domestic Insurance For Mobile Screen', async () => {


        await utilities.MobileLetsBuildYourShipmentWithInsurance();
        await browser.pause(7000);


    })

    //--------------------------------- Select Canadapost Single Domestic Insurance For Mobile Screen-------------------------


    it('From Select Canadapost Single Domestic Insurance For Mobile Screen', async () => {

        await browser.pause(10000);

        if (expect(sDIC.seeMoreCourierButton).toHaveValueContaining('View More')) {

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
            console.log("----------------------------"+"For Mobile Screen Canadapost Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }

    })



    //------------------------------------------ Review & Confirm Canadapost Single Domestic Insurance For Mobile Screen----------------------------------

    it('Review & Confirm Canadapost Single Domestic Insurance For Mobile Screen', async () => {

        const courierName1 = await sDIC.courierName.getText();//await expect(sDIC.courierName).toHaveText("Canada Post CP")
        if(courierName1=='Canada Post CP'){
            const CourierName = await sDIC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Mobile Screen For Insurance Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");
            await utilities.ReviewConfirm();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Canadapost Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        


    })

    //------------------------------------------ Label Print & Download Canadapost Single Domestic Insurance For Mobile Screen----------------------------------

    it('Label Print & Download Canadapost Single Domestic Insurance For Mobile Screen', async () => {

        if (aa == "canadapost_cp") {
            await browser.pause(2000);
            // await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Canadapost Courier Not Found For Insurance"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
       


    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Insurance For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Insurance For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDIC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Domestic Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})