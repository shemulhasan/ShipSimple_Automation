import QuickQuoteLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Quick Quote Domestic shipment Two', () => {

    const qQL = new QuickQuoteLoomis();
    const utilities = new Utilities();

    let cheapRateCourierName: string;
    let quickQuoteCheaprateValue: string;
    let altAttribute: string;

    let canadaPost: string;
    let gls1: string;
    let loomis1: string;


    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Quick Quote  GLS-------------------------

    it('Quick Quote for Domestic shipment two', async () => {

        await qQL.quickQuoteClick.click();
        await browser.takeScreenshot();
        await browser.pause(3000);


    })


    //--------------------------------- Quick Quote Origin Destination address  Loomis-------------------------

    it('Quick Quote Origin Destination postal code province country address for Domestic shipment two', async () => {


        await qQL.originPostalCode.setValue("K2H 1E5");
        await browser.pause(3000);
        await qQL.originPostalCodeSelect.click();

        await qQL.destinationPostalCode.setValue("R2L 1J9");
        await browser.pause(3000);
        await qQL.destinationPostalCodeSelect.click();

        await qQL.whatyouSendSelect.selectByIndex(1);
        await qQL.lengthDimensions.setValue(3);
        await qQL.widthDimensions.setValue(8);
        await qQL.heightDimensions.setValue(5);
        await qQL.weightDimensions.setValue(13);
        await browser.takeScreenshot();
        await qQL.getQuoteButton.click();
        await browser.pause(2000);
        // await qQL.getNewQuoteScroll.waitForDisplayed();


        quickQuoteCheaprateValue = await qQL.cheapRatecourierValueForQuickQuote.getText();
        console.log("quickQuoteCheaprateValue======================", quickQuoteCheaprateValue);



        const IMG = await $$('img');

        for (let i = 0; i <= 10; i++) {
            const attr = await IMG[i].getAttribute('alt');
            altAttribute = attr
            if (altAttribute == 'GLS' || altAttribute == 'Loomis' || altAttribute == 'Canada Post CP' || altAttribute == 'gls') {

                break;
            }

        }
        console.log("altAttribute======================", altAttribute);



        await qQL.getNewQuoteScroll.scrollIntoView();
        await qQL.completeThisShipmetButton.click();
        await browser.pause(5000);


    })


    //---------------------------------Quick Quote Origin address  Loomis-------------------------


    it('Quick Quote Origin  address for Domestic shipment two', async () => {


        await qQL.firstNameDestination.setValue("Tamim");
        await qQL.lastNameDestination.setValue("Bhuiyan");
        await qQL.phoneNumberDestination.setValue("5767435675");
        await qQL.emailDestination.setValue("tamim@yopmail.com");
        await qQL.companyNameDestination.setValue("Ship Simple");

        await qQL.selectCountryDestination.selectByIndex(1);
        await qQL.clickSelectStreetDestination.setValue("2 Nautica Pvt"); //K2H 1E5
        await qQL.selectStreetDestination.click();

        

        await qQL.unitNumberDestination.setValue("6");
        await qQL.orderDestination.setValue("3473473947");

        await browser.takeScreenshot();
       
        await qQL.donetButtonDestination.click();
        await browser.takeScreenshot();
        await browser.pause(2000);


    })



    //---------------------------------Quick Quote Destination Address Loomis-------------------------

    it(' Quick Quote Destination Address for Domestic shipment two', async () => {


        await qQL.svgEditIconDestination.click();

        await utilities.QuickQuoteDestination();

        await qQL.clickSelectStreetDestination.setValue("101-182 Glenwood Cres"); //1298 Kingston Rd
        await browser.pause(2000);

        await qQL.selectStreetDestination.click();
        await browser.pause(4000);

        await qQL.donetButtonDestination.click();
        await browser.pause(2000);




    })


    //---------------------------------Quick Quote Let's your Build Shipment for Domestic shipment two-------------------------

    it('Quick Quote Lets your Build Shipment for Domestic shipment two', async () => {

        await qQL.nextButtonBuilderShipment.click();



    })



    //---------------------------------Quick Quote Select for Domestic shipment two -------------------------


    it('Quick Quote From Select for Domestic shipment two', async () => {

        await qQL.elementAppearForCourierRatePage.waitForExist();

        const td1=$("td");
        let tdClassValue = await td1.getAttribute('class');
        console.log("\n tdClassValue======================",tdClassValue);


        if(tdClassValue=='loomis_api'){
             loomis1 = 'Loomis';
             console.log("\n loomis1======================",loomis1);
        }
        else if(tdClassValue=='gls'){
             gls1 = 'GLS';
             console.log("\n gls1======================",gls1);
        }
        else if(tdClassValue=='canadapost_cp'){
             canadaPost = 'Canada Post CP';

        }else{
            console.log("\n ===========Do  not found any courier for match===========");
        }
  
         const corierRat= await await qQL.cheapCourierValue.getText();
         console.log("\n corierRat======================",corierRat);

        if(altAttribute==canadaPost || altAttribute==gls1 || altAttribute==loomis1 && quickQuoteCheaprateValue==corierRat){
            console.log("\n=======================================================================================\n");
            console.log("  "+" Quick Quote Courier rat and Shipment courier rat are same"+  "\n");
            console.log("=======================================================================================\n");
            await qQL.courierButtonNextAllCourier.click();
            await browser.pause(2000);

        }

        await browser.pause(2000);
        



    })


    //------------------------------------------Quick Quote Review & Confirm for Domestic shipment two----------------------------------

    it('Quick Quote Review & Confirm for Domestic shipment two', async () => {


        await utilities.ReviewConfirm();

    })



    //------------------------------------------Quick Quote for Domestic shipment two Label Print & Download ----------------------------------

    it('Quick Quote Label Print & Download for Domestic shipment two', async () => {


        await utilities.LabelPrintDownload();


    })


    //------------------------------------------  Label print and Download Done Quick Quote for Domestic shipment two----------------------------------

    it(' Label print and Download Done Quick Quote for Domestic shipment two', async () => {

        await browser.pause(2000);
        await qQL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("    " + " Label print and Download Done Quick Quote for Domestic shipment two" + "    \n");
        console.log("=======================================================================================\n");




    })






})