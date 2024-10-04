import QuickQuotePurolator from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Quick Quote Domestic Shipment One', () => {

    const qQP = new QuickQuotePurolator();
    const utilities = new Utilities();

    let cheapRateCourierName:string;
    let quickQuoteCheaprateValue:string;
    let altAttribute:string;

    let canadaPost:string;
    let gls1:string;
    let loomis1:string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Quick Quote  Domestic Shipment-------------------------

    it('Quick Quote Domestic Shipment', async () => {

        await qQP.quickQuoteClick.click();
        await browser.pause(3000);


    })


    //--------------------------------- Quick Quote Origin Destination address  Domestic Shipment-------------------------

    it('Quick Quote Origin Destination postal code province country address Domestic Shipment', async () => {


        await qQP.originPostalCode.setValue("N3L 3E1");
        await browser.pause(2000);
        await qQP.originPostalCodeSelect.click(); 

        await qQP.destinationPostalCode.setValue("L1V 3M9"); //L1V 3M9 //K2H 1E5 
        await browser.pause(3000);
        await qQP.destinationPostalCodeSelect.click();

        await qQP.whatyouSendSelect.selectByIndex(1);
        await qQP.lengthDimensions.setValue(5);
        await qQP.widthDimensions.setValue(7);
        await qQP.heightDimensions.setValue(3);
        await qQP.weightDimensions.setValue(7);
        await qQP.getQuoteButton.click();
        await browser.pause(2000);
        // await qQP.getNewQuoteScroll.waitForDisplayed();

        quickQuoteCheaprateValue = await qQP.cheapRatecourierValueForQuickQuote.getText();
        console.log("quickQuoteCheaprateValue======================",quickQuoteCheaprateValue);

    

    const IMG = await $$('img'); 

    for (let i=0; i<=10; i++) {
        const attr = await IMG[i].getAttribute('alt');
        altAttribute=attr
        if(altAttribute=='GLS'|| altAttribute=='Loomis'|| altAttribute=='Canada Post CP'|| altAttribute=='gls'){

            break;
        }
        
      }
      console.log("altAttribute======================",altAttribute); 

    



        await qQP.getNewQuoteScroll.scrollIntoView();
        await qQP.completeThisShipmetButton.click();
        await browser.pause(2000);


    })


    //---------------------------------Quick Quote Origin address  Domestic Shipment-------------------------


    it('Quick Quote Origin  address Domestic Shipment one', async () => {

      
        await qQP.firstNameDestination.setValue("Tamim");
        await qQP.lastNameDestination.setValue("Buiyan");
        await qQP.phoneNumberDestination.setValue("5767435675");
        await qQP.emailDestination.setValue("tamim@yopmail.com");
        await qQP.companyNameDestination.setValue("Ship Simple");


        await qQP.selectCountryDestination.selectByIndex(1);
        await qQP.clickSelectStreetDestination.setValue("N3L 3E1");
        await qQP.selectStreetDestination.click();

        await browser.pause(2000);

     

        await qQP.unitNumberDestination.setValue("40");  
        await qQP.orderDestination.setValue("13111");
        

        await browser.takeScreenshot();
       
        await qQP.donetButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(2000);

        await utilities.SuggestEnterAddress();


    })



    //---------------------------------Quick Quote Destination Address Domestic Shipment-------------------------

    it(' Quick Quote Destination Domestic Shipment ', async () => {

        qQP.svgEditIconDestination.click();

        await utilities.QuickQuoteDestination();

        await qQP.clickSelectStreetDestination.setValue("2-1298 Kingston Rd"); //1298 Kingston Rd
        await browser.pause(5000);

        await qQP.selectStreetDestination.click();
        await browser.pause(4000);

        await qQP.donetButtonDestination.click();
        await browser.pause(2000);

        // await utilities.SuggestEnterAddress();


    })


    //---------------------------------Quick Quote Let's your Build Shipment Domestic Shipment-------------------------

    it('Quick Quote Lets your Build Shipment Domestic Shipment', async () => {

        

        await qQP.nextButtonBuilderShipment.click();



    })



    //---------------------------------Quick Quote Select Domestic Shipment courier -------------------------


    it('Quick Quote From Select Domestic Shipment Courier', async () => {


        await qQP.elementAppearForCourierRatePage.waitForExist();

        const td1=$("td");
        let tdClassValue = await td1.getAttribute('class');
        console.log("\n tdClassValue======================",tdClassValue);

        if(tdClassValue=='loomis_api'){
             loomis1 = 'Loomis';
             console.log("\n loomis1======================",loomis1);


        }
        else if(tdClassValue=='gls'){
             gls1 = 'GLS';

        }
        else if(tdClassValue=='canadapost_cp'){
             canadaPost = 'Canada Post CP';

        }else{
            console.log("\n ===========Do  not found any courier for match===========");
        }
  
         const corierRat= await await qQP.cheapCourierValue.getText();
         console.log("\n corierRat======================",corierRat);

        if(altAttribute==canadaPost || altAttribute==gls1 || altAttribute==loomis1 && quickQuoteCheaprateValue==corierRat){
            console.log("\n=======================================================================================\n");
            console.log("  "+" Quick Quote Courier rat and Shipment courier rat are same"+  "\n");
            console.log("=======================================================================================\n");
            await qQP.courierButtonNextAllCourier.click();
            await browser.pause(2000);

        }

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
        console.log("    "+" Label print and Download Done Quick Quote Domestic Shipment"+"    \n");
        console.log("=======================================================================================\n");
    
   

})






})