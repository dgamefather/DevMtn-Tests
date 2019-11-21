var simpleArray = (obj, data) => {
    obj
        .click('.enter-location__input')
        .setValue('.enter-location__input', data)
        .click('button')
        .waitForElementPresent('.current-weather__weather')
        .verify.containsText('.current-weather__weather', data)
        .click('button')
}
var complexArray = (obj, data) => {
    obj
        .click('.enter-location__input')
        .setValue('.enter-location__input', data.search)
        .click('button')
        .waitForElementPresent('.current-weather__weather')
        .verify.containsText('.current-weather__weather', data.result)
        .click('button')
}
var city = ["Herriman", "Riverton"]; // Simple
var zip = [ // Complex
    {
        search: "84096",
        result: "Herriman"
    },
    {
        search: "84065",
        result: "Riverton"
    },
];
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html');
    },
    after: browser => {
        browser
            .end();
    },
    'Search for Weather': browser => {
        simpleArray(browser, city[0]);
        simpleArray(browser, city[1]);
        zip.forEach(zipItem => { complexArray(browser, zipItem) });
    }
}