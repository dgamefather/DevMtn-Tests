var psych = {};
var data = require('../../testAssets/lessonTestAssets/databaseAssets');
module.exports = {
    before: browser => {
        psych = browser.page.databasePage();
        psych
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Psychic Visions': browser => {
        data.forEach(dbItem => {
            psych
                .searchSelf(dbItem)
                .clickSelf(dbItem)
                .editSelf(dbItem)
                .verifySelf(dbItem)
        });
    }
}