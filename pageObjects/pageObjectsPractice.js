module.exports = {
    url: 'https://www.google.com',
    elements: {
        searchBar: 'input[name"q"]',
        luckyBtn: {
            selector: '//input[@id="gbqfbb"]',
            locationStrategy: 'Xpath'
        },
    }
}