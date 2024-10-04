import InternationalSingleDocument from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('International Single Document', () => {

    const iSD = new InternationalSingleDocument();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })



    //--------------------------------- Destination Address International Single Document-------------------------

    it('Destination Address International Single Document', async () => {

        await utilities.OriginAddress();

        await utilities.DestinationAddressInternationalSingleDocument();

       

    })

   


    //--------------------------------- Let's Build Your Commercial Invoice International Single Document-------------------------


    it('Lets Build Your Commercial Invoice International Single Document', async () => {

        await iSD.documentsClick.click();
        await iSD.documentsDescription.setValue("For Testing Purpose");
        await iSD.weightPercel.setValue("20");
        
        await browser.pause(2000);
        await iSD.nextButtonForShip.click();
       
        

    })




    //--------------------------------- Select DHL Courier International Single Document -------------------------


    it('Select DHL courier International Single Document', async () => {

        await iSD.DHLCLick.waitForExist();
        await iSD.DHLCLick.click();
        await iSD.DHLNextButton.click();
        await browser.pause(2000);



    })


    //------------------------------------------ Label Print & Download DHL Courier International Single Document----------------------------------

    
    it('Review & Confirm DHL Courier International Single Document', async () => {

        await utilities.ReviewConfirm();


    })

//------------------------------------------ Label Print & Download International Single Document----------------------------------

    it('Label Print & Download DHL Courier International Single Document', async () => {

        await utilities.LabelPrintDownload();

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