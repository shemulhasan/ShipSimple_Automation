import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },


    specs: [




        // './test/specs/**/Registration.ts',
        // './test/specs/**/EmailVerificationProfileSet.ts',

        './test/specs/**/SignIn.ts',

        './test/specs/**/A_SingleDomesticCanadaPost.ts',
        './test/specs/**/A_SingleDomesticGLS.ts',



        './test/specs/**/A_SingleDomesticLoomisAPI.ts',
        './test/specs/**/A_SingleDomesticPurolator.ts',
        './test/specs/**/B_SDResidentialCanadaPost.ts',
        './test/specs/**/B_SDResidentialGLS.ts',



        './test/specs/**/B_SDResidentialLoomisAPI.ts',
        './test/specs/**/B_SDResidentialPurolator.ts',
        './test/specs/**/C_SDInsuranceCanadaPost.ts',
        './test/specs/**/C_SDInsuranceGLS.ts',



        './test/specs/**/C_SDInsuranceLoomisAPI.ts',
        './test/specs/**/C_SDInsurancePurolator.ts',

        './test/specs/**/D_SDSignatureCanadaPost.ts',
        './test/specs/**/D_SDSignatureGLS.ts',
        './test/specs/**/D_SDSignatureLoomisAPI.ts',
        './test/specs/**/D_SDSignaturePurolator.ts',



        './test/specs/**/E_MPDomesticGLS.ts',

       

        './test/specs/**/E_MPDomesticLoomisAPI.ts',
        './test/specs/**/E_MPDomesticPurolator.ts',
        './test/specs/**/F_InternationalSingleParcel.ts',
        './test/specs/**/F_InternationalSingleDocument.ts',
        './test/specs/**/F_InternationalInsuranceDefault.ts',
        './test/specs/**/F_InternationalMultiPackage.ts',

       

        './test/specs/**/G_QuickQuoteDomestic1.ts',
        './test/specs/**/G_QuickQuoteDomestic2.ts',
        './test/specs/**/G_QuickQuoteDHL.ts',

        //---------------------------------------------------------------------------------

        //   './test/specs/**/H_PickUpDropCanadaPost.ts',
        //   './test/specs/**/H_PickUpDropGLS.ts',
        //   './test/specs/**/H_PickUpDropLoomis.ts',
        //   './test/specs/**/H_PickUpDropLoomisAPI.ts',
        //   './test/specs/**/H_PickUpDropPurolator.ts',
        //   './test/specs/**/H_PickUpDropDHL.ts',
        //   './test/specs/**/NotShowGLSCourier.ts',
        //  './test/specs/**/QuickQuoteLabelPurchase.ts',
        // './test/specs/**/TrackandManage.ts',
        // './test/specs/**/SigninNegative.ts',

        //------------------------ Abandone file--------------------------

        // './test/specs/**/A_SingleDomesticLoomis.ts',
        // './test/specs/**/B_SDResidentialLoomis.ts',
        // './test/specs/**/C_SDInsuranceLoomis.ts',
        // './test/specs/**/D_SDSignatureLoomis.ts',
        // './test/specs/**/E_MPDomesticCanadaPost.ts',
         // './test/specs/**/E_MPDomesticLoomis.ts',

         

        //--------------------------For Mobile screen file -------------------------


        // './test/specs/**/MA_SignIn.ts',
        // './test/specs/**/MA_SingleDomesticCanadaPost.ts',
        //  './test/specs/**/MA_SingleDomesticGLS.ts',
        // './test/specs/**/MA_SingleDomesticLoomis.ts',
        // './test/specs/**/MA_SingleDomesticLoomisAPI.ts',
        // './test/specs/**/MA_SingleDomesticPurolator.ts',
        //  './test/specs/**/MB_SDResidentialCanadaPost.ts',
        // './test/specs/**/MB_SDResidentialGLS.ts',
        // './test/specs/**/MB_SDResidentialLoomis.ts',
        // './test/specs/**/MB_SDResidentialLoomisAPI.ts',
        // './test/specs/**/MB_SDResidentialPurolator.ts',
        // './test/specs/**/MC_SDInsuranceCanadaPost.ts',
        // './test/specs/**/MC_SDInsuranceGLS.ts',
        // './test/specs/**/MC_SDInsuranceLoomis.ts',
        // './test/specs/**/MC_SDInsuranceLoomisAPI.ts',
        // './test/specs/**/MC_SDInsurancePurolator.ts',
        // './test/specs/**/MD_SDSignatureCanadaPost.ts',
        // './test/specs/**/MD_SDSignatureGLS.ts',
        // './test/specs/**/MD_SDSignatureLoomis.ts',
        // './test/specs/**/MD_SDSignatureLoomisAPI.ts',
        // './test/specs/**/MD_SDSignaturePurolator.ts',
        // './test/specs/**/ME_MPDomesticCanadaPost.ts',
        // './test/specs/**/ME_MPDomesticGLS.ts',
        // './test/specs/**/ME_MPDomesticLoomis.ts',
        // './test/specs/**/ME_MPDomesticLoomisAPI.ts',
        // './test/specs/**/ME_MPDomesticPurolator.ts',
        //  './test/specs/**/MF_InternationalSingleParcel.ts',
        //  './test/specs/**/MF_InternationalSingleDocument.ts',
        //  './test/specs/**/MF_InternationalInsuranceDefault.ts',
        // './test/specs/**/MF_InternationalMultiPackage.ts',
        //  './test/specs/**/MG_QuickQuoteLoomis.ts',
        //  './test/specs/**/MG_QuickQuoteDomestic1.ts',
        //  './test/specs/**/MG_QuickQuoteDHL.ts',
        //   './test/specs/**/MH_PickUpDropCanadaPost.ts',
        //   './test/specs/**/MH_PickUpDropGLS.ts',
        //   './test/specs/**/MH_PickUpDropLoomis.ts',
        //   './test/specs/**/MH_PickUpDropLoomisAPI.ts',
        //   './test/specs/**/MH_PickUpDropPurolator.ts',



    ],

    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome'
        // }, {
        // browserName: 'firefox'
        // }, {
        // browserName: 'MicrosoftEdge'
    }],


    // ===================
    // Test Configurations
    // ===================

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',

    bail: 0,

    // baseUrl: 'http://localhost:8080',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 90000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    services: ['chromedriver'],


    // see also: https://webdriver.io/docs/frameworks


    framework: 'mocha',


    // see also: https://webdriver.io/docs/dot-reporter

    // reporters: [['allure', { outputDir: 'allure-results' }]],

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000
    },

    //
    // =====
    // Hooks
    // =====

    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
    
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
    
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
    
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
    
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {object} suite suite details
    
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {object}  test             test object
     * @param {object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {*}       result.result    return object of test function
     * @param {number}  result.duration  duration of test
     * @param {boolean} result.passed    true if test has passed, otherwise false
     * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },


    /**
     * Hook that gets executed after the suite has ended
     * @param {object} suite suite details
    
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
    
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
    
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
  
    * @param {object} params information about the assertion to be executed
   
   
    
    * @param {object} params information about the assertion that was executed, including its results
    */

}