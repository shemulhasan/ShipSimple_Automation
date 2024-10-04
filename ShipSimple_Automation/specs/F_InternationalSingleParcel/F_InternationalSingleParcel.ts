import InternationalSingleParcel from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('International Single Parcel', () => {

    const iSP = new InternationalSingleParcel();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address -------------------------

    it('Destination Address International Single Parcel', async () => {


        await utilities.OriginAddress();

        await utilities.DestinationAddressInternationalSingleDocument();

       


    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Single Parcel-------------------------


    it('Lets Build Your Commercial Invoice International Single Parcel', async () => {

        await iSP.package.click();
        await iSP.selcetShipmentPurpose.selectByIndex(4);


        await iSP.selectWhoWillPay.selectByIndex(2);

        await iSP.lengthPercel.setValue("12");
        await iSP.widthPercel.setValue("6");
        await iSP.heightPercel.setValue("10");
        await iSP.weightPercel.setValue("60");
        await iSP.weightMeasurePercel.click();

        
        await iSP.quantity.setValue("3");
        await iSP.selectPackage.selectByIndex(3);
        await iSP.itemDescription.setValue("For Testing Purpose");
        await iSP.weightItem.setValue("20");
        await iSP.valueItem.setValue("30");
        await iSP.countryForMade.click();
        await iSP.clickCountry.click();
        await browser.pause(2000);

        await iSP.HSCode.click();
        await iSP.HSCode.setValue("220");
        
        await iSP.shipmentProtection.click();
        await browser.pause(2000);

        await iSP.invoiceNumberCheck.click();
        await iSP.invoiceNumber.setValue("20");
        await iSP.additionalInvoiceInformation.setValue("Only for Testing");

        await browser.pause(2000);
        await iSP.nextButtonForShip.click();

        await browser.pause(2000);


    })









    //--------------------------------- Select DHL Courier International Single Parcel-------------------------


    it('Select DHL courier International Single Parcel', async () => {

        await iSP.DHLCLick.waitForExist();
        await iSP.DHLCLick.click();
        await iSP.DHLNextButton.click();
        await browser.pause(3000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Single Parcel----------------------------------

    
    it('Review & Confirm DHL Courier International Single Parcel', async () => {

        await utilities.ReviewConfirm();


    })

//------------------------------------------ Label Print & Download International Single Parcel----------------------------------

    it('Label Print & Download DHL Courier International Single Parcel', async () => {

        await utilities.LabelPrintDownload();

    })




 //------------------------------------------  Label print and Download Done Domestic International Single Parcel----------------------------------

 it(' Label print and Download Done International Single Parcel', async () => {

    await browser.pause(2000);
    await iSP.done.click();
    await browser.takeScreenshot();
    await browser.pause(2000);
    console.log("\n=======================================================================================\n");
    console.log("----------------------------"+" Label print and Download Done International Single Parcel"+"------------------------------\n");
    console.log("=======================================================================================\n");




})






})