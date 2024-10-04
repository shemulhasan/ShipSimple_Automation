import InternationalInsuranceDefault from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('International Insurance Default', () => {

    const iID = new InternationalInsuranceDefault();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address International Insurance Default -------------------------

    it('Destination Address International Insurance Default', async () => {



        await iID.firstNameDestination.setValue("Tamim");
        await iID.lastNameDestination.setValue("Buiyan");
        await iID.companyNameDestination.setValue("Ship Simple");

        const valueCounty = await iID.selectCountryDestination.getValue();


        await iID.selectCountryDestination.selectByIndex(2);
        await iID.clickSelectStreetDestination.setValue("4900 Bow St");
        await browser.pause(7000);

        await iID.selectStreetDestination.click();
        await browser.pause(4000);

        await iID.unitNumberDestination.setValue("40");
        await iID.phoneNumberDestination.setValue("4079472341");
        await iID.emailDestination.setValue("tamim@yopmail.com");
        await iID.orderDestination.setValue("13111");
        await iID.invoiceDestination.setValue("13111");
        await iID.residenceAddresDestination.click();

        await browser.pause(5000);
        await iID.nextButtonDestination.click();
        await browser.pause(4000);

        //--------------------------------- suggest adress click -------------------------

        // if (expect(iID.suggestedAddressClickForDHL).toHaveValueContaining('Use Entered Address')) {

        //     await iID.suggestedAddressClickForDHL.click();

        // }

        // await browser.pause(7000);



    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Insurance Default-------------------------


    it('Lets Build Your Commercial Invoice International Insurance Default', async () => {

        await iID.package.click();
        await iID.selcetShipmentPurpose.selectByIndex(5);


        await iID.itemDescription.setValue("For Testing Purpose");
        await iID.quantity.setValue("10");
        await iID.selectPackage.selectByIndex(3);
        await iID.weightItem.setValue("20");
        await iID.valueItem.setValue("20");
        await browser.pause(7000);
        await iID.selectUnits.selectByIndex(10);
        await browser.pause(3000);
        await iID.countryForMade.click();
        await iID.clickCountry.click();

        await iID.HSCode.click();
        await iID.HSCode.setValue("220");
        await browser.pause(7000);
        await iID.nextButtonForItem.click();
        await browser.pause(7000);
    })


    it('Lets Build Your Commercial Invoice select Who WillPay International Insurance Default', async () => {

        await iID.selectWhoWillPay.selectByIndex(2);
        await iID.nextButtonForShip.click();
        await browser.pause(3000);
    })

    it('Lets Build Your Commercial Invoice Next International Insurance Default', async () => {


        await iID.nextButtonForShipConfirm.click();
        await browser.pause(5000);

    })


  //  --------------------------------- Enter Value of percel International Insurance Default-------------------------


    it('Enter Value of percel International Insurance Default', async () => {

        await iID.lengthPercel.setValue("12");
        await iID.widthPercel.setValue("6");
        await iID.heightPercel.setValue("10");
        await iID.weightPercel.setValue("20");
        await iID.weightMeasurePercel.click();
        // await iID.shipmentProtection.click();
        await iID.valueOfShipmentProtection.setValue("100");
        await iID.nextButtonBuilderShipment.click();
        await browser.pause(5000);




    })




    //--------------------------------- Select DHL Courier International Insurance Default-------------------------


    it('Select DHL courier', async () => {

        await browser.pause(7000);
        await iID.DHLCLick.click();
        await iID.DHLNextButton.click();
        await browser.pause(7000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Insurance Default----------------------------------

    
    it('Review & Confirm DHL Courier International Insurance Default', async () => {

        await iID.confirmInformation.click();
        await iID.labelPurchaseButton.click();
        await browser.pause(5000); 

    })

//------------------------------------------ Label Print & Download International Insurance Default----------------------------------

    it('Label Print & Download DHL Courier International Insurance Default', async () => {

        await iID.downloadLabel.click();
        await browser.pause(5000);
        await iID.printLabel.click();
        await browser.pause(5000); 

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