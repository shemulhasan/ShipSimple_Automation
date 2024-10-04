import InternationalSingleDocument from '../../../pageobjects/Locators/Locators.js';
import Utilities from '../../../pageobjects/Utilities/Utilities.js';

describe('International Single Document', () => {

    const iSD = new InternationalSingleDocument();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        browser.setWindowSize(320, 844); 
        await utilities.Signin();
        await browser.pause(5000);

    })



    //--------------------------------- Destination Address International Single Document-------------------------

    it('Destination Address International Single Document', async () => {


        await utilities.DestinationAddressInternationalSingleDocument();
      
        await browser.pause(4000);

        //--------------------------------- suggest adress click -------------------------

        // if (expect(iSD.suggestedAddressClickForDHL).toHaveValueContaining('Use Entered Address')) {

        //     await iSD.suggestedAddressClickForDHL.click();

        // }

        // await browser.pause(7000);



    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Single Document-------------------------


    it('Lets Build Your Commercial Invoice International Single Document', async () => {

        await iSD.documentsClick.click();
        await iSD.documentsDescription.setValue("For Testing Purpose");
        await iSD.documentsNextButtonClick.click();
       
        await browser.pause(5000);

    })


    


  //  --------------------------------- Enter Value of percel International Single Document-------------------------


    it('Enter Value of percel International Single Document', async () => {

        await iSD.lengthPercel.setValue("12");
        await iSD.widthPercel.setValue("6");
        await iSD.heightPercel.setValue("10");
        await iSD.weightPercel.setValue("20");
        await iSD.weightMeasurePercel.click();
        
        await iSD.nextButtonBuilderShipment.click();
        await browser.pause(5000);




    })




    //--------------------------------- Select DHL Courier International Single Document -------------------------


    it('Select DHL courier International Single Document', async () => {

        await browser.pause(7000);
        await iSD.DHLCLick.click();
        await iSD.DHLNextButton.click();
        await browser.pause(7000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Single Document----------------------------------

    
    it('Review & Confirm DHL Courier International Single Document', async () => {

        await iSD.confirmInformation.click();
        await iSD.labelPurchaseButton.click();
        await browser.pause(5000); 

    })

//------------------------------------------ Label Print & Download International Single Document----------------------------------

    it('Label Print & Download DHL Courier International Single Document', async () => {

        await iSD.downloadLabel.click();
        await browser.pause(5000);
        await iSD.printLabel.click();
        await browser.pause(5000); 

    })




 //------------------------------------------  Label print and Download Done Domestic International Single Document----------------------------------

it(' Label print and Download Done International Single Document', async () => {

    await browser.pause(2000);
    await iSD.done.click();
    await browser.takeScreenshot();
    await browser.pause(2000);
    console.log("\n=======================================================================================\n");
    console.log("----------------------------"+" Label print and Download Done International Single Document"+"------------------------------\n");
    console.log("=======================================================================================\n");




})






})