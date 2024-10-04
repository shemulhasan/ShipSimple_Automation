
import SingleDomesticGLS from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('GLS Courier Label Purchase Single Domestic', () => {

    const lPGC = new SingleDomesticGLS();
    const utilities = new Utilities();

    // let GLS;
    let GLS: string ;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })



    /* ---------------------------------------------------------------------------
  
         -------------  GLS all Single Domestic  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Destination Address GLS Single Domestic-------------------------

    it('Origin Destination Address GLS Single Domestic', async () => {

        await utilities.OriginAddress();

        await utilities.Destination();

        // await utilities.SuggestEnterAddress();

    })

    //--------------------------------- Lets Build Your Shipment GLS Single Domestic-------------------------

    it('Lets Build Your Shipment GLS Single Domestic', async () => {



        await utilities.LetsBuildYourShipment();


    })

    //--------------------------------- Select GLS Single Domestic -------------------------


      it('From Select GLS Single Domestic',async()=>{

        await browser.pause(7000);

      
        
                // await lPGC.scrollLoadMore.scrollIntoView();

                await  lPGC.seeMoreCourierButton.waitForExist();
                if (expect(lPGC.seeMoreCourierButton).toHaveValueContaining('Load More')) {
        
                    await lPGC.seeMoreCourierButton.click();
        
                }

               
                const GLSId = await $("(//td[@class='gls'])[1]");
                
                 GLS = await GLSId.getAttribute('class');
                  
                 console.log("GLS=================",GLS);
        
                if (GLS == "gls") {
        
                    await browser.pause(3000);
                    // await lPGC.GLSScrollAction.scrollIntoView();
                    console.log("GLS1=================",GLS);
                    await lPGC.GLS.click();
                    await browser.pause(2000);
                    await lPGC.courierButtonNextAllCourier.click();
                }else {
                    console.log("\n=======================================================================================\n");
                    console.log("----------------------------" + "GLS Courier Not Found " + "------------------------------\n");
                    console.log("=======================================================================================\n");
                    return;
        
                }
        
        
                await browser.pause(2000);
      })

    //------------------------------------------ Review & Confirm GLS Single Domestic----------------------------------

    it('Review & Confirm GLS Single Domestic', async () => {

        if (expect(lPGC.courierName).toHaveText("GLS")) {
            const CourierName = await lPGC.courierName.getText();
            console.log("\n==========================================================================\n");
            console.log("     ------------------ " + "Courier Name: " + CourierName + " --------------\n");
            console.log("==========================================================================\n");

        } else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found " + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }

        await utilities.ReviewConfirm();
    })

    //------------------------------------------ Label Print & Download GLS Single Domestic----------------------------------

    it('Label Print & Download GLS Single Domestic', async () => {

        await browser.pause(5000);
        
        if (GLS == "gls") {
        await utilities.LabelPrintDownload();
        }else {
            console.log("\n=======================================================================================\n");
            console.log("----------------------------" + "GLS Courier Not Found " + "------------------------------\n");
            console.log("=======================================================================================\n");
            return;

        }


    })


     //------------------------------------------  Label print and Download Done Single Domestic----------------------------------

     it(' Label print and Download Done Single Domestic', async () => {

        await browser.pause(2000);
        await lPGC.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Single Domestic "+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})


    





})