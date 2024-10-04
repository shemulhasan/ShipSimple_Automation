class LocatorHome {



  /* -----------------------------------------------------------------
      
         ------------- Signup ----------------

   ----------------------------------------------------------------- */

get businessShiping(){
  return $("//input[@id='business_shipping']");
}
get companyName(){
  return $("//input[@id='company_name']");
}
get email(){
  return $("//input[@id='email']");
}
get password(){
  return $("//input[@id='password']");
}
get howManyShipment(){
  return $("//input[@id='no_of_courier']");
}
get hearwhere(){
  return $("//select[@id='how_hear']");
}
get signupButton(){
  return $('//span[@class="text-red-500 font-bold text-xs ml-1 flex-1"]');
} ////span[contains(text(),'Sign Up Now')]
get ConfirmSignup(){
  return $("//p[contains(text(),'Check your email to verify your account')]");
} ////span[contains(text(),'Sign Up Now')]





   /* -----------------------------------------------------------------
      
         ------------- Signin ----------------

   ----------------------------------------------------------------- */





  

  /* -----------------------------------------------------------------
      
       ------------- Inner Country Label Purchase ----------------

  ----------------------------------------------------------------- */

   //-------------------------------- Origin address --------------

   get originSearchAddressBook(){
    return $("(//input[@id='addressBook'])[1]");
  }

   get useProfileAdressForOrigin(){
    return $("(//p[contains(text(),'Use Profile Address')])[1]");
  }



  //-------------------------------- Destination address --------------

  get newShipment(){
    return $("//span[contains(text(),'New Shipment')]");
  }

  get destinationAddressManual(){
    return $("(//p[contains(text(),'Add Address')])[2]");
  }


  get firstNameDestination() {
    return $('//input[@name="contact_first_name"]');
  }
  get lastNameDestination() {
    return $('//input[@name="contact_last_name"]');
  }
  get phoneNumberDestination() {
    return $('//input[@name="contact_phone"]');
  }
  get emailDestination() {
    return $('//input[@id="contact_email"]');
  }
  get companyNameDestination() {
    return $('//input[@name="company_name"]');
  }
  get selectCountryDestination() {
    return $('//select[@name="country"]');
  }
  get selectStateDestination() {
    return $('//select[@name="state"]');
  }
  get clickSelectStreetDestination() {
    return $('//input[@id="street1"]');
  }
  get selectStreetDestination() {
    return $('(//li[@class="p-2 cursor-pointer hover:bg-gray-100 text-black text-sm flex justify-between"])[1]');
  }
  get unitNumberDestination() {
    return $('//input[@name="street2"]');
  }
 
  get orderDestination() {
    return $('//input[@name="reference"]');
  }
  get invoiceDestination() {
    return $('//input[@name="invoice_reference"]');
  }
  get residenceAddresDestination() {
    return $('//input[@id="residential"]');
  }
  get donetButtonDestination() {
    return $("//span[contains(text(),'Done')]");
  }

  get svgEditIconDestination() {
    return $("//body/div[@id='__next']/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/*[1]");
  }

  get searchDestinationAddressFromSave(){
    return $("(//input[@id='addressBook'])[2]");
  }

  get searchDestinationAddressFromSaveClick(){
    return $("(//li[@class='p-2 cursor-pointer hover:bg-ternary-200 text-black text-xs border-b-2'])[1]");
  }

  get provinceDestination() {
    return $("//select[@name='state']");
  }
  get ABDestination() {
    return $("//option[@value='AB']");
  }
  get BCDestination() {
    return $("//option[@value='BC']");
  }
  get MBDestination() {
    return $("//option[@value='MB']");
  }
  get SKDestination() {
    return $("//option[@value='SK']");
  }


  get suggestAddress() {
    return $("//span[contains(text(),'Use Entered Address')]");
  }




  //--------------------------------Let's Build Your Shipment --------------------------


  get lengthPercel() {
    return $("//input[@name='parcels.0.length']");
  }
  get widthPercel() {
    return $("//input[@name='parcels.0.width']");
  }
  get heightPercel() {
    return $("//input[@name='parcels.0.height']");
  }
  get weightPercel() {
    return $("//input[@name='parcels.0.weight']");
  }
  get weightMeasurePercel() {
    return $("(//select[@name='parcels.0.weight_unit'])[1]");
  }
  get addPercel() {
    return $("(//button[@class='BuildShipment_add_button__e10E4'])[2]"); 
  }
  get shipmentProtection() {
    return $("(//span[@class='ToggleButton_slider__9IWAF ToggleButton_round__1daP8'])[1]");
  }
  get valueOfShipmentProtection() {
    return $("//input[@name='protectionAmount']");
  }
  get signatureCheck() {
    return $("(//label[@class='ToggleButton_switch__lpIaz'])[2]");
  }
  get nextButtonBuilderShipmentScroll() {
    return $("//button[@class='group flex items-center justify-center p-0.5 text-center relative focus:z-10 focus:outline-none bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg focus:ring-2 mr-10 sm:mr-0']");
  }
  get nextButtonBuilderShipment() {
    return $("//span[contains(text(),'Next')]");
  }



  //--------------------------------Let's Build Your Shipment With Multiple Package--------------------------



  // get scrollAdditionalOptions() {
  //   return $("//h1[contains(text(),'Additional Options')]");
  // }

  get lengthPercel1() {
    return $("(//input[@name='parcels.0.length'])[1]");
  }
  get widthPercel1() {
    return $("(//input[@name='parcels.0.width'])[1]");
  }
  get heightPercel1() {
    return $("(//input[@name='parcels.0.height'])[1]");
  }
  get weightPercel1() {
    return $("(//input[@name='parcels.0.weight'])[1]");
  }
  get addPercel1() {
    return $("(//p[contains(text(),'Add')])[5]"); 
  }


  get lengthPercel2() {
    return $("(//input[@name='parcels.1.length'])[1]");
  }
  get widthPercel2() {
    return $("(//input[@name='parcels.1.width'])[1]");
  }
  get heightPercel2() {
    return $("(//input[@name='parcels.1.height'])[1]");
  }
  get weightPercel2() {
    return $("(//input[@name='parcels.1.weight'])[1]");
  }
  get addPercel2() {
    return $("(//p[contains(text(),'Add')])[6]"); 
  }


 

  get lengthPercel3() {
    return $("(//input[@name='parcels.2.length'])[1]");
  }
  get widthPercel3() {
    return $("(//input[@name='parcels.2.width'])[1]");
  }
  get heightPercel3() {
    return $("(//input[@name='parcels.2.height'])[1]");
  }
  get weightPercel3() {
    return $("(//input[@name='parcels.2.weight'])[1]");
  }
  
  get addPercel3() {
    return $("(//p[contains(text(),'Add')])[7]"); 
  }

  get lengthPercel4() {
    return $("(//input[@name='parcels.3.length'])[1]");
  }
  get widthPercel4() {
    return $("(//input[@name='parcels.3.width'])[1]");
  }
  get heightPercel4() {
    return $("(//input[@name='parcels.3.height'])[1]");
  }
  get weightPercel4() {
    return $("(//input[@name='parcels.3.weight'])[1]");
  }
  





  //-------------------------------- Select A Courier --------------------------


  
  get seeMoreCourierButton() {
    return $("(//span[contains(text(),'Load More')])[1]");
  }

  get GLSCourier() {
    return $("//td[contains(text(),'GRD')]");
  }

  // get selectACourier() {
  //   return $("(//label[@class='Table_container__rKj3W'])[1]");
  // }
  get courierButtonNext() {
    return $("(//button[@class='Button_primary_button__psbZE Button_btn__zvUAT Button_btn__zvUAT'])[2]");
  }



  //-------------------------------- Review & Confirm --------------------------


  get confirmInformation() {
    return $("//input[@id='confirm']");
  }
  get labelPurchaseButton() {
    return $("//span[contains(text(),'Purchase Label')]");
  }


  //-------------------------------- Label Print & Download --------------------------


  get downloadLabel() {
    return $("//span[contains(text(),'Download')]");
  }
  get printLabel() {
    return $("//span[contains(text(),'Print')]");
  }
  
  // get downloadLabel() {
  //   return $('//*[@id="__next"]/div[2]/div/div[2]/div[1]/div/div[2]/div/div/div[2]/button');
  // }
  // get printLabel() {
  //   return $('(//button[@class="Button_primary_button__psbZE Button_btn__zvUAT !mb-0 Button_btn__zvUAT"])[1]');
  // }
  





  /* -----------------------------------------------------------------
      
       ------------- Outer Country Label Purchase ----------------


  ----------------------------------------------------------------- */

  //-----------------------  suggested address   ----------------------

  get useSuggestAddress() {
    return $("//span[contains(text(),'Use Suggested Address')]"); 
  }

  get suggestedAddressClickForDHL() {
    return $("//span[contains(text(),'Use Suggested Address')]"); 
  }




  //--------------------------------Let's Build Your Commercial Invoice for international shipment--------------------------


  get package() {
    return $("//label[contains(text(),'Packages')]");
  }
  get selcetShipmentPurpose() {
    return $("//select[@name='how_hear']");
  }
  get selectWhoWillPay() {
    return $('//select[@id="duties_taxes"]');
  }

 

  
//-----------------------International Multi Package part-1-------------------------------

  get quantity() {
    return $("//input[@placeholder='Quantity']");
  }

  get selectPackage() {
    return $("//select[@id='parcels.0.parcel_items.0.packaging']");
  }

  get itemDescription() {
    return $("//input[@id='description']");
  }

  get weightItem() {
    return $("//input[@id='weight']");
  }
  get valueItem() {
    return $("//input[@name='parcels.0.parcel_items.0.value']");
  }
  
  get countryForMade() {
    return $('//button[@class="ReactFlagsSelect-module_selectBtn__19wW7 itemMadeFlagButton"]');
  }
  get clickCountry() {
    return $("//span[contains(text(),'Belgium')]");
  }
  get HSCode() {
    return $('//input[@placeholder="HS/Commodity Code"]');
  }




//-----------------------International Multi Package part-2-------------------------------

  get quantity2() {
    return $("(//input[@placeholder='Quantity'])[2]");
  }

  get selectPackage2() {
    return $("//select[@id='parcels.1.parcel_items.0.packaging']");
  }

  get itemDescription2() {
    return $("(//input[@id='description'])[2]");
  }

  get weightItem2() {
    return $("(//input[@id='weight'])[2]");
  }
  get valueItem2() {
    return $("//input[@name='parcels.1.parcel_items.0.value']");
  }
  
  get countryForMade2() {
    return $('(//button[@class="ReactFlagsSelect-module_selectBtn__19wW7 itemMadeFlagButton"])[2]');
  }
  get clickCountry2() {
    return $("(//span[contains(text(),'Belgium')])[2]");
  }
  get HSCode2() {
    return $('(//input[@placeholder="HS/Commodity Code"])[2]');
  }




//-----------------------International Multi Package part-3-------------------------------

  get quantity3() {
    return $("(//input[@placeholder='Quantity'])[3]");
  }

  get selectPackage3() {
    return $("//select[@id='parcels.2.parcel_items.0.packaging']");
  }
  get itemDescription3() {
    return $("(//input[@id='description'])[3]");
  }
  get weightItem3() {
    return $("(//input[@id='weight'])[3]");
  }
  get valueItem3() {
    return $("//input[@name='parcels.2.parcel_items.0.value']");
  }
  
  get countryForMade3() {
    return $('(//button[@class="ReactFlagsSelect-module_selectBtn__19wW7 itemMadeFlagButton"])[3]');
  }
  get clickCountry3() {
    return $("(//span[contains(text(),'Belgium')])[3]");
  }
  get HSCode3() {
    return $('(//input[@placeholder="HS/Commodity Code"])[3]');
  }




//-----------------------International Multi Package part-4-------------------------------

  get quantity4() {
    return $("(//input[@placeholder='Quantity'])[4]");
  }

  get selectPackage4() {
    return $("//select[@id='parcels.3.parcel_items.0.packaging']");
  }
  get itemDescription4() {
    return $("(//input[@id='description'])[4]");
  }
  get weightItem4() {
    return $("(//input[@id='weight'])[4]");
  }
  get valueItem4() {
    return $("//input[@name='parcels.3.parcel_items.0.value']");
  }
  
  get countryForMade4() {
    return $('(//button[@class="ReactFlagsSelect-module_selectBtn__19wW7 itemMadeFlagButton"])[4]');
  }
  get clickCountry4() {
    return $("(//span[contains(text(),'Belgium')])[4]");
  }
  get HSCode4() {
    return $('(//input[@placeholder="HS/Commodity Code"])[4]');
  }




  get invoiceNumberCheck() {
    return $('//input[@id="includeInvoice"]');
  }
  get invoiceNumber() {
    return $('//input[@id="invoice_number"]');
  }
  get additionalInvoiceInformation() {
    return $('//textarea[@id="comment"]');
  }

  get nextButtonForShip() {
    return $('//span[@class="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2"]');
  }
  get nextButtonForShipConfirm() {
    return $('(//span[@class="text-md font-bold"])[2]');
  }


  //--------------------------------- Documents --------------------------------

  get documentsClick() {
    return $("//label[contains(text(),'Documents')]");
  }  
  get documentsDescription() {
    return $('//input[@id="document_description"]');
  }  
  get documentsNextButtonClick() {
    return $("(//span[contains(text(),'Next')])[1]");
  }  

  //--------------------------------Select DHL Courier --------------------------

  get DHLCLick() {
    return $('(//span[@class="RateTable_checkmark__T6kfB dhl_api"])[1]');
  }
  get DHLNextButton() {
    return $('(//span[@class="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2"])[2]');
  }




  /* ---------------------------------------------------------------------------
      
       -------------  Label Purchase by using all courier  ----------------


  ---------------------------------------------------------------------------- */


  //------------- for destination address search ----------------

  get searchAddressBook() {
    return $('//img[@class="CustomTextField_icon__vXiIh"]');
  }
  get selectFirstAddress() {
    return $("//li[contains(text(),'wwer rggss - weref - 1-58 Glendale Ave, 12, St Catharines, ON, L2T2J3, CA')]");
  }
  get selectSecondAddress() {
    return $("//li[contains(text(),'Tamim Bhuiyan - Prolific - A-619 Lakeshore Dr, 6, Cold Lake, AB, T9M1A2, CA')]");
  }


//------------------------ courirer --------------------------


  // get loomisClass(){
  //   return $("(//td[@class='loomis_api'])[1]"); 
  // } 


  get scrollAction(){
    return $("//h1[contains(text(),'Select A Courier')]"); ////div[contains(text(),'Action')]
  } // (//button[@class='Button_primary_button__psbZE Button_btn__zvUAT Button_btn__zvUAT'])[1]

  // get scrollLoadMore(){
  //   return $("//span[contains(text(),'Back')]"); 
  // } 

  get loomisCourier() {
    return $("(//span[@class='RateTable_checkmark__T6kfB loomis_api'])[1]");
  }


  get loomisAPI() {
    return $('(//td[@class="loomis_api"])[5]');
  }

  get courierName() {
    return $("//span[@id='courierName']");
 
  }
 



  // get GLSScrollAction() {
  //   return $("//h1[contains(text(),'Select A Courier')]s");
  // }
  get GLSScrollAction() {
    return $("(//td[@class='gls'])[1]");
  }
  get GLS() {
    return $("(//span[@class='RateTable_checkmark__T6kfB gls'])[1]");
  }
  get Canadapost_Xpresspost() {
    return $("(//td[@class='canadapost_cp'])[5]"); 
  }
  
  get purolatorCourierScroll() {
    return $("(//td[@class='purolator_p'])[1]");
  }
  get purolator_Xpresspost() {
    return $('(//td[@class="purolator_p"])[5]');
  }
  

  get courierButtonNextAllCourier() {
    return $("//button[@class='group flex items-center justify-center p-0.5 text-center relative focus:z-10 focus:outline-none bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg focus:ring-2 my-3 sm:mr-0']");
  }

  get i_confirm() {
    return $("//label[contains(text(),'I confirm the information entered is complete and accurate.')]");
  }
  get labelPurchaseButtonAllCourier() {
    return $("//span[contains(text(),'Purchase Label')]");
  }//

  get downloadLabelAllCourier() {
    return $("//span[contains(text(),'Download')]");
  }
  get printLabelAllCourier() {
    return $("//span[contains(text(),'Print')]");
  }
  get done() {
    return $("//span[contains(text(),'Done')]");
  }
  get done1() {
    return $('(//button[@class="Button_primary_secondary_button__1Wjcg Button_btn__zvUAT Button_btn__zvUAT"])[1]');
  }



/*-------------------------------------------------------------------------

       ---------------------- PickUpDrop ------------------------

---------------------------------------------------------------------------*/

get pickUpandDropClick() {
  return $("//span[contains(text(),'Pickups & Drop Offs')]");
}



 //------------------------------------------ Pickup and Drops Off For GLS-------------------------------------


 get CanadaPostCPnewPU() {
  return $("(//button[@class='couirer_5 Table_btn__Yf57I'])[1]");
}
 get CanadaPostCPSecondnewPU() {
  return $("(//button[@class='couirer_5 Table_btn__Yf57I'])[3]");
}


 get GLSnewPU() {
  return $("(//button[@class='couirer_4 Table_btn__Yf57I'])[1]");
}

get loomisnewPU() {
  return $("(//button[@class='couirer_3 Table_btn__Yf57I'])[1]");
}

 get loomisAPInewPU() {
  return $("(//button[@class='couirer_9 Table_btn__Yf57I'])[1]");
}

 get purolatornewPU() {
  return $("(//button[@class='couirer_6 Table_btn__Yf57I'])[1]");
}

 get DHLnewPU() {
  return $("(//button[@class='couirer_7 Table_btn__Yf57I'])[1]");
}

 get schedule() {
  return $("//span[contains(text(),'Schedule')]");
}
 get schedul1() {
  return $('(//button[@class="Button_primary_secondary_button__1Wjcg Button_btn__zvUAT Button_btn__zvUAT"])[1]');
}
 get cancel() {
  return $('(//button[@class="Button_primary_secondary_button__1Wjcg Button_btn__zvUAT Button_btn__zvUAT"])[2]');
}


 //------------------------------------------ Date Select -------------------------------------


 get dateSelect() {
  return $('//select[@id="day"]');
}
 get earliestTimeSelect() {
  return $('(//select[@id="time"])[1]');
}
 get latestTimeSelect() {
  return $('(//select[@id="time"])[2]');
}

 get instruction() {
  return $('//textarea[@placeholder="Example: Pickup at reception"]');
}

  get schedulePickSave() {
    return $("//span[contains(text(),'Save')]");
  }


//------------------------------------------ Date Select -------------------------------------

//  get dateSelect() {
//   return $('//button[@class="react-calendar__tile react-calendar__month-view__days__day highlight"]');
// }
//  get instruction() {
//   return $('//textarea[@placeholder="Example: Pickup at reception"]');
// }
//  get schedulePickSave() {
//   return $("//span[contains(text(),'Save')]");
// }

//------------------------------------------ Schedule Pick Done -------------------------------------
 get schedulePickDone() {
  return $("//span[contains(text(),'Done')]");
}






  /* --------------------------------------------------------------------------
      
        ------------- Quick Quote Label Purchase ----------------

  --------------------------------------------------------------------------- */



  //-----------------------------  Quick Quote   ----------------------------------------

  get quickQuoteClick(){
    return $("//p[contains(text(),'Quick Quote')]");
  }

  

  //-----------------------  Quick Quote Origin Destination address   ----------------------

  get originPostalCode(){
    return $("//input[@name='origin_postalcode_qq']");
  }
  get originPostalCodeSelect(){
    return $("//li[@class='Layout_address__YLXTN']");
  }
  get destinationPostalCode(){
    return $("//input[@name='destination_postalcode_qq']");
  }
  get destinationPostalCodeSelect(){
    return $("//li[@class='Layout_address__YLXTN']");
  }
  get destinationCountrySelectDHL(){
    return $("//select[@name='destination_country']");
  }

  get whatyouSendSelect(){
    return $("//select[@id='what_sending_qq']");
  }

  get lengthDimensions() {
    return $("//input[@id='length_qq']");
  }
  get widthDimensions() {
    return $("//input[@id='width_qq']");
  }
  get heightDimensions() {
    return $("//input[@id='height_qq']");
  }
  get weightDimensions() {
    return $("//input[@id='weight_qq']");
  }
  get getQuoteButton() {
    return $("//span[@class='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2']");
  }
  
  get cheapRatecourierForQuickQuote() {
    return $("(//img[@loading='lazy'])[8]");
  }
  get cheapRatecourierValueForQuickQuote() {
    return $("(//p[@class='text-lg mt-2 font-bold'])[1]");
  }

  get getNewQuoteScroll() {
    return $("//span[contains(text(),'Get A New Quote')]");
  }
  get completeThisShipmetButton() {
    return $("//span[contains(text(),'Complete This Shipment')]");
  }
  



  get elementAppearForCourierRatePage() {
    return $("(//img[@loading='lazy'])[7]");
  }

  get cheapCourierValue() {
    return $("//tbody/tr[1]/td[7]");
  }



   //--------------------------------- Origin address  -------------------------


   get originFirstName() {
    return $("//input[@id='contact_first_name']");
  }
   get originLastName() {
    return $("//input[@id='contact_last_name']");
  }
   get originCompanyName() {
    return $("(//input[@id='company_name'])[2]");
  }
   get originStreetAddress() {
    return $("(//input[@id='street1'])[2]");
  }
   get originStreetAddressSelect() {
    return $("//li[@class='DestinationAddress_address__ZEUBV']");
  }
   get originUnitNumber() {
    return $("(//input[@id='street2'])[2]");
  }
   get originPhoneNumber() {
    return $("//input[@id='contact_phone']");
  }
   get originOrderReference() {
    return $("//input[@id='order']");
  }
   get originNextButton() {
    return $("//button[@class='Button_primary_button__psbZE Button_btn__zvUAT Button_btn__zvUAT']");
  }
   get originNextButtonBuild() {
    return $("//button[@class='Button_primary_button__psbZE Button_btn__zvUAT Button_btn__zvUAT']");
  }

  




  
  /* --------------------------------------------------------------------------
      
        ------------- Track & Manage ----------------

  --------------------------------------------------------------------------- */



//-----------------------------  Track & Manage   ----------------------------------------

  get trackAndManage() {
    return $("//span[contains(text(),'Track & Manage')]");
  }

  
//-----------------------------  Track & Manage Shipment Track  ----------------------------------------

  get pretansitTrackAndManage() {
    return $('(//span[@class="Table_trackingCode__BQdw_"])[1]');
  }

  get crossButtonTrackAndManage() {
    return $('//img[@src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclose.08f59b1d.png&w=128&q=75"]');
  }

  
//-----------------------------  Track & Manage Label Cancel  ----------------------------------------

  get detailsTrackAndManage() {
    return $("(//button[@class='Table_accordion__HnSoy'])[1]");
  }

  get cancelLabelTrackAndManage() {
    return $("(//button[@class='Button_tertiary_button__R_GJ8 Button_btn_large__agE1u Table_button_with_info_bubble__YD3f0 Button_btn__zvUAT'])[2]");
  }


//-----------------------------  Track & Manage Label Cancel Confirm ----------------------------------------

  get yesLabelTrackAndManage() {
    return $("//span[contains(text(),'Yes')]");
  }
  get cancelConfirmToastTrackAndManage() {
    return $("//p[contains(text(),'Shipment cancelled successfully')]");
  }



   /* --------------------------------------------------------------------------
      
        ------------- Email Verification Profile Set ----------------

  --------------------------------------------------------------------------- */


//-----------------------------  Track & Manage Label Cancel Confirm ----------------------------------------

  get selectstreetAddress() {
    return $("(//li[@class='Profile_address__HkUPd'])[1]");
  }
  get unitNumberProfile() {
    return $("//input[@id='unit_suite']");
  }
  get phoneNumberProfile() {
    return $('//input[@name="phone_number"]');
  }
  get noThanksClick() {
    return $("//span[contains(text(),'No, Thank You')]");
  }
 

  



    //---------------------------------------  Mobile Locators  ---------------------------------------------------


    /* -----------------------------------------------------------------
      
               ------------- For Mobile Single Domestic CanadaPost ----------------

    ----------------------------------------------------------------- */

    get firstNameDestinationScroll() {
      return $('//input[@name="first_name"]');
    }

   get nextButtonScrollForSeeViewMore() {
    return $("(//span[contains(text(),'Next')])[7]");
  }

   get seeViewMore() {
    return $("(//button[@class='Button_secondary_button__D0ry8 Button_btn__zvUAT Button_btn__zvUAT'])[2]");
  }

  get scrollActionCourierSelect(){
    return $("(//td[@class='canadapost_cp'])[1]"); 
  } 






/* --------------------------------------------------------------------------
      
      ------------- For Mobile All courier select ----------------

---------------------------------------------------------------------------- */

get mobilesScrollActionGLS(){
  return $("(//img[@class='gls'])[1]"); ////div[contains(text(),'Action')]
} 
get GLSMobile() {
  return $("(//span[@class='SelectACourier_checkmark__zuuUQ gls'])[1]");
}







}

export default LocatorHome;
//module.exports = new LocatorHome();