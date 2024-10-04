
import SDINsuranceGLS from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('GLS Single Domestic Insurance', () => {

    const sDIG = new SDINsuranceGLS();
    const utilities = new Utilities();

    let GLS;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS Single Domestic Insurance For Mobile Screen ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Single Domestic Insurance For Mobile Screen-------------------------

    it('Destination Address GLS Single Domestic Insurance For Mobile Screen', async () => {



        await utilities.MobileDestination();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Single Domestic Insurance For Mobile Screen-------------------------

    it('Lets Build Your Shipment GLS Single Domestic Insurance For Mobile Screen', async () => {



        await utilities.MobileLetsBuildYourShipmentWithInsurance();


    })

    //--------------------------------- Select GLS Single Domestic Insurance For Mobile Screen-------------------------


    it('From Select GLS Single Domestic Insurance For Mobile Screen', async () => {

        await browser.pause(7000);

        
        if (expect(sDIG.seeMoreCourierButton).toHaveValueContaining('View More')) {

            await sDIG.seeMoreCourierButton.click();

        }

        const GLSClass = await $("(//td[@class='gls'])[1]");
        
         GLS = await GLSClass.getAttribute('class');
          
       

        if (GLS == "gls") {

            await sDIG.scrollAction.scrollIntoView();
            await sDIG.GLS.click();
            await browser.pause(7000);
            await sDIG.courierButtonNextAllCourier.click();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Insurance" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


        await browser.pause(2000);


    })



    //------------------------------------------ Review & Confirm GLS Single Domestic Insurance For Mobile Screen----------------------------------

    it('Review & Confirm GLS Single Domestic Insurance For Mobile Screen', async () => {

        if (expect(sDIG.courierName).toHaveText("GLS")) {
            const CourierName = await sDIG.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "For Mobile Screen For Insurance Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Insurance" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Single Domestic Insurance For Mobile Screen----------------------------------

    it('Label Print & Download GLS Single Domestic Insurance', async () => {

        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "For Mobile Screen GLS Courier Not Found For Insurance" + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })


    
     //------------------------------------------  Label print and Download Done Domestic Shipment Insurance For Mobile Screen----------------------------------

     it(' Label print and Download Done Domestic Shipment Insurance For Mobile Screen', async () => {

        await browser.pause(2000);
        await sDIG.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+"For Mobile Screen Label print and Download Done Domestic Insurance"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})





})