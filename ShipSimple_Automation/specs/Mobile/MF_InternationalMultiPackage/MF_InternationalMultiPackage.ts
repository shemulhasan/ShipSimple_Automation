import InternationalMultiPackage from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('International Multi Package', () => {

    const iMP = new InternationalMultiPackage();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address International MultiPackage-------------------------

    it('Destination Address InternationalMulti Package', async () => {



        await iMP.firstNameDestination.setValue("Tamim");
        await iMP.lastNameDestination.setValue("Buiyan");
        await iMP.companyNameDestination.setValue("Ship Simple");

        const valueCounty = await iMP.selectCountryDestination.getValue();


        await iMP.selectCountryDestination.selectByIndex(2);
        await iMP.clickSelectStreetDestination.setValue("4900 Bowie Dr"); //4900 Bow St
        await browser.pause(7000);

        await iMP.selectStreetDestination.click();
        await browser.pause(4000);

        await iMP.unitNumberDestination.setValue("40");
        await iMP.phoneNumberDestination.setValue("4079472341");
        await iMP.emailDestination.setValue("tamim@yopmail.com");
        await iMP.orderDestination.setValue("13111");
        await iMP.invoiceDestination.setValue("13111");
        // await iMP.residenceAddresDestination.click();

        await browser.pause(5000);
        await iMP.nextButtonDestination.click();
        await browser.pause(4000);

        //--------------------------------- suggest adress click -------------------------

        // if (expect(iMP.suggestedAddressClickForDHL).toHaveValueContaining('Use Entered Address')) {

        //     await iMP.suggestedAddressClickForDHL.click();

        // }

        // await browser.pause(7000);



    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Multi Package-------------------------


    it('Lets Build Your Commercial Invoice International Multi Package', async () => {

        await iMP.package.click();
        await iMP.selcetShipmentPurpose.selectByIndex(5);


        await iMP.itemDescription.setValue("For Testing Purpose");
        await iMP.quantity.setValue("10");
        await iMP.selectPackage.selectByIndex(3);
        await iMP.weightItem.setValue("20");
        await iMP.valueItem.setValue("20");
        await browser.pause(7000);
        await iMP.selectUnits.selectByIndex(10);
        await browser.pause(3000);
        await iMP.countryForMade.click();
        await iMP.clickCountry.click();

        await iMP.HSCode.click();
        await iMP.HSCode.setValue("220");
        await browser.pause(7000);
        await iMP.nextButtonForItem.click();
        await browser.pause(7000);
    })


    it('Lets Build Your Commercial Invoice select Who WillPay International Multi Package', async () => {

        await iMP.selectWhoWillPay.selectByIndex(2);
        await iMP.nextButtonForShip.click();
        await browser.pause(3000);
    })

    it('Lets Build Your Commercial Invoice Next International Multi Package', async () => {


        await iMP.nextButtonForShipConfirm.click();
        await browser.pause(5000);

    })


  //  --------------------------------- Enter Value of percel International Multi Package-------------------------


    it('Enter Value of percel International Multi Package', async () => {

       
       
        await utilities.LetsBuildYourShipmentWithnternationalMultiPackage();
       
        




    })




    //--------------------------------- Select DHL Courier International Multi Package-------------------------


    it('Select DHL courier International Multi Package', async () => {

        await browser.pause(7000);
        await iMP.DHLCLick.click();
        await iMP.DHLNextButton.click();
        await browser.pause(7000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Multi Package----------------------------------

    
    it('Review & Confirm DHL Courier International Multi Package', async () => {

        await iMP.confirmInformation.click();
        await iMP.labelPurchaseButton.click();
        await browser.pause(5000); 

    })

//------------------------------------------ Label Print & Download International Multi Package----------------------------------

    it('Label Print & Download DHL Courier International Multi Package', async () => {

        await iMP.downloadLabel.click();
        await browser.pause(5000);
        await iMP.printLabel.click();
        await browser.pause(5000); 

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