// Page Object
var home = {};
var traps = require('../testAssets/homeTraps');
module.exports = {
    beforeEach: browser => {
        home = browser.page.homeAlonePage();
        home
            .navigate();
    },
    after: browser => {
        home
            .end();
    },
    'Loan Application': browser => {
        traps.forEach(trapItem => {
            home
                .app(trapItem);
            console.log(trapItem);
        });
    },
};