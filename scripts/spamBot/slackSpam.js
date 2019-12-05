var slack = {};
var loginInfo = require('../../assets/logins/slack');
module.exports = {
    before: browser => {
        slack = browser.page.slackPage()
        slack
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },

    'Login': browser => { // COMMENT OUT TO SHOW MERCY
        slack
            .login(loginInfo);
    },

    // // TEST ON MYSELF
    // 'SpamBot - Myself': browser => {
    //     slack
    //         .click('@test')
    //         .waitForElementPresent('@text');
    //     for (var x = 0; x <= 2; x++) {
    //         slack
    //             .setValue('@text', [`TEST SPAM ${x} HERE!`, browser.Keys.ENTER]);
    //     }
    // },

    // Mars
    'SpamBot - Mars': browser => {
        slack
            .click('@mars')
            .waitForElementPresent('@text')
            .setValue('@text', ['2 minute SPAM WARNING! TURN ON DO NOT DISTURB ASAP!!!!! Have a nice day. ;)', browser.Keys.ENTER])
            .pause(120000);
        for (var x = 0; x <= 2; x++) {
            slack
                .setValue('@text', ['sPaMeR iS hErE! ;)', browser.Keys.ENTER]);
        }
        slack
            .setValue('@text', ['Your thoughts?', browser.Keys.ENTER])
            .pause();
    },

    // // Drey
    // 'SpamBot - Drey': browser => {
    //     slack
    //         .click('@drey')
    //         .waitForElementPresent('@text')
    //     for (var x = 0; x <= 1000; x++) {
    //         slack
    //             .setValue('@text', ['sPaMeR iS hErE! ;)', browser.Keys.ENTER]);
    //     }
    //     slack
    //         .setValue('@text', ['Check my repo for code if you want. Not including login file for security reasons. https://github.com/dgamefather/DevMtn-Tests', browser.Keys.ENTER])
    // },

    // // Sam
    // 'SpamBot - Sam': browser => {
    //     slack
    //         .click('@sam')
    //         .waitForElementPresent('@text')
    //         .setValue('@text', ['Only sending 2-4 msgs to test new concepts. Will delete after test is successful', browser.Keys.ENTER]);
    //     for (var x = 0; x <= 2; x++) {
    //         slack
    //             .setValue('@text', ['Spare Rations Curated is best! LUL', browser.Keys.ENTER]);
    //     }
    //     slack
    //         .pause();
    // },
}