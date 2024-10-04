
import SDResidentialCanadaPost from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Canadapost Single Domestic Residential', () => {

    const sDRC = new SDResidentialCanadaPost();
    const utilities = new Utilities();

    let aa;

    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Canadapost Xpresspost Domestic Shipment Residential  For Mobile Screen----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Domestic Shipment Residential Canadapost Xpresspost For Mobile Screen-------------------------


    it('Destination Address Canadapost Domestic Shipment Residential For Mobile Screen', async () => {

        
         await utilities.MobileDestinationResidential();

        //  await utilities.SuggestEnterAddress();
        
        
       
          


        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Canadapost Domestic Shipment Residential For Mobile Screen-------------------------

    it('Lets Build Your Shipment Canadapost Domestic Shipment Residential For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipment();
        await browser.pause(7000);


    })

    //--------------------------------- Select Canadapost Domestic Shipment Residential For Mobile Screen-------------------------


    it('From Select Canadapost Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(10000);

        if (expect(sDRC.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDRC.seeMoreCourierButton.click();

        }


        const CanadapostClass = await $("(//td[@class='canadapost_cp'])[1]");
        
         aa = await CanadapostClass.getAttribute('class');
          
        if(aa=="canadapost_cp"){
           
        await sDRC.scrollAction.scrollIntoView();
        await sDRC.Canadapost_Xpresspost.click();
        await browser.pause(7000);
        await sDRC.courierButtonNextAllCourier.click();
        await browser.pause(2000);

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Canadapost Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;
        }

    })



    //------------------------------------------ Review & Confirm Canadapost Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Review & Confirm Canadapost Domestic Shipment Residential For Mobile Screen', async () => {

        const courierName1 = await sDRC.courierName.getText();//await expect(lPCC.courierName).toHaveText("Canada Post CP")
        if(courierName1=='Canada Post CP'){
            const CourierName = await sDRC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Mobile Screen For Residential Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");
            await utilities.ReviewConfirm();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Canadapost Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        


    })

    //------------------------------------------ Label Print & Download Canadapost Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Label Print & Download Canadapost Domestic Shipment Residential For Mobile Screen', async () => {

        if(aa=="canadapost_cp"){
            // await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Canadapost Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
       


    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Residential For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDRC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})




})