var weatherCommands = {
    enterCity: function (searchObj) {
        this
            .waitForElementPresent('@searchBar')
            .setValue('@searchBar', searchObj.search)
            .click('@searchBtn')
            .waitForElementPresent('@resultCity')
            .verify.containsText('@resultCity', searchObj.result)
            .click('@searchAgain');
        return this;
    },
}

module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weatherCommands],
    elements: {
        searchBar: '.enter-location__input',
        searchBtn: 'button',
        resultCity: '.current-weather__location',
        searchAgain: 'button',
    }
}