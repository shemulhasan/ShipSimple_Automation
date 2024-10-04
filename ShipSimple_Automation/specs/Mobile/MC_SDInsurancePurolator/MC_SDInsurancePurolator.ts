
import SDInsurancePurolator from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('For Mobile Screen Purolator Single Domestic Insurance', () => {

    const sDIP = new SDInsurancePurolator();
    const utilities = new Utilities();
    
    let purolatorCourier;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Purolator  Single Domestic Insurance For Mobile Screen ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address Purolator  Single Domestic Insurance For Mobile Screen-------------------------


    it('Destination Address Purolator Single Domestic Insurance For Mobile Screen', async () => {

        await utilities.MobileDestination();
        await browser.pause(2000);

        // await utilities.SuggestEnterAddress();


    })

    //--------------------------------- Lets Build Your Shipment Purolator  Single Domestic Insurance For Mobile Screen-------------------------

    it('Lets Build Your Shipment Purolator  Single Domestic Insurance For Mobile Screen', async () => {


        await utilities.MobileLetsBuildYourShipmentWithInsurance();
        await browser.pause(7000);


    })

    //--------------------------------- Select Purolator  Single Domestic Insurance For Mobile Screen-------------------------


    it('From Select Purolator  Single Domestic Insurance For Mobile Screen', async () => {

        await browser.pause(10000);

        if (expect(sDIP.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDIP.seeMoreCourierButton.click();

        }

        const purolatorClass = await $("(//td[@class='purolator_p'])[1]");
        
        purolatorCourier = await purolatorClass.getAttribute('class');
         

        if (purolatorCourier == "purolator_p") {

        // await sDIP.purolatorCourierScroll.scrollIntoView();
        await sDIP.purolator_Xpresspost.click();
        await browser.pause(7000);
        await sDIP.courierButtonNextAllCourier.click();

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found FOr Purolator"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm Purolator  Single Domestic Insurance For Mobile Screen----------------------------------

    it('Review & Confirm Purolator  Single Domestic Insurance For Mobile Screen', async () => {

        if(expect(sDIP.courierName).toHaveText("Purolator EP")){
            const CourierName = await sDIP.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ "+"For Mobile Screen For Purolator Courier Name: "+CourierName+" --------------\n");
            console.log("==========================================================================\n");

        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Purolator"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        await utilities.ReviewConfirm();


    })

    //------------------------------------------ Label Print & Download Purolator  Single Domestic Insurance For Mobile Screen----------------------------------

    it('Label Print & Download Purolator  Single Domestic Insurance For Mobile Screen', async () => {

    
        if (purolatorCourier == "purolator_p") {

            await utilities.LabelPrintDownload();
        }else{
            console.log("\n=======================================================================================\n");
            console.log("----------------------------"+"For Mobile Screen Purolator Courier Not Found For Purolator"+"------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }
        
        await browser.pause(4000);



    })


     //------------------------------------------  Label print and Download Done Domestic Shipment Insurance For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Insurance For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDIP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Domestic Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})