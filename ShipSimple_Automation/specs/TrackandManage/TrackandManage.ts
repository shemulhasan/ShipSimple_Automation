
import TrackandManage from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Track & Manage', () => {

    const tM = new TrackandManage();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })




    /* ---------------------------------------------------------------------------
  
         -------------  Track & Manage  ----------------

    ---------------------------------------------------------------------------- */


    //--------------------------------- Track & Manage -------------------------


    it('Track and Manage', async () => {

        await tM.trackAndManage.click();
        await browser.pause(2000);


    })




    //--------------------------------- Track & Manage Shipment Track -------------------------

  
    it('Track & Manage Shipment Track', async () => {

        await tM.pretansitTrackAndManage.click();
        await browser.pause(2000);

        await tM.crossButtonTrackAndManage.click();
        await browser.pause(2000);


    })



    //--------------------------------- Track & Manage Label Cancel -------------------------

  
    it('Track & Manage Label', async () => {

        await tM.detailsTrackAndManage.click();
        // await tM.cancelLabelTrackAndManage.click();
        await browser.pause(2000);


    })


    //--------------------------------- Track & Manage Label Cancel Confirm-------------------------

  
    // it('Track & Manage Label Cancel Confirm', async () => {

    //     await tM.yesLabelTrackAndManage.click();
    //     await browser.pause(2000);
    //     expect(tM.cancelConfirmToastTrackAndManage).toHaveText("Shipment cancelled successfully");
    //     const toastMessage = await tM.cancelConfirmToastTrackAndManage.getText();

    //     if(toastMessage=="Shipment cancelled successfully"){
    //     console.log("\n---------       --------      -------    ---------       ------------\n");
    //     console.log("--------- Shipment Cancel Toast Message: ",toastMessage," ------------");
    //     console.log("\n---------      -------     --------        --------       ------------\n");
    //     }

    //     await browser.pause(4000);


    // })



    
    





})