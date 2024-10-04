import LabelPurchaseByAllCourierUtilities from '../Locators/Locators.js';
class Utilities {


    //------------------------- uat site test server---------------------------
    public Signup_URL: string = "https://uat.shipsimple.app/signup";
    public Signin_URL: string = "https://uat.shipsimple.app/";

   //----------------------- Dev test site test server------------------------
    // public Signup_URL: string = "https://test-front.shipsimple.team/signup";
    // public Signin_URL: string = "https://test-front.shipsimple.team/";

   


    // This url for dev test site "https://test-front.shipsimple.team/";

    
    // This url for uat test site "https://uat.shipsimple.app/"






    public async Signin() {

        const emailSign = $("//input[@id='email']");
        const passSign = $("//input[@id='password']");


        await emailSign.setValue("tamim542.prolific@gmail.com"); //tamim542.prolific+2@yopmail.com
        await passSign.setValue("123456789T#");

        await browser.takeScreenshot();
        await $("//span[contains(text(),'Sign In')]").click();


    }


    public async SuggestEnterAddress() {

        const SEA = new LabelPurchaseByAllCourierUtilities();

        if (expect(SEA.useSuggestAddress).toHaveValueContaining('Use Suggested Address')) {

            await SEA.useSuggestAddress.click();

        }
    }


    /* -----------------------------------------------------------------------------------
      
                 ------------- Single Domestic Start ----------------

    ---------------------------------------------------------------------------------------*/


    //--------------------------------- Origin Address -------------------------


    public async OriginAddress() {

        const origin = new LabelPurchaseByAllCourierUtilities();

        await origin.useProfileAdressForOrigin.click();
      

     
        await browser.takeScreenshot();
        await browser.pause(4000);

    }




    //--------------------------------- Destination Address -------------------------

    public async Destination() {

        const desti = new LabelPurchaseByAllCourierUtilities();

        await desti.destinationAddressManual.click();
        await browser.pause(4000);

        await desti.firstNameDestination.setValue("Tamim");
        await desti.lastNameDestination.setValue("Buiyan");
        await desti.phoneNumberDestination.setValue("5767435675");
        await desti.emailDestination.setValue("tamim@yopmail.com");
        await desti.companyNameDestination.setValue("Ship Simple");


        await desti.selectCountryDestination.selectByIndex(1);
        await desti.clickSelectStreetDestination.setValue("22 Manitoba Dr"); //4 Brant Rd /100-525 Fafard Ave /PO Box 23001 Rpo Elmwood
        await desti.selectStreetDestination.click();

        await browser.pause(3000);

        // await desti.selectStreetDestination.click();
        // await browser.pause(4000);

        await desti.unitNumberDestination.setValue("40");
       
        
        await desti.orderDestination.setValue("1");
        await desti.invoiceDestination.setValue("3");

        await browser.takeScreenshot();
        await browser.pause(5000);
        await desti.donetButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(2000);

    }


    //--------------------------------- Lets Build Your Shipment -------------------------

    public async LetsBuildYourShipment() {

        const lBYS = new LabelPurchaseByAllCourierUtilities();

        await lBYS.lengthPercel.setValue("2");
        await lBYS.widthPercel.setValue("1");
        await lBYS.heightPercel.setValue("3");
        await lBYS.weightPercel.setValue("2");
        // await lBYS.weightMeasurePercel.click();
        await browser.takeScreenshot();
        await lBYS.nextButtonBuilderShipmentScroll.scrollIntoView();
        await browser.pause(2000);
        await lBYS.nextButtonBuilderShipment.click();
     
        await browser.takeScreenshot();
        await browser.pause(7000);
    }


    //------------------------------------------ Review & Confirm ----------------------------------

    public async ReviewConfirm() {

        const rW = new LabelPurchaseByAllCourierUtilities();

        
        await rW.i_confirm.waitForExist();
        await rW.i_confirm.click();
        await rW.i_confirm.click();
        await rW.labelPurchaseButtonAllCourier.waitForClickable();
        await rW.labelPurchaseButtonAllCourier.click();
        await browser.takeScreenshot();
        // browser.pause(5000);
        await browser.takeScreenshot();

    }



    //------------------------------------------ Label Print & Download ----------------------------------

    public async LabelPrintDownload() {

        const lPD = new LabelPurchaseByAllCourierUtilities();

      
        // await lPD.downloadLabel.getActiveElement();
        // await lPD.purolator_Xpresspost.waitForDisplayed();
        await browser.pause(2000);
        await lPD.downloadLabel.waitForExist();
        await lPD.downloadLabel.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        // await lPD.printLabel.getActiveElement();
        await lPD.printLabel.click();
        await browser.takeScreenshot();
        await browser.pause(5000);

    }


    /* ------------------------------------------------------------------------------------
      
                   ------------- Single Domestic End ----------------

    --------------------------------------------------------------------------------------*/





    /* -----------------------------------------------------------------------------------
      
                 ------------- Single Domestic Residential  Start ----------------

    ---------------------------------------------------------------------------------------*/


    //--------------------------------- Destination Address -------------------------

    public async DestinationResidential() {

        const desti = new LabelPurchaseByAllCourierUtilities();

      //  await desti.newShipment.click();
        await desti.destinationAddressManual.click();
        await browser.pause(2000);

        await desti.firstNameDestination.setValue("Tamim");
        await desti.lastNameDestination.setValue("Buiyan");
        await desti.companyNameDestination.setValue("Ship Simple");


        await desti.selectCountryDestination.selectByIndex(1);
        await desti.clickSelectStreetDestination.setValue("4 Brant Rd");
        await browser.pause(7000);

        await desti.selectStreetDestination.click();
        await browser.pause(4000);

        await desti.unitNumberDestination.setValue("40");
        await desti.phoneNumberDestination.setValue("5767435675");
        await desti.emailDestination.setValue("tamim@yopmail.com");
        await desti.orderDestination.setValue("13111");
        await desti.invoiceDestination.setValue("13111");
        await desti.residenceAddresDestination.click();

        await browser.pause(5000);
        await browser.takeScreenshot();
        await desti.donetButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(7000);

    }


    /* -----------------------------------------------------------------------------------
      
                 ------------- Single Domestic Residential  End ----------------

    ---------------------------------------------------------------------------------------*/



    /* -----------------------------------------------------------------------------------
     
                ------------- Single Domestic Insurance  Start ----------------

   ---------------------------------------------------------------------------------------*/




    //--------------------------------- Lets Build Your Shipment with Insurance -------------------------

    public async LetsBuildYourShipmentWithInsurance() {

        const lBYS = new LabelPurchaseByAllCourierUtilities();
        await browser.takeScreenshot();
        await lBYS.lengthPercel.setValue("12");
        await lBYS.widthPercel.setValue("6");
        await lBYS.heightPercel.setValue("10");
        await lBYS.weightPercel.setValue("11");
        await lBYS.shipmentProtection.click();
        await lBYS.valueOfShipmentProtection.setValue("100");
        await browser.pause(2000);
        await lBYS.nextButtonBuilderShipment.click();
        await browser.takeScreenshot();
        await browser.pause(7000);
    }


    /* -----------------------------------------------------------------------------------
      
                 ------------- Single Domestic Insurance  End ----------------

    ---------------------------------------------------------------------------------------*/



    /* -----------------------------------------------------------------------------------
      
                 ------------- Single Domestic Signature  Start ----------------

    ---------------------------------------------------------------------------------------*/




    //--------------------------------- Lets Build Your Shipment with Signature -------------------------

    public async LetsBuildYourShipmentWithSignature() {

        const lBYS = new LabelPurchaseByAllCourierUtilities();

        await lBYS.lengthPercel.setValue("12");
        await lBYS.widthPercel.setValue("6");
        await lBYS.heightPercel.setValue("10");
        await lBYS.weightPercel.setValue("11");
        await browser.pause(3000);
        await lBYS.signatureCheck.click();
        await lBYS.nextButtonBuilderShipment.click();
        await browser.pause(3000);
    }


    /* -----------------------------------------------------------------------------------
      
                 ------------- Single Domestic Signature  End ----------------

    ---------------------------------------------------------------------------------------*/




    /* -----------------------------------------------------------------------------------
      
                 ------------- Multi-Package Domestic Start ----------------

    ---------------------------------------------------------------------------------------*/




    //--------------------------------- Multi-Package Domestic Signature -------------------------

    public async LetsBuildYourShipmentWithMultiPackage() {

        const lBYS = new LabelPurchaseByAllCourierUtilities();

        // await lBYS.scrollAdditionalOptions.scrollIntoView();
        await lBYS.lengthPercel1.setValue("12");
        await lBYS.widthPercel1.setValue("6");
        await lBYS.heightPercel1.setValue("10");
        await lBYS.weightPercel1.setValue("11");
        await lBYS.addPercel1.click();
        await browser.takeScreenshot();

        await lBYS.lengthPercel2.setValue("12");
        await lBYS.widthPercel2.setValue("6");
        await lBYS.heightPercel2.setValue("10");
        await lBYS.weightPercel2.setValue("11");
        await lBYS.addPercel1.click();
        await browser.takeScreenshot();

        await lBYS.lengthPercel3.setValue("12");
        await lBYS.widthPercel3.setValue("6");
        await lBYS.heightPercel3.setValue("10");
        await lBYS.weightPercel3.setValue("11");
        await lBYS.addPercel1.click();
        await browser.takeScreenshot();

        await lBYS.lengthPercel4.setValue("12");
        await lBYS.widthPercel4.setValue("6");
        await lBYS.heightPercel4.setValue("10");
        await lBYS.weightPercel4.setValue("11");
        await browser.pause(2000);
        await browser.takeScreenshot();


        await lBYS.nextButtonBuilderShipment.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
    }


    /* -----------------------------------------------------------------------------------
      
                 ------------- Multi-Package Domestic  End ----------------

    ---------------------------------------------------------------------------------------*/


    /* -----------------------------------------------------------------------------------
      
                 ------------- International Single Document Start ----------------

    ---------------------------------------------------------------------------------------*/





    //--------------------------------- Destination Address International Single Document -------------------------



    public async DestinationAddressInternationalSingleDocument() {

        const dAISD = new LabelPurchaseByAllCourierUtilities();

        await dAISD.destinationAddressManual.click();

        await dAISD.firstNameDestination.setValue("Tamim");
        await dAISD.lastNameDestination.setValue("Buiyan");
        await dAISD.companyNameDestination.setValue("Ship Simple");

        const valueCounty = await dAISD.selectCountryDestination.getValue();


        await dAISD.selectCountryDestination.selectByIndex(2);
        await dAISD.clickSelectStreetDestination.setValue("14312 Franklin Ave Ste A"); //14761 Franklin Ave Ste A
        await browser.pause(7000);

        await dAISD.selectStreetDestination.click();
        await browser.pause(4000);

        await dAISD.unitNumberDestination.setValue("40");
        await dAISD.phoneNumberDestination.setValue("4079472341");
        await dAISD.emailDestination.setValue("tamim@yopmail.com");
        await dAISD.orderDestination.setValue("13111");
        await dAISD.invoiceDestination.setValue("13111");
        await dAISD.residenceAddresDestination.click();

        await browser.pause(5000);
        await dAISD.donetButtonDestination.click();
        await browser.pause(4000);

    }



    /* -----------------------------------------------------------------------------------
      
                 ------------- International Single Document End ----------------

    ---------------------------------------------------------------------------------------*/



    /* -----------------------------------------------------------------------------------
      
                 ------------- Multi-Package Domestic Start ----------------

    ---------------------------------------------------------------------------------------*/




    //--------------------------------- International Multi-Package -------------------------

    public async LetsBuildYourShipmentWithnternationalMultiPackage() {

        const lBYS = new LabelPurchaseByAllCourierUtilities();

        await lBYS.lengthPercel1.setValue("12");
        await lBYS.widthPercel1.setValue("6");
        await lBYS.heightPercel1.setValue("10");
        await lBYS.weightPercel1.setValue("15");

        await lBYS.quantity.setValue("3");
        await lBYS.selectPackage.selectByIndex(3);
        await lBYS.itemDescription.setValue("For Testing Purpose");
        await lBYS.weightItem.setValue("5");
        await lBYS.valueItem.setValue("30");
        await lBYS.countryForMade.click();
        await lBYS.clickCountry.click();
        await browser.pause(2000);
        await lBYS.HSCode.click();
        await lBYS.HSCode.setValue("220");
        await lBYS.addPercel1.click();



        await lBYS.lengthPercel2.setValue("12");
        await lBYS.widthPercel2.setValue("6");
        await lBYS.heightPercel2.setValue("10");
        await lBYS.weightPercel2.setValue("12");

        await lBYS.quantity2.setValue("3");
        await lBYS.selectPackage2.selectByIndex(3);
        await lBYS.itemDescription2.setValue("For Testing Purpose");
        await lBYS.weightItem2.setValue("4");
        await lBYS.valueItem2.setValue("30");
        await lBYS.countryForMade2.click();
        await lBYS.clickCountry2.click();
        await browser.pause(2000);
        await lBYS.HSCode2.click();
        await lBYS.HSCode2.setValue("220");
        // await lBYS.addPercel2.click();



        // await lBYS.lengthPercel3.setValue("12");
        // await lBYS.widthPercel3.setValue("6");
        // await lBYS.heightPercel3.setValue("10");
        // await lBYS.weightPercel3.setValue("4");
        // await lBYS.addPercel3.click();

        // await lBYS.quantity3.setValue("2");
        // await lBYS.selectPackage3.selectByIndex(3);
        // await lBYS.itemDescription3.setValue("For Testing Purpose");
        // await lBYS.weightItem3.setValue("2");
        // await lBYS.valueItem3.setValue("30");
        // await lBYS.countryForMade3.click();
        // await lBYS.clickCountry3.click();
        // await browser.pause(2000);
        // await lBYS.HSCode3.click();
        // await lBYS.HSCode3.setValue("220");



        // await lBYS.lengthPercel4.setValue("2");
        // await lBYS.widthPercel4.setValue("6");
        // await lBYS.heightPercel4.setValue("4");
        // await lBYS.weightPercel4.setValue("9");

        // await lBYS.quantity4.setValue("3");
        // await lBYS.selectPackage4.selectByIndex(3);
        // await lBYS.itemDescription4.setValue("For Testing Purpose");
        // await lBYS.weightItem4.setValue("3");
        // await lBYS.valueItem4.setValue("30");
        // await lBYS.countryForMade4.click();
        // await lBYS.clickCountry4.click();
       
        // await lBYS.HSCode4.click();
        // await lBYS.HSCode4.setValue("220");

        await lBYS.shipmentProtection.click();

        // await lBYS.nextButtonBuilderShipment.click();
        await browser.pause(2000);
    }


    /* -----------------------------------------------------------------------------------
      
                 ------------- International Multi-Package End ----------------

    ---------------------------------------------------------------------------------------*/






    /* -----------------------------------------------------------------------------------
      
                 ------------- Quick Quote Purolator Start ----------------

    ---------------------------------------------------------------------------------------*/






    //--------------------------------- Destination Address Quick Quote-------------------------

    public async QuickQuoteDestination() {

        const desti = new LabelPurchaseByAllCourierUtilities();

        // await desti.newShipment.click();
        // await browser.pause(4000);

        await desti.firstNameDestination.setValue("Tamim");
        await desti.lastNameDestination.setValue("Buiyan");
        await desti.companyNameDestination.setValue("Ship Simple");


        // await desti.selectCountryDestination.selectByIndex(1);


        await desti.unitNumberDestination.setValue("40");
        await desti.phoneNumberDestination.setValue("5767435675");
        await desti.emailDestination.setValue("tamim@yopmail.com");
        await desti.orderDestination.setValue("13111");
        await desti.invoiceDestination.setValue("13111");



        await browser.pause(2000);

    }





    /* -----------------------------------------------------------------------------------
      
                 ------------- Quick Quote Purolator End ----------------

    ---------------------------------------------------------------------------------------*/






    /* -----------------------------------------------------------------------------------
      
                 ------------- Pickup & Drop offs ----------------

    ---------------------------------------------------------------------------------------*/


   

 //------------------------------------- Pickup Drop Offs Date Select ---------------------------------

    public async pickupDropSchedule(){

        const pDS = new LabelPurchaseByAllCourierUtilities();

        
        await pDS.cancel.scrollIntoView();
        await pDS.schedul1.click();

       
        await browser.pause(4000);


    }
   

 //------------------------------------- Pickup Drop Offs Date Select ---------------------------------

    public async pickupDropDateSelect() {

        const pDDS = new LabelPurchaseByAllCourierUtilities();


        await pDDS.dateSelect.selectByIndex(1);
        await browser.pause(3000);

        await pDDS.earliestTimeSelect.selectByIndex(1);
        await browser.pause(3000);

        await pDDS.latestTimeSelect.selectByIndex(1);
        await browser.pause(3000);


        await pDDS.instruction.setValue("abc def ghi ok");
        await browser.pause(3000);
        await browser.takeScreenshot();
        await pDDS.schedulePickSave.click();
        await browser.takeScreenshot();
        await browser.pause(7000);


    }




    /* -----------------------------------------------------------------------------------
      
                 ------------- Mobile screen  ----------------

    ---------------------------------------------------------------------------------------*/


  //--------------------------- click View more --------------------------------------------


  public async ViewMoreClick() {

    const vMC = new LabelPurchaseByAllCourierUtilities();

    await browser.pause(2000);

    if (expect(vMC.seeViewMore).toHaveValueContaining('View More')) {

        await vMC.seeViewMore.click();

    }

   

}







    /* -----------------------------------------------------------------------------------
      
                 ------------- Mobile screen Single Domestic ----------------

    ---------------------------------------------------------------------------------------*/



    //--------------------------------- Destination Address -------------------------

    public async MobileDestination() {

        const desti = new LabelPurchaseByAllCourierUtilities();


        await browser.pause(4000);

        await desti.firstNameDestination.setValue("Tamim");
        await desti.lastNameDestination.setValue("Buiyan");
        await desti.companyNameDestination.setValue("Ship Simple");


        await desti.selectCountryDestination.selectByIndex(1);
        await desti.clickSelectStreetDestination.setValue("4 Brant Rd");
        await browser.pause(7000);

        await desti.selectStreetDestination.click();
        await browser.pause(4000);

        await desti.unitNumberDestination.setValue("40");
        await desti.phoneNumberDestination.setValue("5767435675");
        await desti.emailDestination.setValue("tamim@yopmail.com");
        await desti.orderDestination.setValue("13111");
        await desti.invoiceDestination.setValue("13111");

        await browser.takeScreenshot();
        await browser.pause(5000);
        await desti.donetButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(7000);

    }



     /* -----------------------------------------------------------------------------------
      
                 -------------Mobile Single Domestic Residential  Start ----------------

    ---------------------------------------------------------------------------------------*/


    //---------------------------------Mobile Destination Residential Address -------------------------

    public async MobileDestinationResidential() {

        const desti = new LabelPurchaseByAllCourierUtilities();

        // await desti.newShipment.click();
        await browser.pause(4000);

        await desti.firstNameDestination.setValue("Tamim");
        await desti.lastNameDestination.setValue("Buiyan");
        await desti.companyNameDestination.setValue("Ship Simple");


        await desti.selectCountryDestination.selectByIndex(1);
        await desti.clickSelectStreetDestination.setValue("4 Brant Rd");
        await browser.pause(7000);

        await desti.selectStreetDestination.click();
        await browser.pause(4000);

        await desti.unitNumberDestination.setValue("40");
        await desti.phoneNumberDestination.setValue("5767435675");
        await desti.emailDestination.setValue("tamim@yopmail.com");
        await desti.orderDestination.setValue("13111");
        await desti.invoiceDestination.setValue("13111");
        await desti.residenceAddresDestination.click();

        await browser.pause(5000);
        await browser.takeScreenshot();
        await desti.donetButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(7000);

    }




  /* -----------------------------------------------------------------------------------
     
                -------------Mobile Single Domestic Insurance  Start ----------------

   ---------------------------------------------------------------------------------------*/




    //---------------------------------Mobile Lets Build Your Shipment with Insurance -------------------------

    public async MobileLetsBuildYourShipmentWithInsurance() {

        const lBYS = new LabelPurchaseByAllCourierUtilities();
        await browser.takeScreenshot();
        await lBYS.lengthPercel.setValue("12");
        await lBYS.widthPercel.setValue("6");
        await lBYS.heightPercel.setValue("10");
        await lBYS.weightPercel.setValue("11");
        await lBYS.shipmentProtection.click();
        await lBYS.valueOfShipmentProtection.setValue("100");
        await lBYS.nextButtonBuilderShipment.click();
        await browser.takeScreenshot();
        await browser.pause(7000);
    }


    /* -----------------------------------------------------------------------------------
      
                 -------------Mobile Single Domestic Insurance  End ----------------

    ---------------------------------------------------------------------------------------*/









}
export default Utilities;