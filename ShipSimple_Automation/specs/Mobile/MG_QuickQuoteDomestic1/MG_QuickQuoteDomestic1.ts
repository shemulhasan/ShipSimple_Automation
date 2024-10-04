import QuickQuotePurolator from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Quick Quote Domestic Shipment', () => {

    const qQP = new QuickQuotePurolator();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Quick Quote  Domestic Shipment-------------------------

    it('Quick Quote Domestic Shipment', async () => {


        await qQP.quickQuoteClick.click();
        await browser.pause(5000);


    })


    //--------------------------------- Quick Quote Origin Destination address  Domestic Shipment-------------------------

    it('Quick Quote Origin Destination postal code province country address Domestic Shipment', async () => {


        await qQP.originPostalCode.setValue("N3L 3E1");
        await browser.pause(3000);
        await qQP.originPostalCodeSelect.click(); 

        await qQP.destinationPostalCode.setValue("L1V 3M9");
        await browser.pause(3000);
        await qQP.destinationPostalCodeSelect.click();

        await qQP.whatyouSendSelect.selectByIndex(1);
        await qQP.lengthDimensions.setValue(34);
        await qQP.widthDimensions.setValue(34);
        await qQP.heightDimensions.setValue(34);
        await qQP.weightDimensions.setValue(34);
        await qQP.getQuoteButton.click();
        await browser.pause(5000);
        await qQP.completeThisShipmetButton.click();
        await browser.pause(5000);


    })


    //---------------------------------Quick Quote Origin address  Domestic Shipment-------------------------


    it('Quick Quote Origin  address Domestic Shipment', async () => {


        await qQP.originFirstName.setValue("Tamim");
        await browser.pause(3000);
        await qQP.originLastName.setValue("Bhuiyan");
        await qQP.originCompanyName.setValue("Toto Company");
        await browser.pause(3000);

        await qQP.originStreetAddress.setValue("4 Brant Rd");
        await qQP.originStreetAddressSelect.click();
       
        await qQP.originUnitNumber.setValue("6");
        await qQP.originPhoneNumber.setValue("3473473947");
        await qQP.originOrderReference.setValue("19");
        await qQP.originNextButton.click();
        await browser.pause(5000);

        


    })



    //---------------------------------Quick Quote Destination Address Domestic Shipment-------------------------

    it(' Quick Quote Destination Domestic Shipment ', async () => {


        await utilities.QuickQuoteDestination();

        await qQP.clickSelectStreetDestination.setValue("1298 Kingston Rd");
        await browser.pause(5000);

        await qQP.selectStreetDestination.click();
        await browser.pause(4000);

        await qQP.nextButtonDestination.click();
        await browser.pause(5000);



    })


    //---------------------------------Quick Quote Let's your Build Shipment Domestic Shipment-------------------------

    it('Quick Quote Lets your Build Shipment Domestic Shipment', async () => {

        await qQP.originNextButtonBuild.click();



    })



    //---------------------------------Quick Quote Select Domestic Shipment courier -------------------------


    it('Quick Quote From Select Domestic Shipment Courier', async () => {

        await browser.pause(7000);

        await qQP.selectACourier.click();
        await browser.pause(7000);
        await qQP.courierButtonNextAllCourier.click();
        await browser.pause(2000);


    })


    //------------------------------------------Quick Quote Review & Confirm Domestic Shipment courier----------------------------------

    it('Quick Quote Review & Confirm Domestic Shipment Courier', async () => {


        await utilities.ReviewConfirm();

    })



    //------------------------------Quick Quote Domestic Shipment courier Label Print & Download --------------------------------

    it('Quick Quote Label Print & Download Domestic Shipment courier', async () => {


        await utilities.LabelPrintDownload();


    })



     //------------------------------------------  Label print and Download Done Quick Quote Domestic Shipment----------------------------------

     it(' Label print and Download Done Quick Quote Domestic Shipment', async () => {

        await browser.pause(2000);
        await qQP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Quick Quote Domestic Shipment"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})