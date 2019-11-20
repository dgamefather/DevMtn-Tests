module.exports = {
    before: browser => {
        browser.url("https://devmtn.slack.com/");
    },
    after: browser => {
        browser.end();
    },

    'Login': browser => { // COMMENT OUT TO SHOW MERCY
        browser
            // Login
            .pause(1000)
            .setValue('#email', 'brennan@thatoneplace.net')
            .setValue('#password', ['Nin10d0rules!', browser.Keys.ENTER]);
    },

    // // TEST ON MYSELF
    // 'SpamBot': browser => {
    //     browser
    //         .url('https://app.slack.com/client/T039C2PUY/DNDEGR9A8')
    //         .pause(1000)
    //     for (var x = 0; x <= 10; x++) {
    //         browser
    //             .setValue('#undefined', [`TEST SPAM ${x} HERE!`, browser.Keys.ENTER]);
    //     }
    // },

    // Mars
    'SpamBot': browser => {
        browser
            .url('https://app.slack.com/client/T039C2PUY/DQ5RP9U6M')
            .pause(1000)
            .setValue('#undefined', ['5 minute SPAM WARNING! TURN ON DO NOT DISTURB ASAP!!!!! Have a nice day. ;)', browser.Keys.ENTER])
            .pause(300000);
        for (var x = 0; x <= 1000; x++) {
            browser
                .setValue('#undefined', ['sPaMeR iS hErE! ;)', browser.Keys.ENTER]);
        }
        browser
            .setValue('#undefined', ['Your thoughts?', browser.Keys.ENTER])
            .pause();
    },

    // // Drey
    // 'SpamBot': browser => {
    //     browser
    //         .url('https://app.slack.com/client/T039C2PUY/DQ7L6D1V2')
    //         .pause(1000);
    //     for (var x = 0; x <= 1000; x++) {
    //         browser
    //             .setValue('#undefined', ['sPaMeR iS hErE! ;)', browser.Keys.ENTER]);
    //     }
    //     browser
    //         .pause();
    // },

    // // Sam
    // 'SpamBot': browser => {
    //     browser
    //         .url('https://app.slack.com/client/T039C2PUY/DQDRSV0FJ')
    //         .pause(1000);
    //     for (var x = 0; x <= 100; x++) {
    //         browser
    //             .setValue('#undefined', ['Spare Rations Curated is best! LUL', browser.Keys.ENTER]);
    //     }
    //     browser
    //         .pause();
    // },
}