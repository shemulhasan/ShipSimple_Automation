import QuickQuoteDHL from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Quick Quote DHL', () => {

    const qQD = new QuickQuoteDHL();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Quick Quote  DHL-------------------------

    it('Quick Quote DHL', async () => {


        await qQD.quickQuoteClick.click();
        await browser.pause(5000);


    })


    //--------------------------------- Quick Quote Origin Destination address  DHL-------------------------

    it('Quick Quote Origin Destination postal code province country address DHL', async () => {


        await qQD.originPostalCode.setValue("N3L 3E1");
        await browser.pause(3000);
        await qQD.originPostalCodeSelect.click(); 

        await qQD.destinationCountrySelectDHL.selectByIndex(2);
        await qQD.destinationPostalCode.setValue("50036");
        await browser.pause(3000);
        await qQD.destinationPostalCodeSelect.click();

        await qQD.whatyouSendSelect.selectByIndex(1);
        await qQD.lengthDimensions.setValue(12);
        await qQD.widthDimensions.setValue(6);
        await qQD.heightDimensions.setValue(10);
        await qQD.weightDimensions.setValue(60);
        await qQD.getQuoteButton.click();
        await browser.pause(2000);
        // await qQD.getNewQuoteScroll.waitForDisplayed();
        await qQD.getNewQuoteScroll.scrollIntoView();
        await qQD.completeThisShipmetButton.click();
        await browser.pause(5000);


    })


    //---------------------------------Quick Quote Origin address  DHL-------------------------


    it('Quick Quote Origin  address DHL', async () => {


        await qQD.firstNameDestination.setValue("Tamim");
        await qQD.lastNameDestination.setValue("Bhuiyan");
        await qQD.phoneNumberDestination.setValue("5767435675");
        await qQD.emailDestination.setValue("tamim@yopmail.com");
        await qQD.companyNameDestination.setValue("Toto Company");

        await qQD.selectCountryDestination.selectByIndex(1);
        await qQD.clickSelectStreetDestination.setValue("2 Queenston St"); //K2H 1E5
        // await qQD.originStreetAddress.setValue("4 Brant Rd");
        await qQD.selectStreetDestination.click();
       
        await qQD.unitNumberDestination.setValue("6");
        await qQD.orderDestination.setValue("19");
        await qQD.donetButtonDestination.click();
        await browser.pause(3000);

        


    })



    //---------------------------------Quick Quote Destination Address DHL-------------------------

    it(' Quick Quote Destination Address DHL', async () => {

        await qQD.svgEditIconDestination.click();
        
        await utilities.QuickQuoteDestination();

        await qQD.clickSelectStreetDestination.setValue("PO Box 50036");
        await browser.pause(2000);

        await qQD.selectStreetDestination.click();
        await browser.pause(4000);

        await qQD.donetButtonDestination.click();
        await browser.pause(5000);



        await browser.pause(2000);



    })



    //---------------------------------Quick Quote Let's your Build Shipment DHL-------------------------

    it('Lets Build Your Commercial Invoice International DHL', async () => {

        await qQD.package.click();
        await qQD.selcetShipmentPurpose.selectByIndex(4);


        await qQD.selectWhoWillPay.selectByIndex(2);

        await qQD.lengthPercel.setValue("12");
        await qQD.widthPercel.setValue("6");
        await qQD.heightPercel.setValue("10");
        await qQD.weightPercel.setValue("60");
        await qQD.weightMeasurePercel.click();

        
        await qQD.quantity.setValue("3");
        await qQD.selectPackage.selectByIndex(3);
        await qQD.itemDescription.setValue("For Testing Purpose");
        await qQD.weightItem.setValue("20");
        await qQD.valueItem.setValue("30");
        await qQD.countryForMade.click();
        await qQD.clickCountry.click();
        await browser.pause(2000);

        await qQD.HSCode.click();
        await qQD.HSCode.setValue("220");
        
        await qQD.shipmentProtection.click();
        await browser.pause(2000);

        await qQD.invoiceNumberCheck.click();
        await qQD.invoiceNumber.setValue("20");
        await qQD.additionalInvoiceInformation.setValue("Only for Testing");

        await browser.pause(2000);
        await qQD.nextButtonForShip.click();

        await browser.pause(2000);
        
    })


    




    //--------------------------------- Select DHL Courier Quick Quote DHL-------------------------


    it('Select DHL courier Quick Quote DHL', async () => {

        await qQD.DHLCLick.waitForExist();
        await qQD.DHLCLick.click();
        await qQD.DHLNextButton.click();
        await browser.pause(3000);



    })


    //------------------------------------------ Label Print & Download Quick Quote DHL Courier ----------------------------------

    
    it('Review & Confirm Quick Quote DHL Courier', async () => {

        await utilities.ReviewConfirm();

    })

//------------------------------------------ Label Print & Download Quick Quote DHL----------------------------------

    it('Label Print & Download DHL Courier Quick Quote DHL', async () => {

        await utilities.LabelPrintDownload();


    })




 //------------------------------------------  Label print and Download Done Quick Quote DHL----------------------------------

 it(' Label print and Download Done Quick Quote DHL', async () => {

    await browser.pause(2000);
    await qQD.done.click();
    await browser.takeScreenshot();
    await browser.pause(2000);
    console.log("\n=======================================================================================\n");
    console.log("----------------------------"+" Label print and Download Done Quick Quote DHL"+"------------------------------\n");
    console.log("=======================================================================================\n");




})









})