import InternationalInsuranceDefault from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('International Insurance Default', () => {

    const iID = new InternationalInsuranceDefault();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address International Insurance Default -------------------------

    it('Origin Destination Address International Insurance Default', async () => {

        await utilities.OriginAddress();

        await utilities.DestinationAddressInternationalSingleDocument();



    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Insurance Default-------------------------


    it('Lets Build Your Commercial Invoice International Insurance Default', async () => {

        await iID.package.click();
        await iID.selcetShipmentPurpose.selectByIndex(4);
        await iID.selectWhoWillPay.selectByIndex(2);

        await iID.lengthPercel.setValue("12");
        await iID.widthPercel.setValue("6");
        await iID.heightPercel.setValue("10");
        await iID.weightPercel.setValue("60");
        await iID.weightMeasurePercel.click();

        
        await iID.quantity.setValue("3");
        await iID.selectPackage.selectByIndex(3);
        await iID.itemDescription.setValue("For Testing Purpose");
        await iID.weightItem.setValue("20");
        await iID.valueItem.setValue("30");
        await iID.countryForMade.click();
        await iID.clickCountry.click();
        await browser.pause(2000);

        await iID.HSCode.click();
        await iID.HSCode.setValue("220");
       

        await iID.invoiceNumberCheck.click();
        await iID.invoiceNumber.setValue("20");
        await iID.additionalInvoiceInformation.setValue("Only for Testing");

        await browser.pause(2000);
        await iID.nextButtonForShip.click();

       
        
    })


   


    //--------------------------------- Select DHL Courier International Insurance Default-------------------------


    it('Select DHL courier', async () => {

        await iID.DHLCLick.waitForExist();
        await iID.DHLCLick.click();
        await iID.DHLNextButton.click();
        await browser.pause(2000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Insurance Default----------------------------------

    
    it('Review & Confirm DHL Courier International Insurance Default', async () => {

        await utilities.ReviewConfirm();

       

    })

//------------------------------------------ Label Print & Download International Insurance Default----------------------------------

    it('Label Print & Download DHL Courier International Insurance Default', async () => {

        await utilities.LabelPrintDownload();

       

    })



    
    //------------------------------------------  Label print and Download Done Domestic International Insurance Default----------------------------------

    it(' Label print and Download Done International Insurance Default', async () => {

        await browser.pause(2000);
        await iID.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done International Insurance Default"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})











})