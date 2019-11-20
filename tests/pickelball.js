var pickRick = {}
module.exports = {
    before: browser => {
        pickRick = browser.page.pickelballPage();
        pickRick
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Login': browser => {
        pickRick
            .waitForElementPresent('.volunteerText')
            .verify.containsText('.volunteerText', 'Be a part of the action')
            .useXpath()
            .click('(//a[@class="nav-link"])[2]')
            .verify.visible('@user')
            .setValue('@user', 'qatest')
            .setValue('@password', 'testpass')
            .useCss()
            .click('.btn')
            .useXpath()
            .verify.containsText('//li[text() = "Welcome DMQA"]', 'Welcome DMQA')
    },
}