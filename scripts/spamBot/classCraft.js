var craft = {};
var loginInfo = require('../../assets/logins/andrew');
module.exports = {
    before: browser => {
        craft = browser.page.classPage()
        craft
            .navigate();
    },
    after: browser => {
        browser
        .end();
    },
    'Login': browser => {
        craft
            .login(loginInfo);
    },
    'SpamBot': browser => { // BROKEN!
        craft
            .click('@messanger')
            .pause(3000)
            .click('@guard')
            .waitForElementPresent('@text')
        for (var x = 0; x <= 20; x++) {
            craft
                // .setValue('@text', ['sPaMeR iS hErE! :)', browser.Keys.ENTER])
                .setValue('@text', 'sPaMeR iS hErE! :)')
                .pause()
        }
        // craft
        //     .pause();
    },
}