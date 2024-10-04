import InternationalSingleParcel from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('International Single Parcel', () => {

    const iSP = new InternationalSingleParcel();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address -------------------------

    it('Destination Address International Single Parcel', async () => {



        await iSP.firstNameDestination.setValue("Tamim");
        await iSP.lastNameDestination.setValue("Buiyan");
        await iSP.companyNameDestination.setValue("Ship Simple");

        const valueCounty = await iSP.selectCountryDestination.getValue();


        await iSP.selectCountryDestination.selectByIndex(2);
        await iSP.clickSelectStreetDestination.setValue("4900 Bow St");
        await browser.pause(7000);

        await iSP.selectStreetDestination.click();
        await browser.pause(4000);

        await iSP.unitNumberDestination.setValue("40");
        await iSP.phoneNumberDestination.setValue("4079472341");
        await iSP.emailDestination.setValue("tamim@yopmail.com");
        await iSP.orderDestination.setValue("13111");
        await iSP.invoiceDestination.setValue("13111");
        await iSP.residenceAddresDestination.click();

        await browser.pause(5000);
        await iSP.nextButtonDestination.click();
        await browser.pause(4000);

        //--------------------------------- suggest adress click -------------------------

        // if (expect(iSP.suggestedAddressClickForDHL).toHaveValueContaining('Use Entered Address')) {

        //     await iSP.suggestedAddressClickForDHL.click();

        // }

        // await browser.pause(7000);



    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Single Parcel-------------------------


    it('Lets Build Your Commercial Invoice International Single Parcel', async () => {

        await iSP.package.click();
        await iSP.selcetShipmentPurpose.selectByIndex(5);


        await iSP.itemDescription.setValue("For Testing Purpose");
        await iSP.quantity.setValue("10");
        await iSP.selectPackage.selectByIndex(3);
        await iSP.weightItem.setValue("20");
        await iSP.valueItem.setValue("20");
        await browser.pause(7000);
        await iSP.selectUnits.selectByIndex(10);
        await browser.pause(3000);
        await iSP.countryForMade.click();
        await iSP.clickCountry.click();

        await iSP.HSCode.click();
        await iSP.HSCode.setValue("220");
        await browser.pause(7000);
        await iSP.nextButtonForItem.click();
        await browser.pause(7000);
    })


    it('Lets Build Your Commercial Invoice select Who WillPay International Single Parcel', async () => {

        await iSP.selectWhoWillPay.selectByIndex(2);
        await iSP.nextButtonForShip.click();
        await browser.pause(3000);
    })

    it('Lets Build Your Commercial Invoice Next International Single Parcel', async () => {


        await iSP.nextButtonForShipConfirm.click();
        await browser.pause(5000);

    })


  //  --------------------------------- Enter Value of percel International Single Parcel-------------------------


    it('Enter Value of percel International Single Parcel', async () => {

        await iSP.lengthPercel.setValue("12");
        await iSP.widthPercel.setValue("6");
        await iSP.heightPercel.setValue("10");
        await iSP.weightPercel.setValue("20");
        await iSP.weightMeasurePercel.click();
        await iSP.shipmentProtection.click();
        // await iSP.valueOfShipmentProtection.setValue("100");
        await iSP.nextButtonBuilderShipment.click();
        await browser.pause(5000);




    })




    //--------------------------------- Select DHL Courier International Single Parcel-------------------------


    it('Select DHL courier International Single Parcel', async () => {

        await browser.pause(7000);
        await iSP.DHLCLick.click();
        await iSP.DHLNextButton.click();
        await browser.pause(7000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Single Parcel----------------------------------

    
    it('Review & Confirm DHL Courier International Single Parcel', async () => {

        await iSP.confirmInformation.click();
        await iSP.labelPurchaseButton.click();
        await browser.pause(5000); 

    })

//------------------------------------------ Label Print & Download International Single Parcel----------------------------------

    it('Label Print & Download DHL Courier International Single Parcel', async () => {

        await iSP.downloadLabel.click();
        await browser.pause(5000);
        await iSP.printLabel.click();
        await browser.pause(5000); 

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