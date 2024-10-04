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
        await qQD.lengthDimensions.setValue(14);
        await qQD.widthDimensions.setValue(14);
        await qQD.heightDimensions.setValue(14);
        await qQD.weightDimensions.setValue(14);
        await qQD.getQuoteButton.click();
        await browser.pause(5000);
        await qQD.completeThisShipmetButton.click();
        await browser.pause(5000);


    })


    //---------------------------------Quick Quote Origin address  DHL-------------------------


    it('Quick Quote Origin  address DHL', async () => {


        await qQD.originFirstName.setValue("Tamim");
        await browser.pause(3000);
        await qQD.originLastName.setValue("Bhuiyan");
        await qQD.originCompanyName.setValue("Toto Company");
        await browser.pause(3000);

        await qQD.originStreetAddress.setValue("4 Brant Rd");
        await qQD.originStreetAddressSelect.click();
       
        await qQD.originUnitNumber.setValue("6");
        await qQD.originPhoneNumber.setValue("3473473947");
        await qQD.originOrderReference.setValue("19");
        await qQD.originNextButton.click();
        await browser.pause(5000);

        


    })



    //---------------------------------Quick Quote Destination Address DHL-------------------------

    it(' Quick Quote Destination Address DHL', async () => {


        await utilities.QuickQuoteDestination();

        await qQD.clickSelectStreetDestination.setValue("PO Box 50036");
        await browser.pause(5000);

        await qQD.selectStreetDestination.click();
        await browser.pause(4000);

        await qQD.nextButtonDestination.click();
        await browser.pause(5000);


        if (expect(qQD.suggestedAddressClickForDHL).toHaveValueContaining('Use Suggested Address')) {

            await qQD.suggestedAddressClickForDHL.click();

        }

        await browser.pause(5000);



    })



      //--------------------------------- suggest adress click Quick Quote DHL-------------------------


    //   it(' Quick Quote suggest adress for DHL', async () => {

        

    // })



    //---------------------------------Quick Quote Let's your Build Shipment DHL-------------------------

    it('Lets Build Your Commercial Invoice International DHL', async () => {

        await qQD.package.click();
        await qQD.selcetShipmentPurpose.selectByIndex(5);


        await qQD.itemDescription.setValue("For Testing Purpose");
        await qQD.quantity.setValue("10");
        await qQD.selectPackage.selectByIndex(3);
        await qQD.weightItem.setValue("20");
        await qQD.valueItem.setValue("20");
        await browser.pause(7000);
        await qQD.selectUnits.selectByIndex(10);
        await browser.pause(3000);
        await qQD.countryForMade.click();
        await qQD.clickCountry.click();

        await qQD.HSCode.click();
        await qQD.HSCode.setValue("220");
        await browser.pause(7000);
        await qQD.nextButtonForItem.click();
        await browser.pause(7000);
    })


    


    it('Lets Build Your Commercial Invoice select Who WillPay Quick Quote DHL', async () => {

        await qQD.selectWhoWillPay.selectByIndex(2);
        await qQD.nextButtonForShip.click();
        await browser.pause(3000);
    })

    it('Lets Build Your Commercial Invoice Next Quick Quote DHL', async () => {


        await qQD.nextButtonForShipConfirm.click();
        await browser.pause(5000);

    })


  //  --------------------------------- Enter Value of percel Quick Quote DHL-------------------------


    it('Enter Value of percel Quick Quote DHL', async () => {

        await qQD.lengthPercel.setValue("12");
        await qQD.widthPercel.setValue("6");
        await qQD.heightPercel.setValue("10");
        await qQD.weightPercel.setValue("20");
        await qQD.weightMeasurePercel.click();
        await qQD.shipmentProtection.click();
        // await qQD.valueOfShipmentProtection.setValue("100");
        await qQD.nextButtonBuilderShipment.click();
        await browser.pause(5000);




    })




    //--------------------------------- Select DHL Courier Quick Quote DHL-------------------------


    it('Select DHL courier Quick Quote DHL', async () => {

        await browser.pause(7000);
        await qQD.DHLCLick.click();
        await qQD.DHLNextButton.click();
        await browser.pause(7000);



    })


    //------------------------------------------ Label Print & Download Quick Quote DHL Courier ----------------------------------

    
    it('Review & Confirm Quick Quote DHL Courier', async () => {

        await qQD.confirmInformation.click();
        await qQD.labelPurchaseButton.click();
        await browser.pause(5000); 

    })

//------------------------------------------ Label Print & Download Quick Quote DHL----------------------------------

    it('Label Print & Download DHL Courier Quick Quote DHL', async () => {

        await qQD.downloadLabel.click();
        await browser.pause(5000);
        await qQD.printLabel.click();
        await browser.pause(5000); 

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