import InternationalMultiPackage from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('International Multi Package', () => {

    const iMP = new InternationalMultiPackage();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address International MultiPackage-------------------------

    it('Destination Address InternationalMulti Package', async () => {


        await utilities.OriginAddress();

        await utilities.DestinationAddressInternationalSingleDocument();
       



    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Multi Package-------------------------


    it('Lets Build Your Commercial Invoice International Multi Package', async () => {

        await iMP.package.click();
        await iMP.selcetShipmentPurpose.selectByIndex(4);


        await iMP.selectWhoWillPay.selectByIndex(2);

        await utilities.LetsBuildYourShipmentWithnternationalMultiPackage();
        

        await iMP.invoiceNumberCheck.click();
        await iMP.invoiceNumber.setValue("20");
        await iMP.additionalInvoiceInformation.setValue("Only for Testing");

        await iMP.nextButtonForShip.waitForExist();
        await iMP.nextButtonForShip.click();

    })




    //--------------------------------- Select DHL Courier International Multi Package-------------------------


    it('Select DHL courier International Multi Package', async () => {

        await iMP.DHLCLick.waitForExist();
        await iMP.DHLCLick.click();
        await iMP.DHLNextButton.click();
        await browser.pause(7000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Multi Package----------------------------------

    
    it('Review & Confirm DHL Courier International Multi Package', async () => {

        await utilities.ReviewConfirm();

    })

//------------------------------------------ Label Print & Download International Multi Package----------------------------------

    it('Label Print & Download DHL Courier International Multi Package', async () => {

        
        await utilities.LabelPrintDownload();

    })


     //------------------------------------------  Label print and Download Done Domestic International Multi Package----------------------------------

     it(' Label print and Download Done International Multi Package', async () => {

        await browser.pause(2000);
        await iMP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done International Multi Package"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})










})