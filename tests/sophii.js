var soph = {}
var ohMy = require('../testAssets/sophiiAssets')
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