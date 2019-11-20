var soph = {}

module.exports = {
    before: browser => {
        soph = browser.page.sophiiPage();
        soph
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    '': browser => {
        soph
            .somethingHere()
    },
}