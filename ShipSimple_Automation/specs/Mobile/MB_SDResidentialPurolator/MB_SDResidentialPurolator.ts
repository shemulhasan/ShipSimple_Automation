
import SDResidentialPurolator from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Purolator Domestic Shipment Residential', () => {

    const sDRP = new SDResidentialPurolator();
    const utilities = new Utilities();
    
    let purolatorCourier;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator Domestic Shipment Residential For Mobile Screen ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Domestic Shipment Residential For Mobile Screen-------------------------


    it('Destination Address Purolator Domestic Shipment Residential For Mobile Screen', async () => {

        await utilities.MobileDestinationResidential();

        // await utilities.SuggestEnterAddress();
        
        await browser.pause(2000);


    })

    //--------------------------------- Lets Build Your Shipment Purolator Domestic Shipment Residential For Mobile Screen-------------------------

    it('Lets Build Your Shipment Purolator Domestic Shipment Residential For Mobile Screen', async () => {


        await utilities.LetsBuildYourShipment();
        await browser.pause(7000);


    })

    //--------------------------------- Select Purolator Domestic Shipment Residential For Mobile Screen-------------------------


    it('From Select Purolator Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(10000);

        if (expect(sDRP.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDRP.seeMoreCourierButton.click();

        }

        const purolatorClass = await $("(//td[@class='purolator_p'])[1]");
        
        purolatorCourier = await purolatorClass.getAttribute('class');
         

        if (purolatorCourier == "purolator_p") {

        // await sDRP.purolatorCourierScroll.scrollIntoView();
        await sDRP.purolator_Xpresspost.click();
        await browser.pause(7000);
        await sDRP.courierButtonNextAllCourier.click();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator Domestic Shipment Residential For Mobile Screen----------------------------------

    it('For Mobile Screen Review & Confirm Purolator Xpresspost', async () => {

        if(expect(sDRP.courierName).toHaveText("Purolator EP")){
            const CourierName = await sDRP.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Mobile Screen For ResidentialCourier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator Domestic Shipment Residential For Mobile Screen----------------------------------

    it('Label Print & Download Purolator Domestic Shipment Residential For Mobile Screen', async () => {

       
        if (purolatorCourier == "purolator_p") {

            // await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Residential"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })

     //------------------------------------------  Label print and Download Done Domestic Shipment Residential For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Residential For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDRP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})



})