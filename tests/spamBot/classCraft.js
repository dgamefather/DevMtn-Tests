module.exports = {
    before: browser => {
        browser.url("https://game.classcraft.com/")
    },
    after: browser => {
        browser.end()
    },
    'Login': browser => {
        browser
            .pause(3000)
            .click('.Login__toggle-button-wrap')
            .pause(1000)
            .setValue('[name="username"]', ['fng_pewdrew'])
            .pause(3000)
            .setValue('[name="password"]', ['ILoveMom!', browser.Keys.ENTER])
    },
    'SpamBot': browser => {
        browser
            .pause(3000)
            .url('https://game.classcraft.com/student/class/TKR6FowWthvbMRGrG/messaging')
            .pause(3000)
            .useXpath()
            .click('//div[contains(text(), "Mr. Gardner Gardner")]')
            .useCss()
            for(var x = 0; x <= 20; x++ )
            {
                browser
                    .setValue('[name="newComment"]', ['sPaMeR iS hErE! :)', browser.Keys.ENTER])
            }
            browser.pause()
    }
}