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

    // Delete message
    'DeleteBot': browser => {
        browser
            .url('https://app.slack.com/client/T039C2PUY/DQ7L6D1V2')
            .pause(1000);

        var xpath = '//span[contains(text(), "sPaMeR iS hErE!")]';

        browser.useXpath();

        function scrollUpUntilVisible(xpathToFind)
        {
            browser.isVisible(
                { selector: xpathToFind, index: 1, suppressNotFoundErrors: true },
                function(res){ 
                    //console.log('isVisible result', res);
                    if(res.status === -1)
                    {
                        browser.keys([browser.Keys.PAGEUP]);
                        scrollUpUntilVisible(xpathToFind);
                    }
                }
            );
        }

        scrollUpUntilVisible(xpath);
        browser
            .keys([browser.Keys.PAGEUP])
            .moveToElement(xpath, 10, 10)
            .useCss()
            .waitForElementVisible('i.c-icon--small-ellipsis')
            .moveToElement('i.c-icon--small-ellipsis', 10, 10, function(){
                console.log('trying to click the ellipsis to bring up the Delete Message option');
                browser.click('i.c-icon--small-ellipsis');
            });
        
        browser.pause();
    }
}