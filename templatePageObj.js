var sampleCommands = {
    sample: function (param) {
        this
            .somethingHere();
        return this;
    },
}
module.exports = {
    url: 'https://thisurl.com',
    commands: [sampleCommands],
    elements: {
        nameOfXpathSelector: {
            selector: ('selector'),
            locateStrategy: 'xpath'
        },
        nameOfCssSelector: '',
    }
}