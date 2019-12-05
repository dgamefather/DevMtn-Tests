var wanted = {};
function query(obj, search) {
    obj
        .waitForElementPresent('@head')
        .setValue('@head', search.header)
        .waitForElementPresent('@mke')
        .setValue('@mke', search.mke)
        .waitForElementPresent('@origin')
        .setValue('@origin', search.origin)
        .waitForElementPresent('@name')
        .setValue('@name', search.name)
        .waitForElementPresent(`[name="sexInput"] option[value="${search.sex}"]`)
        .click(`[name="sexInput"] option[value="${search.sex}"]`)
        .waitForElementPresent(`[name="racInput"] option[value="${search.race}"]`)
        .click(`[name="racInput"] option[value="${search.race}"]`)
        .waitForElementPresent('@height')
        .setValue('@height', search.height)
        .waitForElementPresent('@weight')
        .setValue('@weight', search.weight)
        .waitForElementPresent('@hair')
        .setValue('@hair', search.hair)
        .waitForElementPresent('@offense')
        .setValue('@offense', search.offense)
        .waitForElementPresent('@date')
        .setValue('@date', search.date)
        .waitForElementPresent('@driveId')
        .setValue('@driveId', search.dlid)
        .waitForElementPresent('@driveState')
        .setValue('@driveState', search.dlState)
        .waitForElementPresent('@driveExp')
        .setValue('@driveExp', search.dlExp)
        .waitForElementPresent('@plate')
        .setValue('@plate', search.lip)
        .waitForElementPresent('@plateState')
        .setValue('@plateState', search.liState)
        .waitForElementPresent('@plateExp')
        .setValue('@plateExp', search.liExp)
        .click('@save')
};
module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedPageObject();
        wanted
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Wanted Man': browser => {
        query(wanted, {
            header: 'SS-555789',
            mke: 'ABC',
            origin: '055567890',
            name: 'Shawn Spencer',
            sex: 'M',
            race: 'W',
            height: '509',
            weight: '180',
            hair: 'Brown',
            offense: 'Arson',
            date: '02/14/1977',
            dlid: 'S555789',
            dlState: 'CA',
            dlExp: '12/25/2019',
            lip: '50LPT46',
            liState: 'CA',
            liExp: '12/31/2019'
        })
        wanted
            .click('@clear')
        query(wanted, {
            header: 'BG-555789',
            mke: 'ABC',
            origin: '055567891',
            name: 'Burton Guster',
            sex: 'M',
            race: 'B',
            height: '510',
            weight: '180',
            hair: 'None',
            offense: 'Arson',
            date: '02/14/1977',
            dlid: 'B555789',
            dlState: 'CA',
            dlExp: '12/25/2019',
            lip: '50LPT46',
            liState: 'CA',
            liExp: '12/31/2019'
        })
    },
}