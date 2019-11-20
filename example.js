// Calling the PageObjects File
var wanted = {};

// First Function
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
        .click('@save');
};

// Simple Array
var simpleArrayFunction = (obj, data) => {
    obj
        .click('.enter-location__input')
        .setValue('.enter-location__input', data)
        .click('button')
        .waitForElementPresent('.current-weather__weather')
        .verify.containsText('.current-weather__weather', data)
        .click('button');
};

// Complex Array
var complexArrayFunction = (obj, data) => {
    obj
        .click('.enter-location__input')
        .setValue('.enter-location__input', data.search)
        .click('button')
        .waitForElementPresent('.current-weather__weather')
        .verify.containsText('.current-weather__weather', data.result)
        .click('button');
};

// Simple Array
var city = ["Herriman", "Riverton"];

// Complex Array
var zip = [
    {
        search: "84096",
        result: "Herriman"
    },
    {
        search: "84065",
        result: "Riverton"
    },
];

var meth = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    sub: function (num3, num4) {
        return num3 - num4;
    },
    div: function (num5, num6) {
        return num5 / num6;
    },
    mul: function (num7, num8) {
        return num7 * num8;
    },
    mathTest: function (obj, search, results) {
        obj
            .setValue('input[type="text"]', [search, obj.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(results)
    },
};
module.exports = {
    beforeEach: browser => {

        // An example of inject variables
        browser.psych = {
            name: 'Shawn Spencer',
            phone: '8015556789',
            title: 'Ive heard it both ways.'
        };

        // PageObjects
        wanted = browser.page.wantedPageObject();
        wanted
            .navigate();
        browser
            .url('THIS URL HERE');
    },
    after: browser => {
        browser
            .end();
    },
    'TEST NAME HERE': browser => {
        browser
            .somethingHere();
    },
    'Search for Weather': browser => {

        // Manual calling an Array
        simpleArray(browser, city[0]);
        simpleArray(browser, city[1]);

        // Complex Array w/o a for loop
        // Complex Callback
        // ForEach Loop
        zip.forEach(zipItem => {
            complexArray(browser, zipItem);
            console.log(zipItem);
        });
    },

    // First Function Call
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
        });
        wanted
            .click('@clear');
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
        });
    },

    // Page Objects For Loop
    'Navigation: See All': browser => {
        for (var x = 0; x <= 14; x++) {
            yolo
                .waitForElementPresent('@pageItself')
                .click({ selector: '@seeAll', index: x })
                .verify.visible('@filterPlz')
                .api.back();
        };
    },

    // String Interpolation
    'Navigation: See All': browser => {
        browser
            .useXpath();
        for (var x = 1; x <= 15; x++) {
            browser
                .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
                .click(`(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${x}]`) // <=== String Interpolation HERE
                .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
                .back();
        };
    },

    // Method Calls
    'check addition': browser => {
        browser
            .mathTest(browser, '1+2', meth.add(1, 2))

        // Simple Callback
        console.log(meth.add(1, 2))
    },
    'check subtraction': browser => {
        browser
            .mathTest(browser, '32-5', meth.sub(32, 5))
        console.log(meth.sub(32, 5))


    },
    'check division': browser => {
        browser
            .mathTest(browser, '8/2', meth.div(8, 2))
        console.log(meth.div(8, 2))
    },
    'check multiplication': browser => {
        browser
            .mathTest(browser, '2345.3333*2', meth.mul(2345.3333, 2))
        console.log(meth.mul(2345.3333, 2))
    },
}