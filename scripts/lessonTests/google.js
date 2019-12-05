var google = {}
module.exports = {
    beforeEach: browser => {
        google = browser.page.pageObjectsPratice()
        google
            .navigate();
    },
    after: browser => {
        google
        browser
            .end();
    },
    'Your test here': browser => {
        google
            .setValue('@searchBar', 'dgamefather')
            .click('@luckyBtn')
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'dgamefather', 'Text is there, have a nice day!')
            .pause(30000)
    }
}